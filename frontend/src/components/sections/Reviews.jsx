import React from "react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../../lib/content";

const ROTATIONS = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.8, -1.2];
const SHADOW_COLORS = ["#e63ebd", "#3db8f2", "#f26b2e", "#e63ebd", "#3db8f2", "#f26b2e", "#e63ebd", "#3db8f2", "#f26b2e"];

export default function Reviews() {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="font-marker text-[#3db8f2] text-xl md:text-2xl rotate-[-2deg] mb-2">
            from real hungry humans 💬
          </p>
          <h2 className="font-bungee text-[#e8d2a4] text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-3">
            Word On <span className="text-[#e63ebd]">The Street</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={22} className="fill-[#f26b2e] text-[#f26b2e]" />
            ))}
            <span className="font-bungee text-[#e8d2a4] ml-3 text-sm uppercase">100% recommend · 16 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="relative bg-[#e8d2a4] text-black p-6 sm:p-7 border-2 border-black"
              style={{
                transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
                boxShadow: `8px 8px 0 ${SHADOW_COLORS[i % SHADOW_COLORS.length]}`,
              }}
            >
              <div className="tape" style={{ top: -8, left: "40%" }} />
              <Quote size={28} className="text-[#e63ebd] mb-3" />
              <p className="font-body text-base leading-relaxed mb-5">"{r.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-black/30">
                <div>
                  <div className="font-bungee text-sm uppercase">{r.name}</div>
                  <div className="text-xs opacity-70">{r.date}</div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={13} className="fill-[#f26b2e] text-[#f26b2e]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
