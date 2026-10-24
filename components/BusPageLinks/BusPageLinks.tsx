import Link from "next/link";
import Icon from "@/components/Icon";
import { BUS_SEO_PAGES } from "@/lib/bus-seo-pages";
import styles from "./BusPageLinks.module.css";

const LINKS = [
  { slug: "21-seater-bus-for-hire", anchor: "21 seater bus for hire", blurb: "AC pushback-seat bus with a chauffeur, from ₹37 per km." },
  { slug: "21-seater-mini-bus-rental", anchor: "21 seater mini bus rental", blurb: "How mini bus rental is billed, with worked trip costs." },
  { slug: "mini-bus-rental-near-me", anchor: "mini bus rental near me", blurb: "Doorstep pickup across Bengaluru from our Rajajinagar base." },
  { slug: "bus-rental-near-me", anchor: "bus rental near me", blurb: "21 and 25 seater buses for weddings, offices and tours." },
];

// Internal-link block that points existing pages at the four bus keyword pages.
// Anchor text is the page's target phrase so the link context matches the destination.
export default function BusPageLinks() {
  return (
    <section className="section bgIvory50">
      <div className="container">
        <h2 className="display h2">Bus hire in Bangalore</h2>
        <ul className={styles.list}>
          {LINKS.filter((l) => BUS_SEO_PAGES.some((p) => p.slug === l.slug)).map((l) => (
            <li key={l.slug}>
              <Link href={`/${l.slug}`} title={`${l.anchor} in Bangalore`}>
                {l.anchor} <Icon name="arrow" size={14} />
              </Link>
              <span>{l.blurb}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
