import { IMAGES } from "./content";

// Trailer catalogue — mirrors backend /api/trailers.
// Adds image galleries per trailer for the frontend.
export const TRAILERS = [
  {
    id: "hungry-trailer",
    name: "The Hungry Trailer",
    tagline: "The original — spuds, smash burgers, fries & desserts.",
    accent: "#e63ebd",
    hero: IMAGES.trailerCloseup,
    gallery: [
      IMAGES.trailerCloseup,
      IMAGES.trailerBackName,
      IMAGES.trailerFullWrap,
      IMAGES.trailerBackContact,
      IMAGES.trailerSide,
      IMAGES.trailerRearSun,
      IMAGES.trailerRear,
      IMAGES.pulledPorkSpud,
      IMAGES.smashBurgerGrill,
      IMAGES.chilliSpud,
      IMAGES.loadedFriesPickles,
      IMAGES.nutellaCrepe,
      IMAGES.chalkboard,
      IMAGES.jacketPotato,
    ],
    menu: [
      "Jacket Potatoes (10+ toppings)",
      "Smash Burgers",
      "Loaded Fries",
      "Fresh Crepes & Desserts",
    ],
    description:
      "Our flagship trailer and the one that started it all — a full mobile kitchen slinging our signature loaded jacket potatoes, smash burgers, loaded fries and fresh dessert crepes. Cooked to order on-site, graffitied inside and out, guaranteed to draw a queue.",
    bestFor: ["Festivals", "Weddings", "Private events", "Corporate events", "Pub nights"],
    setupSize: "3m x 6m footprint (plus awning/queue area)",
    electricity: "1 x 32A hook-up OR self-contained via silent generator",
    selfContained: true,
    servingCapacity: "Up to 300 covers per event",
    certificates: [
      "£5m Public Liability Insurance",
      "Level 2 Food Hygiene Certified",
      "5-star Environmental Health Rating",
      "PAT Tested / Gas Safe",
      "HACCP Compliant",
    ],
  },
  {
    id: "hungry-trailer-2",
    name: "The Hungry Trailer 2.0",
    tagline: "Smaller, faster, all the smash.",
    accent: "#3db8f2",
    hero: IMAGES.smashBurgerGrill,
    gallery: [
      IMAGES.smashBurgerGrill,
      IMAGES.smashBurger,
      IMAGES.loadedFriesPickles,
      IMAGES.trailerAngled,
      IMAGES.eventCollage,
      IMAGES.breakfastMenu,
    ],
    menu: [
      "Smash Burgers (Single / Double)",
      "Loaded Fries",
      "Brownie Bites",
      "Tiramisu Cups",
    ],
    description:
      "Our smaller sister van built for events where speed and footprint matter. Same graffiti energy, dialled-in to smash burgers and loaded fries at volume, with a tight dessert list to send guests home happy.",
    bestFor: ["Weddings", "Corporate lunches", "Small festivals", "Private parties", "Pop-ups"],
    setupSize: "2.5m x 4m footprint",
    electricity: "1 x 16A hook-up OR self-contained",
    selfContained: true,
    servingCapacity: "Up to 150 covers per event",
    certificates: [
      "£5m Public Liability Insurance",
      "Level 2 Food Hygiene Certified",
      "5-star Environmental Health Rating",
      "PAT Tested / Gas Safe",
      "HACCP Compliant",
    ],
  },
  {
    id: "hungarian-trailer",
    name: "Hungarian Cuisine Trailer",
    tagline: "Paprika, soul, Eastern-European street food.",
    accent: "#f26b2e",
    hero: IMAGES.trailerAngled,
    gallery: [
      IMAGES.trailerAngled,
      IMAGES.chilliSpud,
      IMAGES.tunaSpud,
      IMAGES.pulledPorkSpud,
      IMAGES.eventCollage,
    ],
    menu: [
      "Gulyás (Hungarian Goulash)",
      "Chicken Paprikás with Nokedli Dumplings",
      "Grilled Meats (Kolbász, pork skewers)",
      "Lángos (fried dough)",
      "Töltött Káposzta (stuffed cabbage)",
    ],
    description:
      "An authentic Hungarian / Eastern-European kitchen on wheels — slow-cooked goulash, dumplings, grilled meats and lángos. Built for events that want something different from the usual burger-and-fries line-up.",
    bestFor: ["Cultural festivals", "Weddings", "Corporate events", "Street food markets", "Private events"],
    setupSize: "3m x 5m footprint",
    electricity: "1 x 16A hook-up OR self-contained",
    selfContained: true,
    servingCapacity: "Up to 250 covers per event",
    certificates: [
      "£5m Public Liability Insurance",
      "Level 2 Food Hygiene Certified",
      "5-star Environmental Health Rating",
      "PAT Tested / Gas Safe",
      "HACCP Compliant",
    ],
  },
];

export const TRAILERS_BY_ID = Object.fromEntries(TRAILERS.map((t) => [t.id, t]));

export const FAQS = [
  {
    q: "How far do you travel?",
    a: "We're based in Daventry and regularly travel across the Midlands. For events further afield (100+ miles), just get in touch — we usually make it work with a small travel supplement.",
  },
  {
    q: "Do you need electricity?",
    a: "We can run either off a hook-up (16A or 32A depending on trailer) or fully self-contained with our own silent generator. Just tell us what's available on the day.",
  },
  {
    q: "Can you serve large events?",
    a: "Yes. Our flagship Hungry Trailer serves up to 300 covers per event; the Hungarian Cuisine trailer up to 250; the 2.0 up to 150. For bigger events we can bring multiple trailers.",
  },
  {
    q: "Do you have insurance and certificates?",
    a: "Absolutely — £5m Public Liability, Level 2 Food Hygiene, 5-star Environmental Health rating, PAT-tested electrics, gas safety and full HACCP compliance. Documents available on request.",
  },
  {
    q: "Do you take deposits?",
    a: "Yes — we take a small deposit to confirm your date and hold the trailer. The balance is settled after the event. Full terms are shared with your quote.",
  },
  {
    q: "Can menus be changed for the event?",
    a: "Definitely. We often build custom menus around dietary requirements, event themes and budgets. Mention what you're after in your enquiry and we'll come back with options.",
  },
];
