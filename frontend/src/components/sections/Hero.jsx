import React from "react";
import { Flame, MapPin, ArrowDown, Star } from "lucide-react";
import { LOGO_URL } from "../../lib/content";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-28 pb-20 px-5 md:px-8 overflow-hidden flex items-center"
    >
      {/* Spray paint blobs — softer, more refined */}
      <div className="spray" style={{ background: "#3db8f2", width: 520, height: 520, top: -180, left: -180, opacity: 0.35 }} />
      <div className="spray" style={{ background: "#e63ebd", width: 440, height: 440, bottom: -200, right: -140, opacity: 0.35 }} />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left: Logo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative float-logo">
            <img
              src={LOGO_URL}
              alt="The Hungry Trailer"
              data-testid="hero-logo"
              className="w-[280px] sm:w-[360px] lg:w-[440px] h-auto select-none drop-shadow-[6px_6px_0_rgba(0,0,0,0.55)]"
              draggable="false"
            />
          </div>
        </div>

        {/* Right: Headline */}
        <div className="lg:col-span-7 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#e63ebd]" />
            <p className="font-anton text-[#e63ebd] text-sm md:text-base uppercase tracking-[0.3em]">
              Daventry · Street Food
            </p>
          </div>

          <h1
            data-testid="hero-headline"
            className="font-anton uppercase tracking-tight text-[#e8d2a4] text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.88] drip-text"
          >
            Come Hungry.
            <br />
            <span className="text-[#e63ebd]">Leave</span>{" "}
            <span className="text-[#3db8f2]">Happy.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[#bcbcbc] text-base sm:text-lg leading-relaxed">
            Hand-crafted jacket potatoes, loaded fries, fresh crepes and Hungarian street food —
            slung from our mobile trailer in the heart of Daventry, and rolled out to events
            across the Midlands.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button data-testid="hero-cta-menu" onClick={() => go("menu")} className="btn-pink">
              <Flame size={18} /> See The Menu
            </button>
            <button data-testid="hero-cta-book" onClick={() => go("booking")} className="btn-ghost">
              <MapPin size={18} /> Book For Events
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <span className="flex items-center gap-2 font-anton uppercase tracking-[0.18em] text-[#e8d2a4]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3db8f2] animate-pulse" />
              Open Now
            </span>
            <span className="flex items-center gap-2 text-[#bcbcbc]">
              <span className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-[#f26b2e] text-[#f26b2e]" />
                ))}
              </span>
              <span className="font-anton uppercase tracking-[0.14em] text-[#e8d2a4]">
                100% Recommended · 16 Reviews
              </span>
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => go("menu")}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-[#a3a3a3] flex-col items-center gap-2 hover:text-[#e8d2a4] transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-anton text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
