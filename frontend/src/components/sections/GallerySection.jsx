import React from "react";
import Reveal from "../Reveal";
import { IMAGES } from "../../lib/content";

const PHOTOS = [
  IMAGES.trailerCloseup,
  IMAGES.smashBurgerGrill,
  IMAGES.pulledPorkSpud,
  IMAGES.loadedFriesPickles,
  IMAGES.nutellaCrepe,
  IMAGES.trailerFullWrap,
  IMAGES.chilliSpud,
  IMAGES.tunaSpud,
  IMAGES.smashBurger,
  IMAGES.trailerBackName,
  IMAGES.jacketPotato,
  IMAGES.trailerRearSun,
];

export default function GallerySection() {
  return (
    <section id="gallery" data-testid="gallery-section" className="relative py-16 md:py-24 px-5 md:px-8 bg-[#14110c]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a04e]" />
            <h2 className="font-display text-white text-3xl sm:text-4xl uppercase tracking-wide">Gallery</h2>
            <span className="h-px w-8 bg-[#c9a04e]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PHOTOS.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 70}>
              <div data-testid={`gallery-item-${i}`} className="rounded-md overflow-hidden border border-[#322a20] aspect-square group">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
