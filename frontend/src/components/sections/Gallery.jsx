import React from "react";
import { IMAGES } from "../../lib/content";

const PHOTOS = [
  IMAGES.trailerCloseup,
  IMAGES.smashBurgerGrill,
  IMAGES.pulledPorkSpud,
  IMAGES.nutellaCrepe,
  IMAGES.loadedFriesPickles,
  IMAGES.trailerFullWrap,
  IMAGES.chilliSpud,
  IMAGES.trailerBackName,
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-14 md:py-20 px-5 md:px-8 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-[#e63ebd]" />
          <p className="font-display text-[#e63ebd] text-xs uppercase tracking-[0.3em]">Gallery</p>
          <h2 className="font-display text-white text-2xl sm:text-3xl uppercase leading-none ml-2">
            The <span className="text-gold">Goods</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className="relative group overflow-hidden border border-[#2a2a2a] aspect-square"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
