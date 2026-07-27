import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../lib/trailers";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-16 md:py-24 px-5 md:px-8 bg-white"
    >
      <div className="max-w-3xl mx-auto relative">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#f26b2e]" />
            <p className="font-display text-[#f26b2e] text-xs uppercase tracking-[0.3em]">FAQ</p>
            <span className="h-px w-8 bg-[#f26b2e]" />
          </div>
          <h2 className="font-display text-[#0f0f0f] text-3xl sm:text-4xl uppercase leading-none">
            Things people <span className="ul-orange">ask us.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-testid={`faq-item-${i}`}
                className="border-2 overflow-hidden transition-colors"
                style={{ borderColor: isOpen ? "#e63ebd" : "#e2ddd3" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-[#faf8f5] transition-colors"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-display text-[#0f0f0f] text-lg uppercase tracking-wide">{f.q}</span>
                  <span
                    className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-[#0f0f0f]"
                    style={{ background: isOpen ? "#e63ebd" : "#0f0f0f", color: "#fff" }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1 text-[#444] font-body text-base leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
