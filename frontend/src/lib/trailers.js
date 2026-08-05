import { IMAGES } from "./content";

const STANDARD_INFO = [
  "Fully insured",
  "Food hygiene rated 5★",
  "All equipment PAT tested",
  "Gas safe registered",
];

const ALLERGEN_NOTE =
  "We handle all major allergens in our kitchen. Please inform our team of any allergies or dietary requirements before ordering.";

export const TRAILERS = [
  {
    id: "hungry-trailer",
    name: "Hungry Trailer",
    type: "trailer",
    tagline: "Our flagship trailer serving jacket potatoes, loaded fries, smash burgers and delicious desserts.",
    accent: "#c9a04e",
    hero: IMAGES.trailerCloseup,
    cardImg: IMAGES.trailerCloseup,
    gallery: [
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/xozcipst_9d38886c-cbb3-4000-960b-a16db5a94041.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/24rl8o1k_5da440cc-cd7d-4973-a5a3-3b7ddbb504ef.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/q13csqau_04e7f1e1-d8ea-4c32-89db-1a31449f734e.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/4slp192z_2abcbd66-2067-4dc8-a7de-6725a1cbf458.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/44i8ohf3_0f172348-9d19-4e21-a5f6-8124208b45f8.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/msdn2eu3_4369fe31-a685-4017-9be3-7da01f2d33f2.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/p26fovoi_800df17b-15b2-43b5-8000-9378c9b01a57%202.JPG",
      "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/61bsx7ek_6f7672a4-b8bd-4581-8d3c-9778ba4c3224%202.JPG",
    ],
    description:
      "Our flagship trailer serving a wide range of freshly made food. From loaded jacket potatoes and fries to smash burgers and sweet treats — there's something for everyone.",
    specs: {
      selfContained: "Self contained",
      indoorOutdoor: "Indoor & outdoor events",
      power: "Power requirement: 32A / 16A",
      size: "Up to 7m x 2.3m",
    },
    servingCapacity: "Up to 300 covers per event",
    info: STANDARD_INFO,
    allergenNote: ALLERGEN_NOTE,
    menu: ["Jacket Potatoes", "Loaded Fries", "Smash Burgers", "Desserts", "Drinks"],
    menuDetail: [
      {
        id: "jacket-potatoes",
        name: "Jacket Potatoes",
        columns: [
          { title: "Sides", items: [
            { name: "Cheese", price: "£2.00" },
            { name: "Beans", price: "£1.50" },
            { name: "Tuna Mayo", price: "£2.00" },
            { name: "Coleslaw", price: "£1.50" },
          ]},
          { title: "Main Toppings", items: [
            { name: "Chicken Curry", price: "£3.50" },
            { name: "Gulyás (Beef Stew)", price: "£3.50" },
            { name: "Chilli Con Carne", price: "£3.00" },
            { name: "Rosemary Lamb Ragu", price: "£3.50" },
            { name: "Bolognese", price: "£3.00" },
            { name: "BBQ Pulled Pork", price: "£2.00" },
          ]},
        ],
        sample: { img: IMAGES.pulledPorkSpud, caption: "Build your perfect jacket potato!" },
      },
      {
        id: "loaded-fries",
        name: "Loaded Fries",
        columns: [
          { title: "Base", items: [
            { name: "Skin-on Fries", price: "£3.50" },
            { name: "Cheese Fries", price: "£4.50" },
          ]},
          { title: "Loaded", items: [
            { name: "Dirty Bird (buttermilk chicken)", price: "£8.50" },
            { name: "Smoked Brisket", price: "£9.50" },
            { name: "Goulash Fries", price: "£9.00" },
            { name: "Chilli Cheese", price: "£8.00" },
          ]},
        ],
        sample: { img: IMAGES.loadedFriesPickles, caption: "Fully loaded, every time." },
      },
      {
        id: "smash-burgers",
        name: "Smash Burgers",
        columns: [
          { title: "Burgers", items: [
            { name: "Single Smash", price: "£6.50" },
            { name: "Double Smash", price: "£8.50" },
            { name: "Bacon & Cheese", price: "£9.50" },
          ]},
          { title: "Add-ons", items: [
            { name: "Extra Patty", price: "£2.50" },
            { name: "Crispy Onions", price: "£1.00" },
            { name: "Jalapeños", price: "£0.75" },
          ]},
        ],
        sample: { img: IMAGES.smashBurgerGrill, caption: "Smashed fresh on the grill." },
      },
      {
        id: "desserts",
        name: "Desserts",
        columns: [
          { title: "Sweet Treats", items: [
            { name: "Nutella & Banana Crepe", price: "£6.00" },
            { name: "Biscoff Crepe", price: "£6.50" },
            { name: "Lemon & Sugar Crepe", price: "£4.50" },
          ]},
        ],
        sample: { img: IMAGES.nutellaCrepe, caption: "Fresh off the plancha." },
      },
      {
        id: "drinks",
        name: "Drinks",
        columns: [
          { title: "Cold", items: [
            { name: "Cans (assorted)", price: "£1.50" },
            { name: "Bottled Water", price: "£1.00" },
          ]},
          { title: "Hot", items: [
            { name: "Tea", price: "£1.50" },
            { name: "Coffee", price: "£2.00" },
          ]},
        ],
        sample: { img: IMAGES.chalkboard, caption: "Ask about event drink packages." },
      },
    ],
  },
];

// Coming-soon van (teaser only, no detail page)
export const COMING_SOON = {
  id: "van-2",
  name: "The Hungarian Lakoma",
  type: "van",
  tagline: "Authentic Hungarian cuisine — tradition, flavour & hospitality. Launching soon.",
  cardImg: "https://customer-assets-4nw71qhi.emergentagent.net/job_graffiti-grub/artifacts/2hxsw0a6_JPEG%20image-44C2-99FB-C1-0.jpeg",
};

export const TRAILERS_BY_ID = Object.fromEntries(TRAILERS.map((t) => [t.id, t]));

export const WHY_BOOK = [
  { icon: "settings", title: "Professional", text: "Reliable, experienced and fully insured." },
  { icon: "utensils", title: "Quality Food", text: "Fresh ingredients, big flavours." },
  { icon: "home", title: "Flexible Setups", text: "Indoor or outdoor, we've got you covered." },
  { icon: "check", title: "Fully Equipped", text: "Self contained and event ready." },
];

export const FAQS = [
  { q: "How far do you travel?", a: "We're based in Daventry and travel across the Midlands. For events further afield, get in touch and we'll usually make it work with a small travel supplement." },
  { q: "Do you need electricity?", a: "We can run off a hook-up (16A or 32A) or fully self-contained with our own silent generator — just tell us what's available." },
  { q: "Can you serve large events?", a: "Yes. The Hungry Trailer serves up to 300 covers; the 2.0 up to 150. For bigger events we can bring both vans." },
  { q: "Do you have insurance and certificates?", a: "£5m Public Liability, Level 2 Food Hygiene, 5-star Environmental Health, PAT-tested electrics and gas safety. Documents on request." },
  { q: "Do you take deposits?", a: "Yes — a small deposit confirms your date and holds the van. The balance is settled after the event." },
  { q: "Can menus be changed for the event?", a: "Definitely — we build custom menus around dietary needs, themes and budgets. Mention it in your enquiry." },
];
