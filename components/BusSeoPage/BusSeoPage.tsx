import Image from "next/image";
import Link from "next/link";
import BusCostCalculator from "@/components/BusCostCalculator/BusCostCalculator";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import FleetSection from "@/components/FleetSection/FleetSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import type { BusSeoPage as BusSeoPageData } from "@/lib/bus-seo-pages";
import { SITE, waLink } from "@/lib/site";
import { BUS_PAGES_LAST_UPDATED, KEY_FACTS, SPECS, ROUTES, ZONES, USE_CASES, STEPS, COMPARISON } from "@/lib/bus-seo-shared";
import styles from "./BusSeoPage.module.css";

const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Break long copy into short paragraphs (about two sentences each) so it scans easily.
const paragraphs = (text: string) => {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) ?? [text];
  const out: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) out.push(sentences.slice(i, i + 2).join("").trim());
  return out;
};

const PHOTOS = [
  {
    src: "/21-seater-luxury-ac-bus-bangalore.jpeg",
    alt: "Somu Holidays 21 seater luxury AC bus with pushback seats parked in Bengaluru",
    caption: "21 seater luxury AC bus",
    href: "/21-seater-bus-rental-bangalore",
    link: "See the 21 seater bus details",
  },
  {
    src: "/25-seater-ac-bus-bangalore.jpeg",
    alt: "Somu Holidays 25 seater AC bus with individual air vents for group hire in Bangalore",
    caption: "25 seater AC bus",
    href: "/fleet",
    link: "Compare buses in our fleet",
  },
  {
    src: "/bus-hill-station-trip-bangalore.jpg",
    alt: "Somu Holidays bus driving on a hill road on an outstation trip from Bangalore",
    caption: "Outstation and hill-station trips",
    href: "/destinations",
    link: "Browse tour destinations",
  },
];

const TOC_LABELS: Record<string, string> = {
  specs: "Bus features",
  routes: "Outstation routes and costs",
  zones: "Pickup areas",
  uses: "Who books",
  compare: "Compared with other options",
  steps: "How to book",
  calculator: "Cost calculator",
};

