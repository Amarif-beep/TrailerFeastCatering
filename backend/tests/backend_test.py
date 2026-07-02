"""Backend regression tests for The Hungry Trailer booking API.

Covers:
- Static trailer catalogue endpoints
- Availability lookup
- Booking creation with new fields (trailer_id, event_location, electricity_available)
- Double-booking prevention (409)
- Unknown trailer_id (400)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback: read from frontend/.env because backend tests run in same repo
    from pathlib import Path
    env_path = Path(__file__).resolve().parents[2] / "frontend" / ".env"
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break

assert BASE_URL, "REACT_APP_BACKEND_URL must be set"


@pytest.fixture(scope="session")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Trailers ----------
def test_trailers_list_returns_three(api):
    r = api.get(f"{BASE_URL}/api/trailers", timeout=30)
    assert r.status_code == 200
    data = r.json()
    trailers = data.get("trailers", [])
    assert len(trailers) == 3
    ids = {t["id"] for t in trailers}
    assert ids == {"hungry-trailer", "hungry-trailer-2", "hungarian-trailer"}


def test_trailer_detail_hungry_trailer(api):
    r = api.get(f"{BASE_URL}/api/trailers/hungry-trailer", timeout=30)
    assert r.status_code == 200
    d = r.json()
    for key in [
        "id", "name", "tagline", "menu", "description", "best_for",
        "setup_size", "electricity", "self_contained", "serving_capacity", "certificates",
    ]:
        assert key in d, f"Missing key {key}"
    assert d["id"] == "hungry-trailer"
    assert isinstance(d["menu"], list) and len(d["menu"]) > 0
    assert isinstance(d["certificates"], list) and len(d["certificates"]) > 0


def test_trailer_detail_not_found(api):
    r = api.get(f"{BASE_URL}/api/trailers/does-not-exist", timeout=30)
    assert r.status_code == 404


# ---------- Availability ----------
def test_availability_returns_shape(api):
    r = api.get(f"{BASE_URL}/api/availability/hungry-trailer", timeout=30)
    assert r.status_code == 200
    d = r.json()
    assert d.get("trailer_id") == "hungry-trailer"
    assert isinstance(d.get("booked_dates"), list)


# ---------- Bookings ----------
def _make_payload(trailer_id="hungry-trailer", event_date=None):
    return {
        "name": f"TEST_{uuid.uuid4().hex[:8]}",
        "email": f"test_{uuid.uuid4().hex[:6]}@example.com",
        "phone": "07123456789",
        "trailer_id": trailer_id,
        "event_date": event_date or f"2099-{uuid.uuid4().hex[:2] if False else '06'}-{(uuid.uuid4().int % 27) + 1:02d}",
        "event_location": "TEST Location, Postcode",
        "event_type": "Private Party",
        "guest_count": 50,
        "electricity_available": True,
        "message": "TEST booking from pytest",
    }


def test_booking_create_success(api):
    # Use a unique future date to avoid conflict with other tests
    date = f"2099-01-{(uuid.uuid4().int % 27) + 1:02d}"
    payload = _make_payload(event_date=date)
    r = api.post(f"{BASE_URL}/api/bookings", json=payload, timeout=30)
    assert r.status_code == 201, f"Body: {r.text}"
    b = r.json()
    assert b["trailer_id"] == payload["trailer_id"]
    assert b["event_location"] == payload["event_location"]
    assert b["electricity_available"] is True
    assert b["status"] == "new"
    assert "id" in b and len(b["id"]) > 0


def test_booking_invalid_trailer_returns_400(api):
    payload = _make_payload(trailer_id="not-a-trailer")
    r = api.post(f"{BASE_URL}/api/bookings", json=payload, timeout=30)
    assert r.status_code == 400


def test_double_booking_returns_409_and_availability_updates(api):
    # Use a unique dedicated date so we don't collide with other test runs
    date = f"2099-02-{(uuid.uuid4().int % 27) + 1:02d}"
    trailer_id = "hungarian-trailer"

    p1 = _make_payload(trailer_id=trailer_id, event_date=date)
    r1 = api.post(f"{BASE_URL}/api/bookings", json=p1, timeout=30)
    # If the date happens to already exist from a previous run, use a different one
    if r1.status_code == 409:
        date = f"2099-03-{(uuid.uuid4().int % 27) + 1:02d}"
        p1 = _make_payload(trailer_id=trailer_id, event_date=date)
        r1 = api.post(f"{BASE_URL}/api/bookings", json=p1, timeout=30)
    assert r1.status_code == 201, f"first booking failed: {r1.text}"

    # Availability should now include the date
    avail = api.get(f"{BASE_URL}/api/availability/{trailer_id}", timeout=30).json()
    assert date in avail["booked_dates"], (
        f"Expected {date} in booked_dates {avail['booked_dates']}"
    )

    # Second booking same trailer + same date -> 409
    p2 = _make_payload(trailer_id=trailer_id, event_date=date)
    r2 = api.post(f"{BASE_URL}/api/bookings", json=p2, timeout=30)
    assert r2.status_code == 409, f"expected 409, got {r2.status_code} - {r2.text}"


def test_booking_missing_required_field_returns_422(api):
    payload = _make_payload()
    payload.pop("event_location")
    r = api.post(f"{BASE_URL}/api/bookings", json=payload, timeout=30)
    assert r.status_code == 422
