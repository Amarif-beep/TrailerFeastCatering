import React from "react";
import { ArrowUpRight, Zap, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { TRAILERS } from "../../lib/trailers";
import PaintSplatter from "../decor/PaintSplatter";

export default function Trailers() {
  return (
    <section
      id="trailers"
      data-testid="trailers-section"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      <PaintSplatter variant="splat1" color="#e63ebd" size={240} style={{ top: "5%", right: "3%" }} rotate={-20} opacity={0.45} />
      <PaintSplatter variant="drip" color="#3db8f2" size={160} style={{ top: "45%", left: "3%" }} rotate={15} opacity={0.5} />
      <PaintSplatter variant="splat2" color="#f26b2e" size={200} style={{ bottom: "10%", right: "8%" }} rotate={25} opacity={0.4} />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e63ebd]" />
              <p className="font-display text-[#e63ebd] text-sm uppercase tracking-[0.32em]">
                Our Fleet
              </p>
            </div>
            <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              Three trailers.
              <br />
              <span className="font-news lowercase normal-case text-[#bcbcbc] text-4xl sm:text-5xl lg:text-6xl">one</span>{" "}
              <span className="text-gold underline-marker underline-marker-orange">standard.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm text-base leading-relaxed font-body">
            Pick the trailer that fits your event. Each one comes fully insured, self-contained,
            and manned by a crew that actually cares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {TRAILERS.map((t, i) => (
            <div
              key={t.id}
              data-testid={`trailer-card-${t.id}`}
              className="group relative bg-[#050505] border-2 border-[#e8d2a4] flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                boxShadow: `10px 10px 0 ${t.accent}`,
                transform: `rotate(${i % 2 === 0 ? "-0.4" : "0.4"}deg)`,
              }}
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={t.hero}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black text-[#e8d2a4] border-2 border-[#e8d2a4] px-3 py-1 font-display uppercase text-[10px] tracking-[0.24em]">
                  Trailer 0{i + 1}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-white text-2xl sm:text-3xl uppercase leading-none mb-2">
                  {t.name}
                </h3>
                <p className="font-news text-[#bcbcbc] text-base italic mb-5">{t.tagline}</p>

                <div className="mb-5">
                  <p className="font-display text-xs uppercase tracking-[0.22em] mb-2" style={{ color: t.accent }}>
                    Menu
                  </p>
                  <ul className="space-y-1.5">
                    {t.menu.map((m, mi) => (
                      <li key={mi} className="text-sm text-[#e8d2a4] font-body flex gap-2">
                        <span style={{ color: t.accent }}>▸</span> {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#2a2a2a]">
                  <div className="flex items-start gap-2">
                    <Users size={14} className="text-[#3db8f2] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display uppercase text-[10px] tracking-[0.2em] text-[#a3a3a3]">Serves</p>
                      <p className="text-xs text-[#e8d2a4] font-body">Up to {t.servingCapacity.match(/\d+/)?.[0] || "—"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap size={14} className="text-[#3db8f2] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display uppercase text-[10px] tracking-[0.2em] text-[#a3a3a3]">Power</p>
                      <p className="text-xs text-[#e8d2a4] font-body">Self-contained</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/trailers/${t.id}`}
                    data-testid={`view-trailer-${t.id}`}
                    className="flex-1 text-center font-display uppercase text-xs tracking-[0.18em] px-4 py-3 border-2 border-[#e8d2a4] text-[#e8d2a4] hover:bg-[#e8d2a4] hover:text-black transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/trailers/${t.id}#booking`}
                    data-testid={`book-trailer-${t.id}`}
                    className="flex-1 text-center font-display uppercase text-xs tracking-[0.18em] px-4 py-3 border-2 border-black text-black flex items-center justify-center gap-1.5"
                    style={{ background: t.accent, boxShadow: "4px 4px 0 #000" }}
                  >
                    Book <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
