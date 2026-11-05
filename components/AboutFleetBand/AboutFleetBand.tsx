import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { FLEET } from "@/lib/fleet";
import { unsplash } from "@/lib/site";
import styles from "./AboutFleetBand.module.css";

const FEATURED_SLUGS = ["innova-crysta", "bus-21"];

export default function AboutFleetBand() {
  const vehicles = FEATURED_SLUGS.map((slug) => FLEET.find((v) => v.slug === slug)!).filter(Boolean);

  return (
    <section
      className={`section bgForest onDark ${styles.band}`}
      style={{ backgroundImage: "url('/theme based.jpeg')" }}
    >
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.copy}>
          <span className="eyebrow">Our Fleet</span>
          <h2 className="display h2">The fleet behind every trip</h2>
          <p className="lead">
            Chauffeur-driven and AC-fitted, serviced on a schedule — not just before a photo gets taken.
          </p>
          <Link href="/fleet" className="btn btnPrimary">
            View Full Fleet <Icon name="arrow" size={16} />
          </Link>
        </Reveal>

        <div className={styles.grid}>
          {vehicles.map((v, i) => {
            const targetHref = v.slug === "bus-21" ? "/21-seater-bus-rental-bangalore" : "/fleet";
            const titleText = `${v.name} (${v.seats} Seater) - Somu Holidays Bangalore`;
            const altText = `${v.name} rental in Bangalore - ${v.seats} seater ${v.tag} with chauffeur`;
            return (
              <Reveal key={v.slug} delay={i * 0.08} className={styles.item}>
                <Link
                  href={targetHref}
                  className={styles.photo}
                  title={titleText}
                  aria-label={`View details for ${v.name}`}
                  style={{ display: "block", position: "relative" }}
                >
                  <Image
                    src={v.img.startsWith("/") ? v.img : unsplash(v.img, 700)}
                    alt={altText}
                    title={titleText}
                    fill
                    sizes="(min-width: 768px) 220px, 44vw"
                  />
                </Link>
                <span>{v.name}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
