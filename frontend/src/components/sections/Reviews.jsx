import React from "react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../../lib/content";
import PaintSplatter from "../decor/PaintSplatter";

const ROTATIONS = [-1.2, 0.8, -0.6, 1.4, -1, 0.6, -1.6, 1, -0.8];
const SHADOW_COLORS = ["#e63ebd", "#3db8f2", "#f26b2e", "#e63ebd", "#3db8f2", "#f26b2e", "#e63ebd", "#3db8f2", "#f26b2e"];

export default function Reviews() {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <PaintSplatter variant="splat1" color="#3db8f2" size={220} style={{ top: "8%", left: "5%" }} rotate={-20} opacity={0.4} />
      <PaintSplatter variant="splat2" color="#e63ebd" size={200} style={{ bottom: "15%", right: "8%" }} rotate={15} opacity={0.4} />
      <PaintSplatter variant="drip" color="#f26b2e" size={140} style={{ top: "55%", left: "45%" }} rotate={8} opacity={0.32} />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#3db8f2]" />
              <p className="font-display text-[#3db8f2] text-sm uppercase tracking-[0.32em]">
                Word on the street
              </p>
            </div>
            <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              What our
              <br />
              <span className="font-news lowercase normal-case text-[#bcbcbc] text-4xl sm:text-5xl lg:text-6xl">regulars</span>{" "}
              <span className="text-gold underline-marker underline-marker-orange">say.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={26} className="fill-[#f26b2e] text-[#f26b2e]" />
              ))}
            </div>
            <p className="font-display text-[#e8d2a4] text-lg uppercase tracking-[0.14em]">
              5.0 · 100% Recommended · 16 Reviews
            </p>
            <p className="text-[#a3a3a3] text-sm font-body">Verified Facebook recommendations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="relative bg-[#e8d2a4] text-black p-7 sm:p-8 border-2 border-black"
              style={{
                transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
                boxShadow: `8px 8px 0 ${SHADOW_COLORS[i % SHADOW_COLORS.length]}`,
              }}
            >
              <Quote size={26} className="text-[#e63ebd] mb-4" />
              <p className="font-body text-base leading-relaxed mb-6">"{r.quote}"</p>
              <div className="flex items-center justify-between pt-5 border-t-2 border-dashed border-black/25">
                <div>
                  <div className="font-display text-base uppercase tracking-wider leading-none">
                    {r.name}
                  </div>
                  <div className="text-xs opacity-60 mt-1 font-body">{r.date}</div>
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
