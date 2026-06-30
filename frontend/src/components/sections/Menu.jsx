import React, { useState } from "react";
import { IMAGES } from "../../lib/content";

const FALLBACK = {
  categories: [
    {
      id: "spuds",
      name: "Jacket Potatoes",
      tagline: "The legendary spuds. Soft, fluffy, filling.",
      accent: "orange",
      items: [
        { name: "Pulled Pork Spud", desc: "Slow-cooked pulled pork, BBQ glaze, crispy onions, slaw.", price: "£8.50" },
        { name: "Chilli Beef Spud", desc: "Homemade chilli, sour cream, cheddar, jalapeños.", price: "£8.00" },
        { name: "Cheese & Beans Classic", desc: "Mountain of cheddar, heinz beans, butter, chives.", price: "£6.50" },
        { name: "Ratatouille Spud (V)", desc: "Slow-cooked ratatouille, herb oil, parmesan shavings.", price: "£7.50" },
      ],
    },
  ],
};

const ACCENTS = {
  orange: { color: "#f26b2e", shadow: "8px 8px 0 #f26b2e", text: "text-[#f26b2e]" },
  pink: { color: "#e63ebd", shadow: "8px 8px 0 #e63ebd", text: "text-[#e63ebd]" },
  blue: { color: "#3db8f2", shadow: "8px 8px 0 #3db8f2", text: "text-[#3db8f2]" },
};

export default function Menu({ menu }) {
  const data = menu || FALLBACK;
  const [active, setActive] = useState(data.categories[0]?.id || "spuds");
  const current = data.categories.find((c) => c.id === active) || data.categories[0];
  const accent = ACCENTS[current?.accent] || ACCENTS.pink;

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-marker text-[#e63ebd] text-xl md:text-2xl rotate-[-2deg] mb-2">
              the goods 👇
            </p>
            <h2 className="font-bungee text-[#e8d2a4] text-4xl sm:text-5xl lg:text-6xl uppercase leading-none">
              The <span className="text-[#3db8f2]">Menu</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-md text-base">
            Cooked fresh on the truck. Prices may vary at events. V = vegetarian.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12" data-testid="menu-tabs">
          {data.categories.map((cat) => {
            const a = ACCENTS[cat.accent] || ACCENTS.pink;
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                data-testid={`menu-tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`font-bungee uppercase text-xs sm:text-sm px-5 py-3 border-2 border-black transition-all ${
                  isActive ? "text-black" : "text-[#e8d2a4] hover:text-black"
                }`}
                style={{
                  background: isActive ? a.color : "#121212",
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
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Image card */}
          <div className="lg:col-span-5 relative">
            <div className="relative" style={{ transform: "rotate(-1.5deg)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 tape z-20" />
              <img
                src={IMAGES[current.id] || IMAGES.spuds}
                alt={current.name}
                className="w-full h-[340px] sm:h-[420px] object-cover border-4 border-[#e8d2a4]"
                style={{ boxShadow: accent.shadow }}
              />
              <div className="absolute -bottom-4 -right-4 bg-black border-2 border-[#e8d2a4] px-4 py-2 font-bungee text-[#e8d2a4] text-sm uppercase">
                {current.tagline}
              </div>
            </div>
          </div>

          {/* Items list */}
          <div className="lg:col-span-7 space-y-4" data-testid={`menu-items-${current.id}`}>
            <h3 className={`font-bungee text-3xl sm:text-4xl uppercase ${accent.text}`}>
              {current.name}
            </h3>
            {current.items.map((item, i) => (
              <div
                key={i}
                data-testid={`menu-item-${current.id}-${i}`}
                className="group bg-[#121212] border-2 border-[#2a2a2a] hover:border-[#e63ebd] p-5 flex items-start justify-between gap-6 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-bungee text-[#e8d2a4] text-lg uppercase mb-1">
                    {item.name}
                  </div>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                </div>
                <div
                  className="font-marker text-2xl whitespace-nowrap"
                  style={{ color: accent.color }}
                >
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
