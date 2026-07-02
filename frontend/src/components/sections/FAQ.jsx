import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../lib/trailers";
import PaintSplatter from "../decor/PaintSplatter";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <PaintSplatter variant="splat2" color="#3db8f2" size={220} style={{ top: "5%", left: "5%" }} rotate={20} opacity={0.35} />
      <PaintSplatter variant="drip" color="#e63ebd" size={150} style={{ bottom: "10%", right: "5%" }} rotate={-15} opacity={0.4} />

      <div className="max-w-4xl mx-auto relative">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#f26b2e]" />
            <p className="font-display text-[#f26b2e] text-sm uppercase tracking-[0.32em]">
              FAQ
            </p>
            <span className="h-px w-10 bg-[#f26b2e]" />
          </div>
          <h2 className="font-display text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
            Things people
            <br />
            <span className="text-[#e63ebd] underline-marker">ask us.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-testid={`faq-item-${i}`}
                className="bg-[#0a0a0a] border-2 border-[#2a2a2a] overflow-hidden transition-colors"
                style={{ borderColor: isOpen ? "#e63ebd" : "#2a2a2a" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6 hover:bg-[#111] transition-colors"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-display text-[#e8d2a4] text-lg sm:text-xl uppercase tracking-wide">
                    {f.q}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-black"
                    style={{
                      background: isOpen ? "#e63ebd" : "#e8d2a4",
                      color: "#000",
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-[#bcbcbc] font-body text-base leading-relaxed">
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
