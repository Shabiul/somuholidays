// Long-form blocks shared by the four bus keyword pages. Every figure here is taken from
// lib/fleet.ts or the existing 21-seater page. Route distances are one-way from Bengaluru.

export const SPECS = [
  { title: "21 executive pushback seats", desc: "Ergonomic 2x1 layout with 32-inch legroom, 135° recline and lumbar headrests, so a long highway day stays comfortable." },
  { title: "Dual-compressor rooftop AC", desc: "Air-conditioned cabin with individual passenger airflow vents, built for Karnataka summers and hill-station climbs." },
  { title: "Large luggage boot", desc: "An independent under-floor compartment of about 185 cubic feet, with overhead racks for bags, so the aisle stays clear." },
  { title: "Verified highway chauffeur", desc: "Experienced, background-verified drivers who know Karnataka, Kerala and Tamil Nadu highways and ghat roads." },
  { title: "Charging and audio", desc: "Mobile charging points and a Bluetooth audio system for the group's playlist." },
  { title: "Cleaned and inspected", desc: "Every bus is cleaned and put through a safety inspection before each journey." },
  { title: "Dispatch support", desc: "Trip coordination from our Rajajinagar base, with the driver reachable throughout your trip." },
  { title: "25-seater option", desc: "For bigger groups, a 25-seater AC bus with individual vents and ample storage at ₹38 per km." },
];

export const ROUTES = [
  { dest: "Mysuru", km: 145, hrs: "about 3 hrs", est: "₹11,100 (300 km daily minimum)", note: "Mysore Palace, Brindavan Gardens and Chamundi Hills make an easy full-day group tour." },
  { dest: "Coorg (Madikeri)", km: 260, hrs: "about 5.5 hrs", est: "about ₹19,240 on a 520 km return", note: "Coffee estates, Abbey Falls and Raja's Seat — a popular team retreat and family holiday." },
  { dest: "Ooty and the Nilgiris", km: 275, hrs: "about 6.5 hrs", est: "about ₹20,350 on a 550 km return", note: "Scenic hill drive through the Kalhatty hairpin bends with an experienced ghat driver." },
  { dest: "Chikmagalur", km: 245, hrs: "about 5 hrs", est: "about ₹18,130 on a 490 km return", note: "Coffee plantations, Mullayanagiri peak and waterfall stops." },
  { dest: "Tirupati", km: 250, hrs: "about 5 hrs", est: "about ₹18,500 on a 500 km return", note: "Pilgrimage groups travelling together straight to the Alipiri and Tirumala gates." },
  { dest: "Hampi", km: 350, hrs: "about 6.5 hrs", est: "about ₹25,900 on a 700 km return", note: "UNESCO heritage trips for colleges, cultural groups and families." },
  { dest: "Wayanad", km: 280, hrs: "about 6 hrs", est: "about ₹20,720 on a 560 km return", note: "Rainforest stays, tea gardens and Chembra Peak. Other-state permit billed at actuals." },
  { dest: "Gokarna and Murudeshwar", km: 490, hrs: "about 9 hrs", est: "about ₹36,260 on a 980 km return", note: "Coastal Karnataka temple-and-beach circuit for corporate and college groups." },
];

export const ZONES = [
  { zone: "Central and West Bangalore", areas: "Rajajinagar (our base), Malleshwaram, Majestic and KSR Railway Station, Basavanagudi, Vijayanagar, Yeshwanthpur" },
  { zone: "East Bangalore and the tech corridor", areas: "Whitefield, ITPL, Marathahalli, Bellandur, Outer Ring Road, Mahadevapura" },
  { zone: "South Bangalore", areas: "Koramangala, Electronic City Phase 1 and 2, Jayanagar, BTM Layout, JP Nagar, Bannerghatta Road, HSR Layout" },
  { zone: "North Bangalore and the airport", areas: "Kempegowda International Airport (T1 and T2), Hebbal, Yelahanka, Manyata Tech Park, Sahakara Nagar" },
];

export const USE_CASES = [
  { title: "Weddings and receptions", desc: "Move guests between the hotel, the choultry and the venue in one air-conditioned vehicle, on time, without parking chaos." },
  { title: "Corporate offsites and employee shuttles", desc: "Team outings to Coorg, Kabini or Sakleshpur, tech-park shuttles and airport group transfers on a single invoice." },
  { title: "School and college trips", desc: "Industrial visits, heritage tours and excursions with a verified driver and a vehicle that keeps students together." },
  { title: "Temple and pilgrimage tours", desc: "Tirupati, Dharmasthala, Udupi and Murudeshwar circuits for senior-heavy groups who want one comfortable vehicle." },
  { title: "Family reunions and holidays", desc: "Three generations travelling together with luggage for everyone and no need for a convoy of cars." },
  { title: "Airport group transfers", desc: "Pickups and drops at Kempegowda International Airport for delegations and tour groups, timed to your flight." },
];

export const STEPS = [
  { title: "Send your trip details", desc: "WhatsApp or call with the date, pickup point, destination, group size and whether you need the bus for one day or several." },
  { title: "Receive an itemised quote", desc: "We confirm the bus, the estimated kilometres, the driver allowance and the likely tolls before you commit." },
  { title: "Confirm and get your driver", desc: "Once you confirm, we allocate the vehicle and the chauffeur and share the details ahead of the trip." },
  { title: "Doorstep pickup and the trip", desc: "The bus arrives at your pickup point on time. Our dispatch desk stays reachable for the whole journey." },
];

// Bump this whenever the rates or copy on the bus pages change. It is shown on the page
// and sent as dateModified so search engines and AI answers see an honest freshness signal.
export const BUS_PAGES_LAST_UPDATED = "2026-10-24";

export const KEY_FACTS = [
  { label: "Operator", value: "Somu Holidays Tours and Travels, Rajajinagar, Bengaluru 560010" },
  { label: "21-seater rate", value: "₹37 per km" },
  { label: "25-seater rate", value: "₹38 per km" },
  { label: "Daily minimum", value: "300 km per day" },
  { label: "Driver allowance", value: "₹800 per day" },
  { label: "Tolls, parking, permits", value: "Charged at actuals" },
  { label: "Driver", value: "Chauffeur-driven; no self-drive" },
  { label: "Phone and WhatsApp", value: "+91 93809 58852" },
  { label: "Hours", value: "Open until 11 pm" },
  { label: "Google rating", value: "4.7 stars from 12 Google reviews" },
];

export const COMPARISON = [
  { option: "21-seater bus (₹37/km)", fit: "Groups of 12–21 with luggage", note: "One vehicle, one driver, one set of tolls; the group stays together." },
  { option: "25-seater bus (₹38/km)", fit: "Groups of 18–25", note: "Slightly higher rate for four more seats and extra storage." },
  { option: "3 × Innova Crysta (₹20/km each)", fit: "Groups of up to 18 in cars", note: "About ₹60/km combined, plus three driver allowances and three sets of tolls." },
  { option: "Tempo traveller", fit: "Small groups with light luggage", note: "Seats fewer people and has limited boot space when full." },
];
