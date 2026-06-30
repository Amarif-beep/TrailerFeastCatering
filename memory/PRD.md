# The Hungry Trailer — Marketing Site PRD

## Problem statement
Build a graffiti-art-style marketing website for **The Hungry Trailer** food truck (Daventry, UK). Includes hero, menu (4 categories), about story, reviews, find us, event booking form, and footer.

## User choices (Dec 2025)
- Marketing site + event booking form
- Sample/placeholder menu items & prices
- Use uploaded logo prominently
- Graffiti vibe — black bg + cream/blue/pink/orange accents

## Personas
- **Daventry locals** — find menu, hours, location, phone
- **Event organisers** — book the trailer for weddings/festivals/corporate
- **Repeat customers** — read reviews, share with friends

## Architecture
- **Backend**: FastAPI + MongoDB (`bookings`, `contacts`, `status_checks` collections)
- **Frontend**: React + TailwindCSS, Bungee/Permanent Marker/Bricolage Grotesque fonts, sonner toasts
- **Sections**: Header, Hero, Marquee, Menu, About, Reviews, FindUs (OpenStreetMap iframe), Booking, Footer

## API endpoints
- `GET /api/` — health
- `GET /api/menu` — 4-category menu
- `POST /api/bookings` / `GET /api/bookings`
- `POST /api/contact`

## Implemented (Dec 2025)
- ✅ Full graffiti-styled homepage with all 8 sections
- ✅ Menu tab switcher (Spuds / Fries / Crepes / Hungarian) with sample items + prices
- ✅ Real customer reviews from FB (9 cards with rotation + colored brutalist shadows)
- ✅ Event booking form with validation & success state
- ✅ OpenStreetMap embed + hours table + clickable phone/email
- ✅ Tested end-to-end (100% backend, 100% frontend pass)

## Backlog / P1
- Real menu & prices from operator
- Real social media links (currently `#`)
- Photo gallery of food & events
- Email notification when a booking is submitted (Resend/SendGrid integration)
- Admin view for bookings

## P2
- Online ordering / pre-order pickup
- Event calendar (where the truck is each week)
- Instagram feed embed
- SEO meta tags + Open Graph image
