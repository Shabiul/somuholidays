import type { FaqItem } from "@/components/FaqSection/FaqSection";
import { BUS_EXTRA, BUS_QUICK_ANSWERS } from "@/lib/bus-seo-extra";

// Keyword landing pages for group bus hire. Each page targets one exact search phrase,
// and the copy is written for that phrase's intent so the four pages don't duplicate
// each other. All rates/specs come from lib/fleet.ts and the 21-seater page.

export type BlockId = "specs" | "routes" | "zones" | "uses" | "compare" | "steps" | "calculator";

export interface BusSeoPage {
  slug: string; // matches the app/ folder name
  keyword: string; // the exact phrase this page targets
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  blocks: BlockId[]; // which shared sections this page shows, so the four pages don't duplicate each other
  quickAnswer: string; // 40–60 word direct answer shown first, written to be quoted by search and AI answers
  sections: { title: string; text: string }[];
  highlights: string[];
  faqs: FaqItem[];
  related: { label: string; href: string }[];
}

const COMMON_FACTS = {
  rate: "₹37 per kilometre for the 21-seater and ₹38 per kilometre for the 25-seater",
  terms:
    "billed on a 300 km daily minimum with an ₹800 daily driver allowance; tolls, parking and other-state permits are charged at actuals and shown before you confirm",
};

