"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import styles from "./BusCostCalculator.module.css";

// Rates mirror lib/fleet.ts (21-seater ₹37/km, 25-seater ₹38/km, ₹800/day driver allowance,
// 300 km/day minimum). Tolls, parking and permits are not estimated.
const BUSES = [
  { id: "21", label: "21 seater AC bus", rate: 37 },
  { id: "25", label: "25 seater AC bus", rate: 38 },
];
const MIN_KM_PER_DAY = 300;
const BATA_PER_DAY = 800;

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function BusCostCalculator() {
  const [bus, setBus] = useState("21");
  const [km, setKm] = useState(300);
  const [days, setDays] = useState(1);

  const selected = BUSES.find((b) => b.id === bus) ?? BUSES[0];
  const safeDays = Math.max(1, Math.floor(days) || 1);
  const safeKm = Math.max(0, Math.floor(km) || 0);
  const billedKm = Math.max(safeKm, MIN_KM_PER_DAY * safeDays);
  const fare = billedKm * selected.rate;
  const bata = BATA_PER_DAY * safeDays;
  const total = fare + bata;

  return (
    <div className={styles.wrap} id="calculator">
      <h2 className={styles.title}>Bus rental cost calculator</h2>
      <p className={styles.lead}>
        Estimate a bus hire in Bangalore: pick the bus, enter the total kilometres of the trip (including the
        return) and the number of days.
      </p>
      <div className={styles.fields}>
        <label>
          Bus
          <select value={bus} onChange={(e) => setBus(e.target.value)}>
            {BUSES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label} (₹{b.rate}/km)
              </option>
            ))}
          </select>
        </label>
        <label>
          Total trip distance (km)
          <input type="number" min={0} inputMode="numeric" value={km} onChange={(e) => setKm(Number(e.target.value))} />
        </label>
        <label>
          Number of days
          <input type="number" min={1} inputMode="numeric" value={days} onChange={(e) => setDays(Number(e.target.value))} />
        </label>
      </div>
      <dl className={styles.result} aria-live="polite">
        <div>
          <dt>Billed distance (300 km/day minimum)</dt>
          <dd>{billedKm.toLocaleString("en-IN")} km</dd>
        </div>
        <div>
          <dt>Bus fare</dt>
          <dd>{inr(fare)}</dd>
        </div>
        <div>
          <dt>Driver allowance (₹800 × {safeDays} day{safeDays > 1 ? "s" : ""})</dt>
          <dd>{inr(bata)}</dd>
        </div>
        <div className={styles.total}>
          <dt>Estimated total</dt>
          <dd>{inr(total)}</dd>
        </div>
      </dl>
      <p className={styles.note}>
        Tolls, parking and other-state permits are charged at actuals and are not included. This is an estimate;
        your written quote is final.
      </p>
      <a
        className="btn btnPrimary"
        href={waLink(
          `Hi Somu Holidays, I'd like a quote for a ${selected.label}: about ${safeKm} km over ${safeDays} day(s).`
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get this quote on WhatsApp
      </a>
    </div>
  );
}
