import type { FaqItem } from "@/components/FaqSection/FaqSection";

// Extra long-form content per page, appended to the base sections and FAQs in bus-seo-pages.ts.
// Each page is written for its own search intent so the four pages stay distinct.

interface Extra {
  sections: { title: string; text: string }[];
  faqs: FaqItem[];
}

const RATE = "₹37 per km for the 21-seater (₹38 per km for the 25-seater) with a 300 km daily minimum and ₹800 daily driver allowance";

// Direct 40–60 word answers shown at the top of each page, written so a search or AI answer
// can quote them whole: who, what, how much, where, how to book.
export const BUS_QUICK_ANSWERS: Record<string, string> = {
  "21-seater-bus-for-hire":
    "You can hire a 21 seater bus in Bangalore from Somu Holidays at ₹37 per km. It is an AC, chauffeur-driven bus with pushback seats and a luggage boot, billed on a 300 km daily minimum plus ₹800 daily driver allowance, with tolls and parking at actuals. Call or WhatsApp +91 93809 58852.",
  "21-seater-mini-bus-rental":
    "A 21 seater mini bus rental in Bangalore with Somu Holidays costs ₹37 per km, with a 300 km daily minimum and an ₹800 daily driver allowance. Tolls, parking and permits are extra at actuals. A day trip to Mysuru bills the 300 km minimum: ₹11,100 plus allowance and tolls.",
  "mini-bus-rental-near-me":
    "Somu Holidays, at #1406, 5th Main Rd, Rajajinagar, Bengaluru 560010, rents 21 and 25-seater AC mini buses with a driver and picks up anywhere in Bengaluru, including the airport. Rates are ₹37 per km (21-seater) and ₹38 per km (25-seater). Call or WhatsApp +91 93809 58852.",
  "bus-rental-near-me":
    "For bus rental in Bangalore, Somu Holidays (Rajajinagar) offers chauffeur-driven AC buses: a 21-seater at ₹37 per km and a 25-seater at ₹38 per km, with a 300 km daily minimum and ₹800 driver allowance. Weddings, corporate trips and tours; doorstep pickup across Bengaluru. Call +91 93809 58852.",
};

