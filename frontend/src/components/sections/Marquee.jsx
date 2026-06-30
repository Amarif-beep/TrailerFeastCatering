import React from "react";

const ITEMS = [
  "FRESH",
  "HOT",
  "LOADED",
  "HUNGARIAN STREET FOOD",
  "JACKET SPUDS",
  "LOADED FRIES",
  "CREPES",
  "DAVENTRY",
];

export default function Marquee() {
  // Duplicate items twice for seamless loop
  const list = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="marquee-section"
      className="bg-[#e8d2a4] border-y-4 border-black overflow-hidden py-4 relative"
    >
      <div className="marquee-track">
        {list.map((t, i) => (
          <span
            key={i}
            className="font-bungee text-black text-2xl md:text-3xl px-6 inline-flex items-center gap-6"
          >
            🔥 {t}
            <span className="text-[#e63ebd] text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
