import React from "react";
import { CalendarCheck, Truck, Star } from "lucide-react";
import { LOGO_URL, IMAGES } from "../../lib/content";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-28 pb-14 px-5 md:px-8 overflow-hidden"
    >
      <div className="spray" style={{ background: "#3db8f2", width: 400, height: 400, top: -160, left: -160, opacity: 0.25 }} />
      <div className="spray" style={{ background: "#e63ebd", width: 360, height: 360, bottom: -160, right: -120, opacity: 0.25 }} />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center z-10">
        {/* Left: logo + tagline */}
        <div className="lg:col-span-7">
          <img
            src={LOGO_URL}
            alt="The Hungry Trailer"
            data-testid="hero-logo"
            className="w-[180px] sm:w-[220px] h-auto mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
            draggable="false"
          />
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#e63ebd]" />
            <p className="font-display text-[#e63ebd] text-xs uppercase tracking-[0.3em]">
              Mobile Street Food · Book Your Date
            </p>
          </div>
          <h1
            data-testid="hero-headline"
            className="font-display uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tight"
          >
            Street food
            <br />
            <span className="font-news lowercase normal-case text-[#bcbcbc] text-3xl sm:text-4xl lg:text-5xl">done</span>{" "}
            <span className="text-gold underline-marker">right</span>.
          </h1>
          <p className="mt-5 max-w-lg text-[#dcdcdc] text-base leading-relaxed font-body">
            Three mobile trailers serving events, festivals, weddings and private bookings
            across the Midlands. Fully insured, fully self-contained.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button data-testid="hero-cta-book" onClick={() => go("booking")} className="btn-gold">
              <CalendarCheck size={18} /> Book Your Event
            </button>
            <button data-testid="hero-cta-trailers" onClick={() => go("trailers")} className="btn-ghost">
              <Truck size={18} /> View Trailers
            </button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2 font-display uppercase tracking-[0.16em] text-white text-xs">
              <span className="w-2 h-2 rounded-full bg-[#3db8f2] animate-pulse" />
              Taking 2026 Bookings
            </span>
            <span className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} className="fill-[var(--gold)] text-[var(--gold)]" />
              ))}
              <span className="font-display uppercase tracking-[0.14em] text-white text-xs ml-1">100% Recommended</span>
            </span>
          </div>
        </div>

        {/* Right: single clean photo */}
        <div className="lg:col-span-5">
          <div
            className="relative border-2 border-[var(--gold)] overflow-hidden"
            style={{ boxShadow: "8px 8px 0 #000", transform: "rotate(-1deg)" }}
          >
            <img
              src={IMAGES.trailerCloseup}
              alt="The Hungry Trailer"
              className="w-full h-[280px] sm:h-[340px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
