from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="The Hungry Trailer — Booking API")
api_router = APIRouter(prefix="/api")


# ---------- Static trailer catalogue ----------
TRAILERS = [
    {
        "id": "hungry-trailer",
        "name": "The Hungry Trailer",
        "tagline": "The original — spuds, smash burgers, fries & desserts.",
        "menu": [
            "Jacket Potatoes (10+ toppings)",
            "Smash Burgers",
            "Loaded Fries",
            "Fresh Crepes & Desserts",
        ],
        "description": (
            "Our flagship trailer and the one that started it all — a full mobile "
            "kitchen slinging our signature loaded jacket potatoes, smash burgers, "
            "loaded fries and fresh dessert crepes. Cooked to order on-site, "
            "graffitied inside and out, guaranteed to draw a queue."
        ),
        "best_for": ["Festivals", "Weddings", "Private events", "Corporate events", "Pub nights"],
        "setup_size": "3m x 6m footprint (plus awning/queue area)",
        "electricity": "1 x 32A hook-up OR self-contained via silent generator",
        "self_contained": True,
        "serving_capacity": "Up to 300 covers per event",
        "certificates": [
            "£5m Public Liability Insurance",
            "Level 2 Food Hygiene Certified",
            "5-star Environmental Health Rating",
            "PAT Tested / Gas Safe",
            "HACCP Compliant",
        ],
    },
    {
        "id": "hungry-trailer-2",
        "name": "The Hungry Trailer 2.0",
        "tagline": "Smaller, faster, all the smash.",
        "menu": [
            "Smash Burgers (Single / Double)",
            "Loaded Fries",
            "Brownie Bites",
            "Tiramisu Cups",
        ],
        "description": (
            "Our smaller sister van built for events where speed and footprint matter. "
            "Same graffiti energy, dialled-in to smash burgers and loaded fries at "
            "volume, with a tight dessert list to send guests home happy."
        ),
        "best_for": ["Weddings", "Corporate lunches", "Small festivals", "Private parties", "Pop-ups"],
        "setup_size": "2.5m x 4m footprint",
        "electricity": "1 x 16A hook-up OR self-contained",
        "self_contained": True,
        "serving_capacity": "Up to 150 covers per event",
        "certificates": [
            "£5m Public Liability Insurance",
            "Level 2 Food Hygiene Certified",
            "5-star Environmental Health Rating",
            "PAT Tested / Gas Safe",
            "HACCP Compliant",
        ],
    },
    {
        "id": "hungarian-trailer",
        "name": "Hungarian Cuisine Trailer",
        "tagline": "Paprika, soul, Eastern-European street food.",
        "menu": [
            "Gulyás (Hungarian Goulash)",
            "Chicken Paprikás with Nokedli Dumplings",
            "Grilled Meats (Kolbász, pork skewers)",
            "Lángos (fried dough)",
            "Töltött Káposzta (stuffed cabbage)",
        ],
        "description": (
            "An authentic Hungarian / Eastern-European kitchen on wheels — slow-cooked "
            "goulash, dumplings, grilled meats and lángos. Built for events that want "
            "something different from the usual burger-and-fries line-up."
        ),
        "best_for": ["Cultural festivals", "Weddings", "Corporate events", "Street food markets", "Private events"],
        "setup_size": "3m x 5m footprint",
        "electricity": "1 x 16A hook-up OR self-contained",
        "self_contained": True,
        "serving_capacity": "Up to 250 covers per event",
        "certificates": [
            "£5m Public Liability Insurance",
            "Level 2 Food Hygiene Certified",
            "5-star Environmental Health Rating",
            "PAT Tested / Gas Safe",
            "HACCP Compliant",
        ],
    },
]

TRAILERS_BY_ID = {t["id"]: t for t in TRAILERS}


# ---------- Models ----------
class BookingCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=40)
    trailer_id: str = Field(..., min_length=1)
    event_date: str = Field(..., min_length=1)
    event_location: str = Field(..., min_length=1, max_length=240)
    event_type: str = Field(..., min_length=1)
    guest_count: int = Field(..., ge=1, le=5000)
    electricity_available: bool = False
    message: Optional[str] = Field(default="", max_length=2000)


class Booking(BookingCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=2000)


class Contact(ContactCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "The Hungry Trailer — Booking API"}


@api_router.get("/trailers")
async def get_trailers():
    return {"trailers": TRAILERS}


@api_router.get("/trailers/{trailer_id}")
async def get_trailer(trailer_id: str):
    trailer = TRAILERS_BY_ID.get(trailer_id)
    if not trailer:
        raise HTTPException(status_code=404, detail="Trailer not found")
    return trailer


@api_router.get("/availability/{trailer_id}")
async def get_availability(trailer_id: str):
    """Return list of booked ISO dates (YYYY-MM-DD) for a trailer."""
    if trailer_id not in TRAILERS_BY_ID:
        raise HTTPException(status_code=404, detail="Trailer not found")
    rows = await db.bookings.find(
        {"trailer_id": trailer_id, "status": {"$in": ["new", "confirmed"]}},
        {"_id": 0, "event_date": 1},
    ).to_list(2000)
    booked = sorted({r["event_date"] for r in rows if r.get("event_date")})
    return {"trailer_id": trailer_id, "booked_dates": booked}


@api_router.post("/bookings", response_model=Booking, status_code=201)
async def create_booking(payload: BookingCreate):
    if payload.trailer_id not in TRAILERS_BY_ID:
        raise HTTPException(status_code=400, detail="Unknown trailer_id")
    # Prevent double-booking the same trailer on same date
    existing = await db.bookings.find_one({
        "trailer_id": payload.trailer_id,
        "event_date": payload.event_date,
        "status": {"$in": ["new", "confirmed"]},
    })
    if existing:
        raise HTTPException(status_code=409, detail="That trailer is already booked on that date.")

    booking = Booking(**payload.model_dump())
    doc = booking.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.bookings.insert_one(doc)
    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings():
    rows = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.post("/contact", response_model=Contact, status_code=201)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)
    return contact


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
