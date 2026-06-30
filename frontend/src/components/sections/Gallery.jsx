import React from "react";
import { IMAGES } from "../../lib/content";
import PaintSplatter from "../decor/PaintSplatter";

const PHOTOS = [
  { src: IMAGES.smashBurgerGrill, alt: "Smash burger fresh off the grill", tag: "Off The Grill", color: "#e63ebd", h: "h-[420px]" },
  { src: IMAGES.chilliSpud, alt: "Loaded chilli spud with sour cream", tag: "Chilli Loaded Spud", color: "#f26b2e", h: "h-[300px]" },
  { src: IMAGES.nutellaCrepe, alt: "Fresh Nutella crepe", tag: "Nutella Crepe", color: "#3db8f2", h: "h-[300px]" },
  { src: IMAGES.loadedFriesPickles, alt: "Loaded fries with pickles & sauce", tag: "Loaded Fries", color: "#3db8f2", h: "h-[420px]" },
  { src: IMAGES.breakfastMenu, alt: "Breakfast deals", tag: "Breakfast Deals", color: "#e63ebd", h: "h-[300px]" },
  { src: IMAGES.pulledPorkSpud, alt: "Pulled pork spud", tag: "Pulled Pork Spud", color: "#f26b2e", h: "h-[420px]" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <div className="spray" style={{ background: "#f26b2e", width: 380, height: 380, top: "20%", left: "-100px", opacity: 0.18 }} />
      <div className="spray" style={{ background: "#3db8f2", width: 380, height: 380, bottom: "10%", right: "-100px", opacity: 0.18 }} />

      <PaintSplatter variant="splat2" color="#e63ebd" size={220} style={{ top: "5%", right: "5%" }} rotate={20} opacity={0.45} />
      <PaintSplatter variant="splat1" color="#f26b2e" size={180} style={{ bottom: "20%", left: "3%" }} rotate={-30} opacity={0.5} />
      <PaintSplatter variant="drip" color="#3db8f2" size={140} style={{ top: "55%", right: "45%" }} rotate={-12} opacity={0.35} />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e63ebd]" />
              <p className="font-display text-[#e63ebd] text-sm uppercase tracking-[0.32em]">
                The Goods
              </p>
            </div>
            <h2 className="font-display text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              Straight off
              <br />
              <span className="font-news lowercase normal-case text-[#bcbcbc] text-4xl sm:text-5xl lg:text-6xl">the</span>{" "}
              <span className="text-[#3db8f2] underline-marker underline-marker-blue">trailer.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm text-base leading-relaxed font-body">
            No stock photos. No filters. Just the food our regulars come back for.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className="relative group overflow-hidden border-2 border-[#e8d2a4]"
              style={{
                boxShadow: `6px 6px 0 ${p.color}`,
                transform: `rotate(${i % 2 === 0 ? "-0.4" : "0.4"}deg)`,
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className={`w-full ${p.h} object-cover transition-transform duration-500 group-hover:scale-105`}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-12">
                <span
                  className="inline-block font-display uppercase text-xs tracking-[0.18em] px-2.5 py-1 border-2 border-black text-black"
                  style={{ background: p.color, boxShadow: "3px 3px 0 #000" }}
                >
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Breakfast callout banner */}
        <div
          className="mt-14 bg-[#0a0a0a] border-2 border-[#e63ebd] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6"
          style={{ boxShadow: "10px 10px 0 #000" }}
        >
          <div className="flex-1">
            <p className="font-display text-[#e63ebd] text-xs uppercase tracking-[0.32em] mb-2">
              New · Breakfast Deals
            </p>
            <h3 className="font-display text-[#e8d2a4] text-3xl sm:text-4xl uppercase leading-[0.95]">
              Mornings, <span className="font-news lowercase normal-case text-[#bcbcbc]">sorted.</span>
            </h3>
            <p className="text-[#a3a3a3] font-body mt-3 max-w-xl">
              Breakfast rolls from £3.50, loaded rolls, breakfast boxes & breakfast spuds —
              all the fuel you need before the day gets going.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-pink shrink-0"
            data-testid="breakfast-cta"
          >
            See The Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
