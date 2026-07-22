import React from "react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../../lib/content";

export default function Reviews() {
  const shown = REVIEWS.slice(0, 3);
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative py-14 md:py-20 px-5 md:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#3db8f2]" />
              <p className="font-display text-[#3db8f2] text-xs uppercase tracking-[0.3em]">Reviews</p>
            </div>
            <h2 className="font-display text-white text-3xl sm:text-4xl uppercase leading-none">
              What our <span className="text-gold underline-marker">regulars</span> say.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} className="fill-[var(--gold)] text-[var(--gold)]" />
            ))}
            <span className="font-display text-white text-sm uppercase tracking-[0.14em] ml-1">
              5.0 · 16 Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {shown.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="bg-[#050505] border border-[#2a2a2a] p-6 hover:border-[var(--gold)] transition-colors"
            >
              <Quote size={22} className="text-[#e63ebd] mb-3" />
              <p className="font-body text-[#dcdcdc] text-sm leading-relaxed mb-5">"{r.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
                <div>
                  <div className="font-display text-white text-sm uppercase tracking-wider">{r.name}</div>
                  <div className="text-xs text-[#a3a3a3] mt-0.5">{r.date}</div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} className="fill-[var(--gold)] text-[var(--gold)]" />
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