export const BUS_EXTRA: Record<string, Extra> = {
  "21-seater-bus-for-hire": {
    sections: [
      {
        title: "Why a 21 seater bus for hire is the sweet spot for groups",
        text: "When a group grows past what two or three cars can carry, the choice is usually between several cars, a tempo traveller or a bus. A 21 seater bus for hire sits in the middle: large enough that 15 to 21 people travel in one vehicle, small enough to handle Bangalore city streets, resort driveways and narrow ghat roads that a 40-seat coach would struggle with. For a group of this size, a 21 seater bus for hire in Bangalore also works out cheaper per head than splitting people across cars.",
      },
      {
        title: "21 seater bus for hire for weddings",
        text: "Wedding days run on tight timing. A 21 seater bus for hire lets you bring the groom's or bride's side from the hotel to the choultry in one go, then back again after the reception, with the chauffeur waiting. Guests don't need to find parking, relatives who don't drive are looked after, and the whole party arrives together. Tell us the venue and timings and we'll confirm a city package for the day.",
      },
      {
        title: "21 seater bus for hire for corporate trips",
        text: "Companies hire a 21 seater bus for offsites, client visits and employee transport. One vehicle, one invoice and one point of contact is simpler for an office manager than coordinating cabs. Our dispatch desk handles pickup sequencing across tech corridors such as Whitefield, Electronic City and Manyata Tech Park, and the bus can be booked for a single day or for a run of days.",
      },
      {
        title: "21 seater bus for hire for pilgrimages and temple tours",
        text: "Temple trips often involve older travellers, early starts and long drives. A 21 seater bus for hire with pushback seats and AC is far more comfortable than a convoy of cars. We regularly plan group routes to Tirupati, Dharmasthala, Udupi, Murudeshwar and Mysuru's temples, with halts planned for meals and rest.",
      },
      {
        title: "21 seater bus for hire for school and college tours",
        text: "Educational trips need a driver the institution can trust and a vehicle that keeps the group together. Our chauffeurs are experienced and verified, and the bus can carry the students' bags in the luggage boot, leaving the cabin clear. Hampi, Mysuru, Coorg and Chikmagalur are common destinations for college tours.",
      },
      {
        title: "What to ask before you book any 21 seater bus for hire",
        text: "Ask what the per-km rate includes, whether there is a daily minimum, how driver allowance is charged, who pays tolls, parking and other-state permits, and whether the bus is air-conditioned. We state all of this up front: the rate is ₹37 per km, the daily minimum is 300 km, driver allowance is ₹800 per day, and tolls, parking and permits are charged at actuals. A written quote before you confirm avoids surprises.",
      },
      {
        title: "Book early for peak dates",
        text: "Weekends, long weekends, festival weeks and the wedding season are the busiest times for any 21 seater bus for hire in Bangalore. Our buses are limited in number, so confirm as early as you can. If your preferred date is taken, we can suggest an alternative date or the 25-seater.",
      },
      {
        title: "Related terms: bus on rent, minibus, mini coach and group transport",
        text: "People look for a 21 seater bus for hire under many names: a bus on rent, a minibus, a mini coach, a tourist bus, a coach hire, a private bus booking or simply group transport with a driver. They all mean the same thing here: an air-conditioned bus with a chauffeur that carries up to 21 passengers, booked by the day or by the kilometre. For wedding transport, employee transportation, school and college tours, temple tours or a family holiday, the booking works the same way — tell us the date, pickup and destination, and we quote the bus with driver.",
      },
    ],
    faqs: [
      { q: "Can I hire a 21 seater bus for one day only?", a: "Yes. A 21 seater bus for hire can be booked for a single day of city use or an outstation run. The 300 km daily minimum applies to outstation billing; for city events tell us your hours and we'll quote a package." },
      { q: "How many people fit in a 21 seater bus for hire?", a: "21 passengers on the pushback seats, with a separate luggage boot so bags don't take up seat space." },
      { q: "Is the 21 seater bus for hire air-conditioned?", a: "Yes, our 21-seater is an AC bus with rooftop cooling and individual vents." },
      { q: "Do I pay driver allowance separately for a 21 seater bus for hire?", a: "Yes, ₹800 per day, added to the per-km charge. Tolls, parking and permits are charged at actuals." },
      { q: "Can the 21 seater bus for hire go to Kerala, Tamil Nadu or Goa?", a: "Yes. Other-state permits are billed at actuals and included in the estimate we share before you confirm." },
      { q: "How do I get a quote for a 21 seater bus for hire?", a: "Message us on WhatsApp at +91 93809 58852 with your date, pickup, destination and group size." },
    ],
  },
  "21-seater-mini-bus-rental": {
    sections: [
      {
        title: "How 21 seater mini bus rental is calculated",
        text: `21 seater mini bus rental is billed per kilometre. The rate is ${RATE}. The minimum means that even a short outstation day is billed at least 300 km. For a multi-day trip the minimum applies to each day, so a three-day tour starts from 900 km. Tolls, parking and other-state permits are added at actuals, and we show the estimate before you confirm.`,
      },
      {
        title: "21 seater mini bus rental per km — what drives the final price",
        text: "Three things change the final bill for a 21 seater mini bus rental: the real distance travelled including the return, the number of days (because of the daily minimum and the driver allowance) and the route's tolls and permits. A direct run on an expressway has more tolls than a back-road route; an interstate trip adds a permit. Sharing your route and dates lets us give a close estimate.",
      },
      {
        title: "Local 21 seater mini bus rental in Bangalore",
        text: "For events inside the city, the 21 seater mini bus rental is booked as a package of hours and kilometres rather than an outstation minimum. Wedding transfers, office shuttles, airport group pickups and sightseeing days all fit this pattern. Tell us the start time, the stops and the finish and we'll quote the package.",
      },
      {
        title: "Outstation 21 seater mini bus rental",
        text: "Outstation trips from Bengaluru are the most common 21 seater mini bus rental: Mysuru, Coorg, Ooty, Chikmagalur, Hampi, Wayanad, Tirupati and the coast. The bus is driven by a highway chauffeur, the route is agreed before you leave, and our dispatch desk stays in contact during the trip.",
      },
      {
        title: "What is a mini bus, and why 21 seats?",
        text: "A mini bus is a smaller coach built for groups that don't need a full-size bus. The 21-seater is a common choice because it fits family, office and college groups, handles tight roads and costs less to run than a 40-seater. A 21 seater mini bus rental gives each passenger a proper recliner seat rather than the folding jump seats found in some vans.",
      },
      {
        title: "21 seater mini bus rental vs buying transport yourself",
        text: "Organisations sometimes ask whether to buy or lease a vehicle. For an occasional trip, a 21 seater mini bus rental avoids the cost of purchase, insurance, maintenance, parking and a full-time driver. You pay only for the kilometres and days you use.",
      },
      {
        title: "Safety on every 21 seater mini bus rental",
        text: "Every bus is cleaned and inspected before the journey, and the chauffeur is experienced and background-verified. On hill routes we plan halts so the driver is not rushed, and you can reach our dispatch desk by phone if anything changes on the road.",
      },
      {
        title: "Related terms: minibus hire, mini coach, bus on rent and per km rate",
        text: "A 21 seater mini bus rental is also searched as minibus hire, mini coach rental, bus on rent, a 21 seater tourist bus, a 21 seater AC bus with driver, or a bus rate per km. Whichever phrase you use, the pricing is the same: a per km rate with a daily minimum, a driver allowance, and tolls and parking at actuals. If you are comparing this with a tempo traveller, a larger 25 seater bus or a set of cars, the comparison table on this page shows how they differ for a group of your size.",
      },
    ],
    faqs: [
      { q: "What is the minimum km for a 21 seater mini bus rental?", a: "300 km per day for outstation billing. For multi-day trips the minimum applies to each day." },
      { q: "Is fuel included in the 21 seater mini bus rental rate?", a: "Your written quote states exactly what the per-km rate covers. Driver allowance is ₹800 per day, and tolls, parking and permits are charged separately at actuals — ask us to confirm fuel in the quote before you book." },
      { q: "Can I get a 21 seater mini bus rental with a non-AC option?", a: "Our 21-seater is an air-conditioned bus. Tell us if you have specific requirements and we'll let you know what's available." },
      { q: "What is the cancellation process for a 21 seater mini bus rental?", a: "Cancellation terms are shared when you confirm the booking. Ask for them in writing, and see our terms page." },
      { q: "Can I add stops to a 21 seater mini bus rental trip?", a: "Yes. Stops add distance and time, so share them when you request the quote and the estimate will include them." },
      { q: "How far in advance should I book a 21 seater mini bus rental?", a: "As early as you can, especially for weekends, long weekends and wedding season." },
    ],
  },
  "mini-bus-rental-near-me": {
    sections: [
      {
        title: "What 'mini bus rental near me' should really mean",
        text: "When you search for a mini bus rental near me, you want three things: a company that actually operates in your area, a vehicle that arrives on time and a clear price. Somu Holidays has operated from Rajajinagar, Bengaluru, and sends mini buses to your doorstep anywhere in the city, so a mini bus rental near you is a phone call or a WhatsApp message away.",
      },
      {
        title: "Mini bus rental near me — central and west Bangalore",
        text: "Our home base is Rajajinagar, so mini bus rental near me searches from Rajajinagar, Malleshwaram, Majestic, Basavanagudi, Vijayanagar and Yeshwanthpur are the quickest for us to serve. Pickups from these areas need the least positioning time, which is helpful for early-morning departures.",
      },
      {
        title: "Mini bus rental near me — east Bangalore and tech parks",
        text: "Companies in Whitefield, ITPL, Marathahalli, Bellandur and along the Outer Ring Road regularly book a mini bus rental for offsites and employee outings. We plan pickups from tech parks and apartment clusters so the group boards together and leaves on time.",
      },
      {
        title: "Mini bus rental near me — south Bangalore",
        text: "From Koramangala, HSR Layout, BTM, Jayanagar, JP Nagar, Bannerghatta Road and Electronic City, families and offices book our mini bus for weddings, temple trips and weekend getaways. Tell us your exact pickup address and we'll schedule the arrival.",
      },
      {
        title: "Mini bus rental near me — north Bangalore and the airport",
        text: "Hebbal, Yelahanka, Manyata Tech Park, Sahakara Nagar and Kempegowda International Airport are all covered. Airport mini bus rental is available for tour groups and delegations; share your flight time and we'll confirm the pickup.",
      },
      {
        title: "Mini bus rental near me for weddings and events",
        text: "A mini bus rental near me for a wedding means guests move between venues together. We can run shuttle-style trips between the hotel and venue, with the chauffeur and bus on standby for the day under a city package.",
      },
      {
        title: "How to choose between a mini bus and a bigger bus",
        text: "If your group has 12 to 21 people, a 21-seater mini bus is the right size. For 22 to 25, take the 25-seater. If your group is smaller than ten, a pair of Innova Crystas may be cheaper. Tell us the headcount and luggage and we'll recommend the best fit.",
      },
      {
        title: "Related terms: local bus hire, minibus near me and bus booking in Bangalore",
        text: "A mini bus rental near me search usually means local bus hire, a minibus near you, a bus booking in Bangalore or a bus with driver that can reach your address quickly. We are based in Rajajinagar and serve all of Bengaluru, so whether you need a bus for a wedding in Malleshwaram, an office outing from Whitefield or an airport group pickup, a mini bus on rent is a call away. Ask about city packages for local use and per km billing for outstation trips.",
      },
    ],
    faqs: [
      { q: "Is your mini bus rental near me available on Sundays and holidays?", a: "Yes, we take bookings every day. Weekends and holidays are busy, so book early." },
      { q: "Do you have an office I can visit for mini bus rental near me?", a: "Our office is at #1406, 5th Main Rd, D-Block, 2nd Stage, Rajajinagar, Bengaluru 560010. Most bookings are done by phone or WhatsApp, but you're welcome to visit." },
      { q: "Can the mini bus rental near me start from outside Bangalore?", a: "Our service is based in Bengaluru. For pickups outside the city, ask us and we'll confirm what is possible." },
      { q: "How do I contact you for mini bus rental near me?", a: "Call or WhatsApp +91 93809 58852 or +91 81055 23410, or email somuholidaysrajajinagar@gmail.com." },
      { q: "What are your hours for mini bus rental near me enquiries?", a: "We are open until 11 pm. Call or WhatsApp +91 93809 58852." },
      { q: "Do you offer mini bus rental near me for one-way drops?", a: "Yes. Tell us the pickup and drop and we'll quote the one-way trip, including the distance the bus must cover to return." },
    ],
  },
  "bus-rental-near-me": {
    sections: [
      {
        title: "Bus rental near me — a complete guide to hiring a bus in Bangalore",
        text: "If you are searching for bus rental near me in Bengaluru, the process is simple: pick the right size, get an itemised quote and confirm. Somu Holidays supplies air-conditioned 21 and 25-seater buses with a chauffeur, which covers most group sizes. This guide explains how bus rental near you works so you know what to ask any operator.",
      },
      {
        title: "Bus rental near me for weddings",
        text: "Wedding bus rental near me in Bangalore usually means moving guests between the hotel and the venue. One AC bus avoids the confusion of many cars and ensures guests arrive together. We plan pickups against the muhurtham and reception timings.",
      },
      {
        title: "Bus rental near me for corporate and employee travel",
        text: "Corporate bus rental near me covers offsites, client visits, conferences and airport transfers. A single vehicle with a single invoice is easier to approve and track than multiple cabs. We plan pickups across Bengaluru's tech corridors.",
      },
      {
        title: "Bus rental near me for school and college trips",
        text: "Educational institutions need dependable drivers and a vehicle that keeps students together. Our chauffeurs are experienced and verified. Heritage tours to Mysuru and Hampi, and nature trips to Coorg and Chikmagalur, are common.",
      },
      {
        title: "Bus rental near me for tours and holidays",
        text: "Families and friends book bus rental for holidays to hill stations, beaches and temples. One bus makes the trip social and economical. Our drivers know the ghat roads and plan halts for meals and rest.",
      },
      {
        title: "Bus rental near me — what affects the price",
        text: "The price of bus rental near me depends on the bus size, the distance, the number of days, the driver allowance and the tolls and permits. Our rates are ₹37 per km for the 21-seater and ₹38 per km for the 25-seater, with a 300 km daily minimum and ₹800 daily driver allowance.",
      },
      {
        title: "Bus rental near me — documents and safety",
        text: "Ask any operator about vehicle permits, insurance, the driver's licence and verification. We keep our vehicles inspected and our chauffeurs verified, and we're happy to answer questions about the vehicle and driver before you book.",
      },
      {
        title: "Bus rental near me versus app-based cabs",
        text: "App-based cabs are good for individuals and small groups. For ten or more people, bus rental near me is simpler and usually cheaper. You get one driver to coordinate, space for luggage, and a vehicle that stays with you for the whole trip.",
      },
      {
        title: "Related terms: bus hire, bus on rent, charter bus and coach hire in Bangalore",
        text: "Bus rental near me is also called bus hire, bus on rent, charter bus, coach hire, tour bus booking or a bus with driver. In Bangalore that covers a 21 seater luxury bus and a 25 seater AC bus for weddings, corporate transport, school and college trips, pilgrimages and holidays. Whether you call it a luxury coach, a travel bus or a group transport vehicle, you are booking the same service: a chauffeur-driven AC bus billed per kilometre.",
      },
    ],
    faqs: [
      { q: "What is the cheapest bus rental near me in Bangalore?", a: "Price depends on distance, days and bus size. Our 21-seater is ₹37 per km. Compare the total cost, including driver allowance, tolls and minimum km, across operators rather than only the per-km rate." },
      { q: "Can I get bus rental near me at short notice?", a: "Sometimes. Availability depends on the date, so call or WhatsApp us with your requirement." },
      { q: "Do you provide bus rental near me with a guide?", a: "We provide the vehicle and chauffeur. Itinerary planning for tours is available through our holiday packages." },
      { q: "Does bus rental near me include fuel?", a: "Your written quote states exactly what the per-km rate covers — ask us to confirm fuel and every extra before you book." },
      { q: "Can I pay for bus rental near me online?", a: "We confirm payment details when you book. Our listed payment options include cash, UPI, credit card and bank transfer." },
      { q: "Which areas does your bus rental near me cover?", a: "All of Bengaluru, including Rajajinagar, Whitefield, Electronic City, Koramangala, Hebbal, Yelahanka and Kempegowda International Airport." },
    ],
  },
};
