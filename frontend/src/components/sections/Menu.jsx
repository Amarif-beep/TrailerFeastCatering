import React, { useState } from "react";

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
  orange: { color: "#f26b2e", text: "text-[#f26b2e]" },
  pink: { color: "#e63ebd", text: "text-[#e63ebd]" },
  blue: { color: "#3db8f2", text: "text-[#3db8f2]" },
};

const NUMBERS = ["01", "02", "03", "04", "05", "06", "07", "08"];

export default function Menu({ menu }) {
  const data = menu || FALLBACK;
  const [active, setActive] = useState(data.categories[0]?.id || "spuds");
  const current = data.categories.find((c) => c.id === active) || data.categories[0];
  const accent = ACCENTS[current?.accent] || ACCENTS.pink;
  const categoryIndex = data.categories.findIndex((c) => c.id === active);

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
              <p className="font-anton text-[#e63ebd] text-sm uppercase tracking-[0.3em]">
                The Menu
              </p>
            </div>
            <h2 className="font-anton text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9]">
              Built fresh.
              <br />
              <span className="text-[#3db8f2]">Served loud.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm text-base leading-relaxed">
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
                className={`font-anton uppercase text-sm tracking-[0.14em] px-6 py-3 border-2 transition-all ${
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

        {/* Active category — typographic feature instead of image */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Feature panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 border-2 border-[#e8d2a4] p-8 sm:p-10 relative overflow-hidden">
              <div
                className="absolute -top-8 -right-6 font-anton text-[180px] sm:text-[220px] leading-none opacity-[0.07] select-none pointer-events-none"
                style={{ color: accent.color }}
              >
                {NUMBERS[categoryIndex] || "01"}
              </div>
              <p className="font-anton text-xs uppercase tracking-[0.3em] mb-4" style={{ color: accent.color }}>
                Chapter {NUMBERS[categoryIndex] || "01"}
              </p>
              <h3 className={`font-anton text-4xl sm:text-5xl uppercase leading-none mb-4 ${accent.text}`}>
                {current.name}
              </h3>
              <p className="text-[#bcbcbc] text-base leading-relaxed mb-6">
                {current.tagline}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#2a2a2a]">
                <div>
                  <div className="font-anton text-xs uppercase tracking-[0.2em] text-[#a3a3a3]">
                    Items
                  </div>
                  <div className="font-anton text-3xl text-[#e8d2a4]">
                    {current.items.length}
                  </div>
                </div>
                <div className="h-10 w-px bg-[#2a2a2a]" />
                <div>
                  <div className="font-anton text-xs uppercase tracking-[0.2em] text-[#a3a3a3]">
                    From
                  </div>
                  <div className="font-anton text-3xl text-[#e8d2a4]">
                    {current.items.reduce((min, i) => {
                      const v = parseFloat((i.price || "").replace(/[^\d.]/g, ""));
                      return Number.isFinite(v) && v < min ? v : min;
                    }, Infinity) === Infinity
                      ? "—"
                      : `£${current.items.reduce((min, i) => {
                          const v = parseFloat((i.price || "").replace(/[^\d.]/g, ""));
                          return Number.isFinite(v) && v < min ? v : min;
                        }, Infinity).toFixed(2)}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Items list */}
          <div className="lg:col-span-7 space-y-3" data-testid={`menu-items-${current.id}`}>
            {current.items.map((item, i) => (
              <div
                key={i}
                data-testid={`menu-item-${current.id}-${i}`}
                className="group relative bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e8d2a4] p-6 sm:p-7 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex gap-5 flex-1">
                    <span
                      className="font-anton text-2xl shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: accent.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="font-anton text-[#e8d2a4] text-xl sm:text-2xl uppercase tracking-wide mb-1.5">
                        {item.name}
                      </div>
                      <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div
                    className="font-anton text-2xl sm:text-3xl whitespace-nowrap tracking-tight"
                    style={{ color: accent.color }}
                  >
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
