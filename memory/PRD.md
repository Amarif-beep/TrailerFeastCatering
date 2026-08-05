# Trailer Feast Catering — Marketing Site PRD

## Problem statement
Premium marketing + booking site for a fleet of UK catering trailers (formerly "The Hungry Trailer"). One active trailer + one "coming soon" (The Hungarian Lakoma). Three routes: Home, Van Detail, Book & Contact. Live availability calendar and event booking form.

## Personas
- **Event organisers** — book a trailer for weddings/festivals/corporate
- **Locals** — browse menu / gallery / specs
- **Repeat customers** — see reviews, share with friends

## Architecture
- **Backend**: FastAPI + MongoDB (`bookings` collection with double-booking prevention)
- **Frontend**: React 19 + TailwindCSS + framer-motion + Lenis smooth scroll
- **Fonts**: Big Shoulders Display (headings), Newsreader italic (editorial accents), Bricolage Grotesque (body)
- **Design language**: Premium dark charcoal + gold, cinematic hero with parallax + masked line-by-line reveal (framer-motion), editorial marquee, numbered manifesto chapters, film-grain overlays

## Routes
- `/` — Home
- `/vans/:id` — Van Detail (includes gallery + menu tabs)
- `/book` — Booking form + live availability calendar

## API endpoints
- `GET /api/trailers`
- `GET /api/trailers/{id}`
- `GET /api/availability/{id}`
- `POST /api/bookings`

## Data model
`bookings`: `{ _id, name, email, phone, trailer_id, event_date, event_type, guests, electricity_available, message, status, created_at }`
_(`event_location` intentionally removed at user request.)_

## Implemented (July 2026)
- ✅ Home restructured: Menu + Gallery removed → moved to Van Detail
- ✅ "Location" removed sitewide (booking + backend)
- ✅ Coming Soon card uses The Hungarian Lakoma logo
- ✅ **[Aug 2026] New "Trailer Feast Catering" logo installed top-left** (larger, drop-shadow glow, on-load motion)
- ✅ **[Aug 2026] Award-worthy elevation:**
  - Lenis global smooth momentum scroll (`SmoothScroll.jsx`)
  - Kinetic hero: parallax bg (framer `useScroll` + `useTransform`), masked line-by-line reveal (`MaskedLines.jsx`), "01 — Street Food Season" chapter tag, vertical side rail, animated scroll cue
  - Editorial marquee (`EditorialMarquee.jsx`) — slow gold serif italic phrases with dot separators
  - Numbered manifesto: Chapters 01/02/03 with giant Newsreader italic numerals
  - Framer-motion micro-interactions on van cards, WHY BOOK icons, reviews, CTA
  - Editorial italic accents ("The Fleet", "Why book with us?", "Done right.")
  - Film-grain overlay on dark sections (`.grain`)

## Backlog / P1
- Activate "Hungarian Lakoma" trailer as a full detail page (needs menu, prices, specs, interior/exterior photos)
- Real social media links (currently defaults in `content.js`)
- Email notification on booking submit (Resend integration)
- Trailer-level dynamic gallery (upload endpoint)

## P2
- Photo gallery lightbox
- Multi-trailer combined booking flow
- Testimonial submission form
