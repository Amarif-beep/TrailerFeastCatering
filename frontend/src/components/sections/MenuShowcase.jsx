import React, { useState } from "react";
import Reveal from "../Reveal";
import { TRAILERS } from "../../lib/trailers";

// Homepage menu showcase — uses the flagship trailer's detailed menu.
export default function MenuShowcase() {
  const cats = TRAILERS[0].menuDetail;
  const [tab, setTab] = useState(cats[0].id);
  const active = cats.find((c) => c.id === tab) || cats[0];

  return (
    <section id="menu" data-testid="menu-section" className="relative py-16 md:py-24 px-5 md:px-8 bg-[#0f0d0b]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#c9a04e]" />
            <h2 className="font-display text-white text-3xl sm:text-4xl uppercase tracking-wide">Our Menu</h2>
            <span className="h-px w-8 bg-[#c9a04e]" />
          </div>
          <p className="text-[#b0a894] font-body">Freshly made, cooked to order. Prices may vary at events.</p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-[#322a20] pb-4">
          {cats.map((c) => (
            <button
              key={c.id}
              data-testid={`home-menu-tab-${c.id}`}
              onClick={() => setTab(c.id)}
              className={`font-display uppercase text-xs tracking-[0.14em] px-4 py-2 rounded transition-colors ${
                c.id === tab ? "bg-[#c9a04e] text-[#17130d]" : "text-[#cfc7b8] hover:text-[#c9a04e]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <Reveal className="grid lg:grid-cols-3 gap-8" key={active.id}>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {active.columns.map((col, ci) => (
              <div key={ci}>
                <h3 className="font-display text-[#c9a04e] text-sm uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#322a20]">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((it, ii) => (
                    <li key={ii} className="flex items-baseline justify-between gap-3">
                      <span className="text-[#f5f1e8] font-body text-sm">{it.name}</span>
                      <span className="flex-1 border-b border-dotted border-[#3a3227] mx-2 translate-y-[-3px]" />
                      <span className="font-display text-[#c9a04e] text-sm">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="relative rounded-lg overflow-hidden border border-[#322a20] min-h-[220px]">
            <img src={active.sample.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10">
              <span className="font-display text-[#c9a04e] uppercase text-[10px] tracking-[0.2em] block mb-1">Sample</span>
              <p className="font-display text-white uppercase text-sm leading-tight">{active.sample.caption}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
