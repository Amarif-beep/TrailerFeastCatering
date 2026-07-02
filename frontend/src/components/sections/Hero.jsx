import React from "react";
import { CalendarCheck, Truck, ArrowDown, Star } from "lucide-react";
import { LOGO_URL, IMAGES } from "../../lib/content";
import PaintSplatter from "../decor/PaintSplatter";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-28 pb-16 px-5 md:px-8 overflow-hidden flex items-center"
    >
      <div className="spray" style={{ background: "#3db8f2", width: 520, height: 520, top: -180, left: -180, opacity: 0.3 }} />
      <div className="spray" style={{ background: "#e63ebd", width: 440, height: 440, bottom: -200, right: -140, opacity: 0.3 }} />

      <PaintSplatter variant="splat1" color="#e63ebd" size={260} style={{ top: "8%", right: "8%" }} rotate={-15} opacity={0.55} />
      <PaintSplatter variant="splat2" color="#3db8f2" size={200} style={{ top: "55%", left: "2%" }} rotate={25} opacity={0.45} />
      <PaintSplatter variant="drip" color="#f26b2e" size={140} style={{ top: "20%", left: "44%" }} rotate={-8} opacity={0.7} />
      <PaintSplatter variant="brush" color="#e8d2a4" size={300} style={{ bottom: "8%", right: "20%" }} rotate={-30} opacity={0.18} />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center z-10">
        {/* Left: Logo + dual photo collage */}
        <div className="lg:col-span-5 relative">
          <div className="relative">
            <img
              src={LOGO_URL}
              alt="The Hungry Trailer"
              data-testid="hero-logo"
              className="relative z-10 w-[240px] sm:w-[300px] lg:w-[380px] h-auto select-none drop-shadow-[6px_6px_0_rgba(0,0,0,0.55)] float-logo mx-auto lg:mx-0"
              draggable="false"
            />
            <div
              className="hidden lg:block absolute -top-4 -left-6 bg-[#e63ebd] text-black font-display uppercase text-xs px-3 py-1.5 border-2 border-black z-20"
              style={{ transform: "rotate(-6deg)", boxShadow: "3px 3px 0 #000", letterSpacing: "0.08em", fontWeight: 900 }}
            >
              Fleet · 3 Trailers
            </div>

            <div
              className="hidden lg:block absolute -bottom-16 -right-4 w-[300px] h-[220px] border-2 border-[#e8d2a4] overflow-hidden z-20"
              style={{ transform: "rotate(5deg)", boxShadow: "10px 10px 0 #e63ebd" }}
            >
              <img
                src={IMAGES.smashBurgerGrill}
                alt="A signature smash burger fresh off the grill"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#3db8f2] text-black border-2 border-black px-2 py-0.5 font-display uppercase text-[10px] tracking-[0.18em]">
                Smash · £7.50
              </div>
            </div>

            <div
              className="hidden lg:block absolute -bottom-8 -left-10 w-[200px] h-[150px] border-2 border-[#e8d2a4] overflow-hidden z-10"
              style={{ transform: "rotate(-7deg)", boxShadow: "8px 8px 0 #3db8f2" }}
            >
              <img
                src={IMAGES.trailerStreet}
                alt="The trailer at a market"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:hidden mt-6 border-2 border-[#e8d2a4] overflow-hidden mx-auto max-w-md" style={{ boxShadow: "8px 8px 0 #e63ebd" }}>
              <img src={IMAGES.smashBurgerGrill} alt="Smash burger" className="w-full h-[200px] object-cover" />
            </div>
          </div>
        </div>

        {/* Right: Headline */}
        <div className="lg:col-span-7 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#e63ebd]" />
            <p className="font-display text-[#e63ebd] text-sm md:text-base uppercase tracking-[0.32em]">
              Mobile Street Food · Book Your Date
            </p>
          </div>

          <h1
            data-testid="hero-headline"
            className="font-display uppercase text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] tracking-tight"
          >
            Street food
            <br />
            <span className="font-news lowercase normal-case text-[#bcbcbc] text-4xl sm:text-5xl lg:text-6xl">done</span>{" "}
            <span className="underline-marker">right</span>.
          </h1>

          <p className="mt-6 max-w-xl text-[#bcbcbc] text-base sm:text-lg leading-relaxed font-body">
            Three mobile trailers serving <span className="text-[#e8d2a4] font-medium">events, festivals,
            weddings and private bookings</span> across the Midlands. Fully insured, fully
            self-contained, and built to draw a queue.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button data-testid="hero-cta-book" onClick={() => go("booking")} className="btn-pink">
              <CalendarCheck size={18} /> Book Us For Your Event
            </button>
            <button data-testid="hero-cta-trailers" onClick={() => go("trailers")} className="btn-ghost">
              <Truck size={18} /> View Our Trailers
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <span className="flex items-center gap-2 font-display uppercase tracking-[0.18em] text-[#e8d2a4]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3db8f2] animate-pulse" />
              Now Taking 2026 Bookings
            </span>
            <span className="flex items-center gap-2 text-[#bcbcbc]">
              <span className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-[#f26b2e] text-[#f26b2e]" />
                ))}
              </span>
              <span className="font-display uppercase tracking-[0.16em] text-[#e8d2a4]">
                100% Recommended
              </span>
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => go("trailers")}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-[#a3a3a3] flex-col items-center gap-2 hover:text-[#e8d2a4] transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="font-display text-xs uppercase tracking-[0.32em]">See The Fleet</span>
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
