import React from "react";
import { Flame, MapPin, ArrowDown } from "lucide-react";
import { LOGO_URL } from "../../lib/content";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-28 pb-16 px-5 md:px-8 overflow-hidden flex items-center"
    >
      {/* Spray paint blobs */}
      <div className="spray" style={{ background: "#3db8f2", width: 500, height: 500, top: -150, left: -150 }} />
      <div className="spray" style={{ background: "#e63ebd", width: 460, height: 460, bottom: -180, right: -120 }} />
      <div className="spray" style={{ background: "#f26b2e", width: 360, height: 360, top: "40%", left: "55%" }} />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center z-10">
        {/* Left: Logo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative float-logo">
            <img
              src={LOGO_URL}
              alt="The Hungry Trailer"
              data-testid="hero-logo"
              className="w-[280px] sm:w-[360px] lg:w-[440px] h-auto select-none drop-shadow-[8px_8px_0_rgba(0,0,0,0.6)]"
              draggable="false"
            />
            <span className="absolute -top-4 -right-4 bg-[#f26b2e] text-black font-bungee text-xs uppercase px-3 py-1 border-2 border-black rotate-12 shadow-[3px_3px_0_#000]">
              Daventry, UK
            </span>
          </div>
        </div>

        {/* Right: Headline */}
        <div className="lg:col-span-7 relative">
          <p className="font-marker text-[#3db8f2] text-2xl md:text-3xl rotate-[-3deg] mb-3 inline-block">
            🔥 Fresh, Hot & Loaded
          </p>
          <h1
            data-testid="hero-headline"
            className="font-bungee uppercase tracking-tighter text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] drip-text"
          >
            Come Hungry.
            <br />
            <span className="text-[#e63ebd]">Leave</span>{" "}
            <span className="text-[#3db8f2]">Happy.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[#a3a3a3] text-base sm:text-lg leading-relaxed">
            Jacket potatoes, loaded fries, homemade crepes & Hungarian street food
            — slung from a mobile van by people who actually give a damn. Based at{" "}
            <span className="text-[#e8d2a4] font-semibold">Casey's Pub, Daventry</span>{" "}
            & rolling to events across the Midlands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              data-testid="hero-cta-menu"
              onClick={() => go("menu")}
              className="btn-pink"
            >
              <Flame size={18} /> See The Menu
            </button>
            <button
              data-testid="hero-cta-book"
              onClick={() => go("booking")}
              className="btn-blue"
            >
              <MapPin size={18} /> Book For Events
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-bungee uppercase tracking-wider text-[#a3a3a3]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3db8f2] animate-pulse" />
              Open Now
            </span>
            <span>100% Recommend · 16 Reviews</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => go("menu")}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-[#e8d2a4] flex-col items-center gap-1 hover:text-[#e63ebd] transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-marker text-sm">scroll for the goods</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
