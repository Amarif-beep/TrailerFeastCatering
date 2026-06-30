import React, { useState } from "react";
import { IMAGES } from "../../lib/content";

const FALLBACK = {
  categories: [
    {
      id: "spuds",
      name: "Jacket Potatoes",
      tagline: "Soft, fluffy, and loaded to the brim.",
      accent: "orange",
      items: [
        { name: "Pulled Pork Spud", desc: "Slow-cooked pulled pork, BBQ glaze, crispy onions, slaw.", price: "£8.50" },
        { name: "Chilli Beef Spud", desc: "Homemade chilli, sour cream, cheddar, jalapeños.", price: "£8.00" },
        { name: "Cheese & Beans Classic", desc: "Mature cheddar, Heinz beans, butter, chives.", price: "£6.50" },
        { name: "Ratatouille Spud (V)", desc: "Slow-cooked ratatouille, herb oil, parmesan.", price: "£7.50" },
      ],
    },
  ],
};

const ACCENTS = {
  orange: { color: "#f26b2e", text: "text-[#f26b2e]", underline: "underline-marker-orange" },
  pink: { color: "#e63ebd", text: "text-[#e63ebd]", underline: "" },
  blue: { color: "#3db8f2", text: "text-[#3db8f2]", underline: "underline-marker-blue" },
};

// Map a real photo per category id (now with proper dish-specific photos)
const CATEGORY_PHOTOS = {
  spuds: IMAGES.pulledPorkSpud,
  fries: IMAGES.chilliSpud,
  crepes: IMAGES.nutellaCrepe,
  hungarian: IMAGES.tunaSpud,
};

const NUMBERS = ["01", "02", "03", "04", "05", "06", "07", "08"];

export default function Menu({ menu }) {
  const data = menu || FALLBACK;
  const [active, setActive] = useState(data.categories[0]?.id || "spuds");
  const current = data.categories.find((c) => c.id === active) || data.categories[0];
  const accent = ACCENTS[current?.accent] || ACCENTS.pink;
  const categoryIndex = data.categories.findIndex((c) => c.id === active);
  const photo = CATEGORY_PHOTOS[current.id] || IMAGES.jacketPotato;

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section intro */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-[#e63ebd]" />
              <p className="font-display text-[#e63ebd] text-sm uppercase tracking-[0.32em]">
                The Menu
              </p>
            </div>
            <h2 className="font-display text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              Built <span className="font-news lowercase normal-case text-[#bcbcbc] text-4xl sm:text-5xl lg:text-6xl">fresh.</span>
              <br />
              <span className="text-[#3db8f2] underline-marker underline-marker-orange">Served loud.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm text-base leading-relaxed font-body">
            Cooked to order on the trailer. Prices may vary at events.
            <span className="block mt-1 text-[#bcbcbc] text-sm">(V) — Vegetarian</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-14" data-testid="menu-tabs">
          {data.categories.map((cat) => {
            const a = ACCENTS[cat.accent] || ACCENTS.pink;
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                data-testid={`menu-tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`font-display uppercase text-sm tracking-[0.16em] px-6 py-3 border-2 transition-all ${
                  isActive
                    ? "text-black border-black"
                    : "text-[#e8d2a4] border-[#2a2a2a] hover:border-[#e8d2a4]"
                }`}
                style={{
                  background: isActive ? a.color : "transparent",
                  boxShadow: isActive ? `4px 4px 0 #000` : "none",
                  transform: isActive ? "translate(-2px, -2px)" : "none",
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active category */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Feature panel with REAL photo */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative" style={{ transform: "rotate(-1deg)" }}>
                <img
                  src={photo}
                  alt={current.name}
                  className="w-full h-[340px] sm:h-[420px] object-cover border-4 border-[#e8d2a4]"
                  style={{ boxShadow: `10px 10px 0 ${accent.color}` }}
                />
                <div
                  className="absolute -top-3 -left-3 font-display uppercase text-xs px-3 py-1.5 border-2 border-black text-black z-10"
                  style={{
                    background: accent.color,
                    boxShadow: "3px 3px 0 #000",
                    transform: "rotate(-6deg)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Chapter {NUMBERS[categoryIndex] || "01"}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4">
                  <div className="font-display text-xs uppercase tracking-[0.22em] text-[#a3a3a3] mb-1">Items</div>
                  <div className="font-display text-3xl text-[#e8d2a4] leading-none">
                    {current.items.length}
                  </div>
                </div>
                <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4">
                  <div className="font-display text-xs uppercase tracking-[0.22em] text-[#a3a3a3] mb-1">From</div>
                  <div className="font-display text-3xl leading-none" style={{ color: accent.color }}>
                    {(() => {
                      const min = current.items.reduce((m, i) => {
                        const v = parseFloat((i.price || "").replace(/[^\d.]/g, ""));
                        return Number.isFinite(v) && v < m ? v : m;
                      }, Infinity);
                      return min === Infinity ? "—" : `£${min.toFixed(2)}`;
                    })()}
                  </div>
                </div>
              </div>

              <p className="font-news text-[#bcbcbc] text-lg leading-snug mt-5">
                {current.tagline}
              </p>
            </div>
          </div>

          {/* Items list */}
          <div className="lg:col-span-7 space-y-3" data-testid={`menu-items-${current.id}`}>
            <h3 className={`font-display text-3xl sm:text-4xl uppercase mb-4 ${accent.text}`}>
              {current.name}
            </h3>
            {current.items.map((item, i) => (
              <div
                key={i}
                data-testid={`menu-item-${current.id}-${i}`}
                className="group relative bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e8d2a4] p-6 sm:p-7 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex gap-5 flex-1">
                    <span
                      className="font-display text-2xl shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: accent.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="font-display text-[#e8d2a4] text-xl sm:text-2xl uppercase tracking-wide mb-1.5">
                        {item.name}
                      </div>
                      <p className="text-sm text-[#a3a3a3] leading-relaxed font-body">{item.desc}</p>
                    </div>
                  </div>
                  <div
                    className="font-display text-2xl sm:text-3xl whitespace-nowrap tracking-tight"
                    style={{ color: accent.color }}
                  >
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chalkboard photo strip */}
        <div className="mt-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <p className="font-display text-[#3db8f2] text-xs uppercase tracking-[0.32em] mb-3">
              The Real Deal
            </p>
            <h3 className="font-display text-[#e8d2a4] text-3xl sm:text-4xl uppercase leading-[0.95] mb-4">
              Or just <span className="font-news lowercase normal-case text-[#bcbcbc]">read it</span>
              <br />
              off the <span className="text-[#e63ebd] underline-marker">chalkboard</span>.
            </h3>
            <p className="text-[#a3a3a3] font-body leading-relaxed">
              Specials change with the season — keep an eye on the board when you roll up.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative border-2 border-[#e8d2a4]" style={{ boxShadow: "8px 8px 0 #000" }}>
              <img
                src={IMAGES.chalkboard}
                alt="The Hungry Trailer chalkboard menu"
                className="w-full h-[280px] sm:h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
