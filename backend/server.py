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

app = FastAPI(title="The Hungry Trailer API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class BookingCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=40)
    event_date: str = Field(..., min_length=1)
    event_type: str = Field(..., min_length=1)
    guest_count: int = Field(..., ge=1, le=5000)
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
    return {"message": "The Hungry Trailer API — Fresh, Hot & Loaded!"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    status_obj = StatusCheck(**payload.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/bookings", response_model=Booking, status_code=201)
async def create_booking(payload: BookingCreate):
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


@api_router.get("/menu")
async def get_menu():
    """Static menu, returned by the backend so the menu is API-driven."""
    return {
        "categories": [
            {
                "id": "spuds",
                "name": "Jacket Potatoes",
                "tagline": "The legendary spuds. Soft, fluffy, filling.",
                "accent": "orange",
                "items": [
                    {"name": "Pulled Pork Spud", "desc": "Slow-cooked pulled pork, BBQ glaze, crispy onions, slaw.", "price": "£8.50"},
                    {"name": "Chilli Beef Spud", "desc": "Homemade chilli con carne, sour cream, cheddar, jalapeños.", "price": "£8.00"},
                    {"name": "Cheese & Beans Classic", "desc": "Mountain of cheddar, heinz beans, butter, chives.", "price": "£6.50"},
                    {"name": "Ratatouille Spud (V)", "desc": "Slow-cooked ratatouille, herb oil, parmesan shavings.", "price": "£7.50"},
                ],
            },
            {
                "id": "fries",
                "name": "Loaded Fries",
                "tagline": "Crispy, golden, drowning in toppings.",
                "accent": "pink",
                "items": [
                    {"name": "Dirty Bird Fries", "desc": "Buttermilk chicken, hot honey, garlic mayo, spring onion.", "price": "£8.50"},
                    {"name": "Smoked Brisket Fries", "desc": "12hr brisket, smoked cheese, pickles, BBQ drizzle.", "price": "£9.50"},
                    {"name": "Goulash Fries", "desc": "Hungarian beef goulash, sour cream, paprika oil.", "price": "£9.00"},
                    {"name": "Halloumi Loaded (V)", "desc": "Crispy halloumi, harissa, pomegranate, mint yogurt.", "price": "£8.00"},
                ],
            },
            {
                "id": "crepes",
                "name": "Homemade Crepes",
                "tagline": "Sweet & savoury — made fresh on the plancha.",
                "accent": "blue",
                "items": [
                    {"name": "Nutella & Banana", "desc": "Warm nutella, fresh banana, toasted hazelnuts.", "price": "£6.00"},
                    {"name": "Lemon & Sugar", "desc": "Classic — fresh lemon, golden sugar, dusted.", "price": "£4.50"},
                    {"name": "Biscoff Storm", "desc": "Biscoff spread, crushed biscuit, vanilla cream.", "price": "£6.50"},
                    {"name": "Savoury Ham & Cheese", "desc": "Smoked ham, gruyère, dijon, rocket.", "price": "£7.00"},
                ],
            },
            {
                "id": "hungarian",
                "name": "Hungarian Street Food",
                "tagline": "Straight outta Budapest — paprika & soul.",
                "accent": "orange",
                "items": [
                    {"name": "Lángos", "desc": "Deep-fried dough, garlic, sour cream, cheese.", "price": "£6.50"},
                    {"name": "Hungarian Goulash Bowl", "desc": "Slow-cooked beef goulash, dumplings, fresh bread.", "price": "£9.00"},
                    {"name": "Paprika Chicken Wrap", "desc": "Smoky paprika chicken, peppers, garlic yogurt, flatbread.", "price": "£8.00"},
                    {"name": "Stuffed Cabbage (Töltött Káposzta)", "desc": "Pork & rice rolls, paprika sauce, sour cream.", "price": "£8.50"},
                ],
            },
        ]
    }


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