export const BUS_SEO_PAGES: Omit<BusSeoPage, "quickAnswer">[] = [
  {
    slug: "21-seater-bus-for-hire",
    keyword: "21 seater bus for hire",
    metaTitle: "21 Seater Bus for Hire in Bangalore | AC Bus from ₹37/km",
    metaDescription:
      "21 seater bus for hire in Bangalore from Somu Holidays: AC pushback seats, luggage boot, verified chauffeur. ₹37/km, doorstep pickup. Call +91 93809 58852.",
    h1: "21 Seater Bus for Hire in Bangalore",
    intro:
      "Need a 21 seater bus for hire in Bangalore? Somu Holidays supplies air-conditioned 21-seater buses with a verified chauffeur for weddings, corporate trips, pilgrimages and family tours — picked up from your doorstep in Bengaluru and billed per kilometre.",
    blocks: ["specs", "uses"],
    sections: [
      {
        title: "Who hires a 21 seater bus",
        text: "A 21-seater is the right size when a group is too big for cars but too small to justify a full-size coach: wedding guest transfers, office offsites, college and school trips, temple tours and extended-family holidays. One vehicle keeps everyone together, with no convoy to coordinate.",
      },
      {
        title: "What you get on hire",
        text: "Executive 2x1 pushback seating, rooftop AC with individual vents, an underfloor luggage boot, mobile charging and a Bluetooth audio system, driven by an experienced chauffeur who knows the Karnataka highways and ghat roads.",
      },
      {
        title: "How hire is priced",
        text: `Pricing is ${COMMON_FACTS.rate}, ${COMMON_FACTS.terms}.`,
      },
      {
        title: "How to book",
        text: "Send your date, pickup point, destination and group size by WhatsApp or call. We confirm the bus, the estimated total and the driver before you pay anything extra.",
      },
    ],
    highlights: [
      "21 executive pushback seats, AC",
      "Large luggage boot for the whole group",
      "Verified, experienced highway chauffeur",
      "Doorstep pickup anywhere in Bengaluru",
      "Local packages and outstation trips",
    ],
    faqs: [
      {
        q: "How much does it cost to hire a 21 seater bus in Bangalore?",
        a: `Our 21-seater bus is ₹37 per km, ${COMMON_FACTS.terms}.`,
      },
      {
        q: "Does the 21 seater bus for hire come with a driver?",
        a: "Yes. Every Somu Holidays bus is chauffeur-driven. We do not offer self-drive hire.",
      },
      {
        q: "Can I hire the bus for a single day within Bangalore?",
        a: "Yes. City hire for weddings, corporate shuttles and airport group transfers is available — tell us your hours and kilometres and we'll quote the package.",
      },
      {
        q: "Is a larger bus available if my group grows?",
        a: "Yes. We also run a 25-seater AC bus at ₹38 per km. See the 25-seater details on our fleet page.",
      },
    ],
    related: [
      { label: "21 Seater Bus Rental Bangalore", href: "/21-seater-bus-rental-bangalore" },
      { label: "21 Seater Mini Bus Rental", href: "/21-seater-mini-bus-rental" },
      { label: "Bus Rental Near Me", href: "/bus-rental-near-me" },
    ],
  },
  {
    slug: "21-seater-mini-bus-rental",
    keyword: "21 seater mini bus rental",
    metaTitle: "21 Seater Mini Bus Rental in Bangalore | Rates & Booking",
    metaDescription:
      "21 seater mini bus rental in Bangalore — ₹37/km, 300 km daily minimum, ₹800 driver allowance, tolls at actuals. AC mini bus with chauffeur from Somu Holidays.",
    h1: "21 Seater Mini Bus Rental in Bangalore",
    intro:
      "Looking for a 21 seater mini bus rental in Bangalore with clear pricing? This page lays out exactly how our mini bus rental is charged, what a typical trip costs, and how it compares with the alternatives.",
    blocks: ["calculator", "routes", "compare"],
    sections: [
      {
        title: "Mini bus rental rates",
        text: `Our 21-seater mini bus is ₹37 per km. Hire is ${COMMON_FACTS.terms}.`,
      },
      {
        title: "Worked example",
        text: "A Bangalore to Mysuru return day trip is roughly 300 km, so the minimum applies: 300 km × ₹37 = ₹11,100, plus the ₹800 driver allowance, plus tolls and parking at actuals. Split across 21 people, that is a small per-head cost for a private, air-conditioned vehicle.",
      },
      {
        title: "Mini bus vs 3 Innova Crystas",
        text: "Three Innova Crystas at ₹20 per km come to ₹60 per km before three driver allowances and three sets of tolls. A single 21-seater at ₹37 per km is cheaper for a full group and keeps everyone in one vehicle.",
      },
      {
        title: "Mini bus vs tempo traveller",
        text: "A tempo traveller seats fewer people and has limited luggage room when full. The 21-seater is a full-width bus with a separate luggage boot, so a group of 18–21 with bags travels comfortably.",
      },
    ],
    highlights: [
      "₹37/km with a 300 km daily minimum",
      "₹800 daily driver allowance",
      "Tolls, parking and permits at actuals",
      "AC, pushback seats, luggage boot",
      "Quote shown before you confirm",
    ],
    faqs: [
      {
        q: "What is the 21 seater mini bus rental rate per km in Bangalore?",
        a: "₹37 per km, with a 300 km daily minimum and an ₹800 daily driver allowance. Tolls, parking and permits are extra at actuals.",
      },
      {
        q: "What is included in the mini bus rental price?",
        a: "The bus, the chauffeur and air conditioning are included in the per-km rate. Driver allowance is added per day, and tolls, parking and other-state permits are billed at actuals.",
      },
      {
        q: "Is the mini bus rental available for outstation trips?",
        a: "Yes — Mysuru, Coorg, Ooty, Chikmagalur, Hampi, Gokarna and more. See the destinations page for the places we cover.",
      },
      {
        q: "Do you have a bigger mini bus than 21 seats?",
        a: "Yes, a 25-seater AC bus at ₹38 per km.",
      },
    ],
    related: [
      { label: "21 Seater Bus for Hire", href: "/21-seater-bus-for-hire" },
      { label: "21 Seater Bus Rental Bangalore", href: "/21-seater-bus-rental-bangalore" },
      { label: "Mini Bus Rental Near Me", href: "/mini-bus-rental-near-me" },
    ],
  },
  {
    slug: "mini-bus-rental-near-me",
    keyword: "mini bus rental near me",
    metaTitle: "Mini Bus Rental Near Me | Bangalore Mini Bus Hire",
    metaDescription:
      "Mini bus rental near you in Bangalore — Somu Holidays, Rajajinagar. 21 and 25-seater AC mini buses, doorstep pickup across Bengaluru. Call now.",
    h1: "Mini Bus Rental Near Me — Bangalore",
    intro:
      "Searching for a mini bus rental near you in Bengaluru? Somu Holidays is based in Rajajinagar and sends 21 and 25-seater AC mini buses with a chauffeur to your door anywhere in the city.",
    blocks: ["zones", "steps"],
    sections: [
      {
        title: "Where we are",
        text: "Our office is at #1406, 5th Main Rd, D-Block, 2nd Stage, Rajajinagar, Bengaluru 560010, open until 11 pm. You don't need to come to us — the bus comes to you.",
      },
      {
        title: "Pickup across Bangalore",
        text: "We pick up from central and west Bangalore (Rajajinagar, Malleshwaram, Majestic, Vijayanagar, Yeshwanthpur), the east tech corridor (Whitefield, Marathahalli, Bellandur), the south (Koramangala, Electronic City, Jayanagar, JP Nagar, HSR Layout) and the north including Kempegowda International Airport, Hebbal and Yelahanka.",
      },
      {
        title: "Mini bus sizes",
        text: "A 21-seater mini bus at ₹37 per km and a 25-seater at ₹38 per km, both air-conditioned with pushback seats and chauffeur-driven. Tell us your headcount and luggage and we'll recommend the right one.",
      },
      {
        title: "Get a quote in minutes",
        text: "Message us on WhatsApp with your pickup area, date and destination, and we'll reply with the vehicle, an estimated total and the driver allocation.",
      },
    ],
    highlights: [
      "Based in Rajajinagar, Bengaluru",
      "Doorstep pickup across the city",
      "21 and 25-seater AC mini buses",
      "Open until 11 pm, call or WhatsApp",
      "Quote on WhatsApp",
    ],
    faqs: [
      {
        q: "Where can I find a mini bus rental near me in Bangalore?",
        a: "Somu Holidays is at #1406, 5th Main Rd, D-Block, 2nd Stage, Rajajinagar, Bengaluru 560010. We send the mini bus to your pickup point anywhere in Bengaluru.",
      },
      {
        q: "Can the mini bus pick me up from the airport?",
        a: "Yes. Pickups and drops at Kempegowda International Airport are available — share your flight time and we'll confirm the timing.",
      },
      {
        q: "How quickly can I book a mini bus?",
        a: "Message us with the date, pickup and group size. Availability depends on the date, so book early for weekends, festivals and wedding season.",
      },
      {
        q: "What does a mini bus rental near me cost?",
        a: "₹37 per km for the 21-seater and ₹38 per km for the 25-seater, with a 300 km daily minimum and ₹800 driver allowance. Tolls and parking are extra at actuals.",
      },
    ],
    related: [
      { label: "Bus Rental Near Me", href: "/bus-rental-near-me" },
      { label: "21 Seater Mini Bus Rental", href: "/21-seater-mini-bus-rental" },
      { label: "Bangalore Taxi Service", href: "/taxi-service-bangalore" },
    ],
  },
  {
    slug: "bus-rental-near-me",
    keyword: "bus rental near me",
    metaTitle: "Bus Rental Near Me | Bangalore Bus Hire with Driver",
    metaDescription:
      "Bus rental near you in Bangalore: 21 and 25-seater AC buses with chauffeur for weddings, corporate trips and tours. Somu Holidays, Rajajinagar.",
    h1: "Bus Rental Near Me — Bangalore",
    intro:
      "Need a bus rental near you in Bangalore? Somu Holidays hires out chauffeur-driven AC buses for weddings, office trips, school and college tours and pilgrimages, with doorstep pickup across Bengaluru.",
    blocks: ["calculator", "uses", "zones"],
    sections: [
      {
        title: "Buses for every group",
        text: "A 21-seater luxury bus for mid-sized groups and a 25-seater bus for larger ones. For smaller parties we also run Innova and Innova Crysta cars and sedans, so one company covers every group size.",
      },
      {
        title: "What people hire a bus for",
        text: "Wedding guest transfers, corporate offsites and tech-park shuttles, school and college excursions, temple and pilgrimage tours, family reunions and airport group transfers.",
      },
      {
        title: "Local and outstation hire",
        text: "Hire the bus for a few hours within Bangalore, or for a multi-day tour to Mysuru, Coorg, Ooty, Chikmagalur, Hampi or Gokarna.",
      },
      {
        title: "Clear pricing",
        text: `Pricing is ${COMMON_FACTS.rate}, ${COMMON_FACTS.terms}.`,
      },
    ],
    highlights: [
      "21 and 25-seater AC buses",
      "Chauffeur-driven, no self-drive",
      "Weddings, corporate, school and tours",
      "Local and outstation hire",
      "Rajajinagar base, open until 11 pm",
    ],
    faqs: [
      {
        q: "How do I find a bus rental near me in Bangalore?",
        a: "Call or WhatsApp Somu Holidays on +91 93809 58852 with your date, pickup area and group size. We are based in Rajajinagar and cover all of Bengaluru.",
      },
      {
        q: "What size buses can I rent?",
        a: "21-seater and 25-seater AC buses, plus Innova, Innova Crysta and sedans for smaller groups.",
      },
      {
        q: "Is a driver included with the bus rental?",
        a: "Yes. All our vehicles are chauffeur-driven. The driver allowance is ₹800 per day.",
      },
      {
        q: "Can I rent a bus for a wedding or corporate event?",
        a: "Yes. We run city packages for wedding guest transfers and corporate shuttles as well as outstation trips.",
      },
    ],
    related: [
      { label: "Mini Bus Rental Near Me", href: "/mini-bus-rental-near-me" },
      { label: "21 Seater Bus for Hire", href: "/21-seater-bus-for-hire" },
      { label: "Our Fleet", href: "/fleet" },
    ],
  },
];

export function getBusPageBySlug(slug: string): BusSeoPage {
  const page = BUS_SEO_PAGES.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown bus SEO page: ${slug}`);
  const extra = BUS_EXTRA[slug];
  return {
    ...page,
    quickAnswer: BUS_QUICK_ANSWERS[slug],
    sections: [...page.sections, ...(extra?.sections ?? [])],
    faqs: [...page.faqs, ...(extra?.faqs ?? [])],
  };
}
