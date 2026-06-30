import React from "react";

const ITEMS = [
  "Fresh",
  "Hot",
  "Loaded",
  "Hungarian Street Food",
  "Jacket Spuds",
  "Loaded Fries",
  "Homemade Crepes",
  "Daventry",
];

export default function Marquee() {
  const list = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="marquee-section"
      className="bg-[#e8d2a4] border-y-2 border-black overflow-hidden py-5 relative"
    >
      <div className="marquee-track">
        {list.map((t, i) => (
          <span
            key={i}
            className="font-anton text-black text-2xl md:text-3xl px-6 inline-flex items-center gap-6 uppercase tracking-[0.08em]"
          >
            {t}
            <span className="text-[#e63ebd] text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
