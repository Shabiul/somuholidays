"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import styles from "./ReviewsSection.module.css";

// Only reviews whose exact wording appears on the live Google Business Profile belong here.
// Quote them verbatim — never reword, shorten into a different meaning, or invent text for a
// reviewer who left a star rating without a comment. Checked against the profile on 2026-11-16.
const REVIEWS = [
  {
    author: "Reshma B.H",
    text: "Professional drivers and clean cars, they mentioned that the cars are deep cleaned before every ride. Drivers are very friendly and I had a very comfortable ride with them.",
  },
  {
    author: "Anushree R",
    text: "Experience driver and trustworthy tours and travels",
  },
  {
    author: "Bhoja Raju",
    text: "Best rentals in Bangalore",
  },
];

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className={`section onDark ${styles.section}`}
      style={{ backgroundImage: "url('/contact page background image.jpeg')" }}
    >
      <span className={styles.overlay} aria-hidden="true" />
      <div className="container" style={{ position: "relative" }}>
        <div className={styles.headRow}>
          <Reveal className={styles.wrap}>
            <h2 className="display h2 gradientHeadingRedWhite">See what our customers are saying</h2>
            <p className="lead" style={{ marginInline: "auto" }}>
              Rated {SITE.googleRating.value} from {SITE.googleRating.count} Google reviews. Read every review,
              including the critical ones, on our Google profile, or follow our trips on Instagram and Facebook.
            </p>
          </Reveal>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {REVIEWS.map((r) => (
              <div className={styles.slide} key={r.author}>
                <a
                  className={styles.card}
                  href={SITE.social.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${r.author}'s review on Google`}
                >
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" size={15} />
                    ))}
                  </div>
                  <p className={styles.quote}>&ldquo;{r.text}&rdquo;</p>
                  <div className={styles.cardFoot}>
                    <div className={styles.author}>
                      <span className={styles.authorName}>
                        {r.author}
                        <span className={styles.verified} title="Google review">
                          <Icon name="check" size={11} />
                        </span>
                      </span>
                      <span className={styles.meta}>Google review</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollerNav}>
          <button className="iconBtn" aria-label="Previous reviews" onClick={scrollPrev}>
            <Icon name="left" size={18} />
          </button>
          <button className="iconBtn" aria-label="Next reviews" onClick={scrollNext}>
            <Icon name="right" size={18} />
          </button>
        </div>

        <Reveal className={styles.actions}>
          <a className="btn btnPrimary" href={SITE.social.googleReview} target="_blank" rel="noopener noreferrer">
            <Icon name="star" size={18} />
            Read Google Reviews
          </a>
          <a className="btn btnPrimary" href={SITE.social.justdial} target="_blank" rel="noopener noreferrer">
            View on JustDial
          </a>
        </Reveal>
      </div>
    </section>
  );
}
