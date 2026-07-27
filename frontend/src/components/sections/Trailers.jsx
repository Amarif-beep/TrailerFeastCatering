import React from "react";
import { ArrowUpRight, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { TRAILERS } from "../../lib/trailers";
import Reveal from "../Reveal";

export default function Trailers() {
  return (
    <section
      id="trailers"
      data-testid="trailers-section"
      className="relative py-16 md:py-24 px-5 md:px-8 bg-[#f5f2ec]"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#e63ebd]" />
              <p className="font-display text-[#e63ebd] text-xs uppercase tracking-[0.3em]">Our Fleet</p>
            </div>
            <h2 className="font-display text-[#0f0f0f] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.9]">
              Three trailers. <span className="ul-pink">one standard.</span>
            </h2>
          </div>
          <p className="text-[#555] max-w-xs text-sm leading-relaxed font-body">
            Pick the trailer that fits your event — each one fully insured, self-contained,
            and manned by a crew that cares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TRAILERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 120}>
              <div
                data-testid={`trailer-card-${t.id}`}
                className="group card-light flex flex-col overflow-hidden h-full hover:-translate-y-1"
                style={{ boxShadow: `6px 6px 0 ${t.accent}` }}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={t.hero}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0f0f0f] text-white px-3 py-1 font-display uppercase text-[10px] tracking-[0.24em]">
                    Trailer 0{i + 1}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-[#0f0f0f] text-2xl uppercase leading-none mb-2">{t.name}</h3>
                  <p className="font-news text-[#666] text-base italic mb-5">{t.tagline}</p>

                  <div className="mb-5">
                    <p className="font-display text-xs uppercase tracking-[0.22em] mb-2" style={{ color: t.accent }}>Menu</p>
                    <ul className="space-y-1.5">
                      {t.menu.map((m, mi) => (
                        <li key={mi} className="text-sm text-[#333] font-body flex gap-2">
                          <span style={{ color: t.accent }}>▸</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#e2ddd3]">
                    <div className="flex items-start gap-2">
                      <Users size={14} className="mt-0.5 shrink-0" style={{ color: t.accent }} />
                      <div>
                        <p className="font-display uppercase text-[10px] tracking-[0.2em] text-[#888]">Serves</p>
                        <p className="text-xs text-[#0f0f0f] font-body">Up to {t.servingCapacity.match(/\d+/)?.[0] || "—"}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap size={14} className="mt-0.5 shrink-0" style={{ color: t.accent }} />
                      <div>
                        <p className="font-display uppercase text-[10px] tracking-[0.2em] text-[#888]">Power</p>
                        <p className="text-xs text-[#0f0f0f] font-body">Self-contained</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/trailers/${t.id}`}
                      data-testid={`view-trailer-${t.id}`}
                      className="flex-1 text-center font-display uppercase text-xs tracking-[0.18em] px-4 py-3 border-2 border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/trailers/${t.id}#booking`}
                      data-testid={`book-trailer-${t.id}`}
                      className="flex-1 text-center font-display uppercase text-xs tracking-[0.18em] px-4 py-3 border-2 border-[#0f0f0f] text-white flex items-center justify-center gap-1.5"
                      style={{ background: t.accent }}
                    >
                      Book <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