export default function BusSeoPage({ page }: { page: BusSeoPageData }) {
  const kw = page.keyword[0].toUpperCase() + page.keyword.slice(1);
  const url = `${SITE.url}/${page.slug}`;
  const perKm = (name: string, price: number) => ({
    "@type": "Offer",
    name,
    priceCurrency: "INR",
    priceSpecification: { "@type": "UnitPriceSpecification", price, priceCurrency: "INR", unitText: "per kilometre" },
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        dateModified: BUS_PAGES_LAST_UPDATED,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#business` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: page.h1, item: url },
        ],
      },
      {
        "@type": "Service",
        name: page.h1,
        serviceType: "Bus rental with driver",
        provider: { "@id": `${SITE.url}/#business` },
        areaServed: { "@type": "City", name: "Bengaluru" },
        url,
        offers: [perKm("21 seater AC bus with driver", 37), perKm("25 seater AC bus with driver", 38)],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
        <section className="pageBanner">
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <span>{page.h1}</span>
            </div>
            <h1 className="display">{page.h1}</h1>
            <p>{page.intro}</p>
            <div className={styles.actions}>
              <a href={waLink(`Hi Somu Holidays, I'm looking for: ${page.keyword}.`)} className="btn btnPrimary" target="_blank" rel="noopener noreferrer">
                Get a Quote on WhatsApp
              </a>
              <a href={`tel:${SITE.phonePrimaryTel}`} className="btn">
                Call {SITE.phonePrimary}
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.answerBox}>
              <h2>{kw}: the short answer</h2>
              <p>{page.quickAnswer}</p>
              <dl className={styles.facts}>
                {KEY_FACTS.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.updated}>
                Last updated: <time dateTime={BUS_PAGES_LAST_UPDATED}>{BUS_PAGES_LAST_UPDATED}</time>
              </p>
            </div>
            <nav className={styles.toc} aria-label="On this page">
              <strong>On this page</strong>
              <ul>
                <li><a href="#photos">Photos of the buses</a></li>
                <li><a href="#details">Details</a></li>
                {page.blocks.map((b) => (
                  <li key={b}>
                    <a href={`#${b}`}>{TOC_LABELS[b]}</a>
                  </li>
                ))}
                <li><a href="#bus-faq">Common questions</a></li>
                <li><a href="#book">Book now</a></li>
              </ul>
            </nav>

            <div id="photos" className={styles.photos}>
              <h2 className="srOnly">{kw}: photos of our buses</h2>
              {PHOTOS.map((ph) => (
                <figure key={ph.src} className={styles.photo}>
                  <Link href={ph.href} className={styles.photoLink} title={ph.link}>
                    <span className={styles.photoFrame}>
                      <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 768px) 33vw, 100vw" />
                    </span>
                  </Link>
                  <figcaption>
                    <h3>{ph.caption}</h3>
                    <Link href={ph.href}>{ph.link}</Link>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div id="details" />
            <div className={styles.grid}>
              {page.sections.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05} className={styles.card}>
                  <h2 id={slugify(s.title)}>{s.title}</h2>
                  {paragraphs(s.text).map((para, n) => (
                    <p key={n}>{para}</p>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section bgIvory50">
          <div className="container">
            <div className={styles.whyWrap}>
              <Reveal>
                <span className="eyebrow">Why Somu Holidays</span>
                <h2 className="display h2">{kw} — what you get</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className={styles.list}>
                  {page.highlights.map((h) => (
                    <li key={h}>
                      <Icon name="check" size={16} />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {page.blocks.includes("calculator") && (
          <section id="calculator" className="section">
            <div className="container">
              <BusCostCalculator />
            </div>
          </section>
        )}

        {page.blocks.includes("specs") && (
        <section id="specs" className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Features</span>
              <h2 className="display h2">{kw}: bus features and comfort</h2>
              <p className="lead">
                Every vehicle offered for {page.keyword} at Somu Holidays is a chauffeur-driven AC bus. Here is what
                you get.
              </p>
            </Reveal>
            <div className={styles.grid}>
              {SPECS.map((x) => (
                <div key={x.title} className={styles.card}>
                  <h3>{x.title}</h3>
                  <p>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {page.blocks.includes("routes") && (
        <section id="routes" className="section bgIvory50">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Popular Routes</span>
              <h2 className="display h2">{kw} for outstation trips from Bangalore</h2>
              <p className="lead">
                Distances are one-way from Bengaluru. Estimates apply the ₹37/km rate of the 21-seater to the return
                distance and are indicative only; the 300 km daily minimum, ₹800 daily driver allowance, tolls, parking
                and permits are extra, and your written quote is final.
              </p>
            </Reveal>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>One-way</th>
                    <th>Drive time</th>
                    <th>Indicative bus cost</th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTES.map((r) => (
                    <tr key={r.dest}>
                      <td>
                        <strong>{r.dest}</strong>
                        <span>{r.note}</span>
                      </td>
                      <td>{r.km} km</td>
                      <td>{r.hrs}</td>
                      <td>{r.est}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        )}

        {page.blocks.includes("zones") && (
        <section id="zones" className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Pickup Areas</span>
              <h2 className="display h2">{kw}: doorstep pickup across Bengaluru</h2>
              <p className="lead">
                Our base is in Rajajinagar. Whatever part of the city you search from, the bus for your {page.keyword}{" "}
                booking comes to you.
              </p>
            </Reveal>
            <div className={styles.grid}>
              {ZONES.map((z) => (
                <div key={z.zone} className={styles.card}>
                  <h3>{z.zone}</h3>
                  <p>{z.areas}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {page.blocks.includes("uses") && (
        <section id="uses" className="section bgIvory50">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Use Cases</span>
              <h2 className="display h2">Who books {page.keyword}</h2>
            </Reveal>
            <div className={styles.grid}>
              {USE_CASES.map((u) => (
                <div key={u.title} className={styles.card}>
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {page.blocks.includes("compare") && (
        <section id="compare" className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Comparison</span>
              <h2 className="display h2">{kw} compared with other options</h2>
            </Reveal>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Best for</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((c) => (
                    <tr key={c.option}>
                      <td>
                        <strong>{c.option}</strong>
                      </td>
                      <td>{c.fit}</td>
                      <td>{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        )}

        {page.blocks.includes("steps") && (
        <section id="steps" className="section bgIvory50">
          <div className="container">
            <Reveal>
              <span className="eyebrow">How It Works</span>
              <h2 className="display h2">How to book {page.keyword} in four steps</h2>
            </Reveal>
            <ol className={styles.steps}>
              {STEPS.map((st) => (
                <li key={st.title}>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        )}

        <FleetSection />
        <div id="book">
          <CtaSection />
        </div>

        <section className="section" id="bus-faq">
          <div className="container">
            <h2 className="display h2">{page.h1} — common questions</h2>
            <div className={styles.faqList}>
              {page.faqs.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${styles.linksSection}`}>
          <div className={`container ${styles.linksRow}`}>
            <span>Explore more:</span>
            {page.related.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.label}
              </Link>
            ))}
            <Link href="/contact#book">Book a Vehicle</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
