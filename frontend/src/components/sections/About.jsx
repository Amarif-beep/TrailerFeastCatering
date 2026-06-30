import React from "react";
import { Flame, Truck, Heart, Sparkles } from "lucide-react";
import { IMAGES } from "../../lib/content";
import PaintSplatter from "../decor/PaintSplatter";

const STATS = [
  { icon: Flame, label: "Cooked Fresh", value: "100%" },
  { icon: Truck, label: "Mobile Trailer", value: "On Tour" },
  { icon: Heart, label: "Customer Score", value: "5.0" },
  { icon: Sparkles, label: "Reviews", value: "16+" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="spray" style={{ background: "#e63ebd", width: 420, height: 420, top: "10%", right: "-120px", opacity: 0.22 }} />
      <div className="spray" style={{ background: "#3db8f2", width: 380, height: 380, bottom: "5%", left: "-120px", opacity: 0.18 }} />

      <PaintSplatter variant="splat1" color="#f26b2e" size={240} style={{ top: "3%", left: "8%" }} rotate={-25} opacity={0.4} />
      <PaintSplatter variant="drip" color="#3db8f2" size={170} style={{ top: "45%", right: "4%" }} rotate={20} opacity={0.5} />
      <PaintSplatter variant="brush" color="#e63ebd" size={280} style={{ bottom: "8%", right: "12%" }} rotate={15} opacity={0.18} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#f26b2e]" />
              <p className="font-display text-[#f26b2e] text-sm uppercase tracking-[0.32em]">
                Our Story
              </p>
            </div>
            <h2 className="font-display text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              Built in
              <br />
              <span className="text-[#3db8f2] underline-marker underline-marker-blue">Daventry.</span>
              <br />
              <span className="font-news lowercase normal-case text-[#bcbcbc] text-4xl sm:text-5xl lg:text-6xl">Fed by you.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#bcbcbc] text-base sm:text-lg leading-relaxed font-body">
            <p className="text-[#e8d2a4] text-xl sm:text-2xl leading-snug font-news italic">
              The Hungry Trailer is a small, independent mobile food van based at
              Casey's Pub, Daventry — serving honest, hand-made street food to a
              community that's never been shy about telling us when something tastes right.
            </p>
            <p>
              We specialise in jacket potatoes people drive across the
              Midlands for: soft, fluffy interiors loaded with slow-cooked toppings
              that don't cut corners. Pulled pork, homemade chilli, smash burgers,
              Hungarian goulash, fresh crepes — everything cooked to order on the trailer.
            </p>
            <p>
              We also take the show on the road: festivals, weddings, private parties,
              corporate days. If you've got hungry people and somewhere to park us,
              we'll handle the rest.
            </p>
          </div>
        </div>

        {/* Photo collage */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div
            className="lg:col-span-7 relative border-2 border-[#e8d2a4]"
            style={{ boxShadow: "10px 10px 0 #000", transform: "rotate(-0.8deg)" }}
          >
            <img
              src={IMAGES.trailerStreet}
              alt="The trailer at a Daventry market"
              className="w-full h-[300px] sm:h-[420px] object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm border border-[#e8d2a4] px-3 py-1.5 font-display uppercase text-xs text-[#e8d2a4] tracking-[0.18em]">
              On location · Daventry
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-rows-2 gap-6">
            <div
              className="relative border-2 border-[#e8d2a4] overflow-hidden"
              style={{ boxShadow: "8px 8px 0 #e63ebd", transform: "rotate(1.5deg)" }}
            >
              <img
                src={IMAGES.trailerAngled}
                alt="The trailer ready for an event"
                className="w-full h-full object-cover min-h-[180px]"
              />
            </div>
            <div
              className="relative border-2 border-[#e8d2a4] overflow-hidden"
              style={{ boxShadow: "8px 8px 0 #3db8f2", transform: "rotate(-1.2deg)" }}
            >
              <img
                src={IMAGES.jacketPotato}
                alt="A fresh jacket potato"
                className="w-full h-full object-cover min-h-[180px]"
              />
            </div>
          </div>
        </div>

        {/* Quote band */}
        <div className="relative py-12 border-y-2 border-[#2a2a2a] mb-16">
          <p className="font-display text-[#e8d2a4] text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight text-center">
            <span className="text-[#e63ebd]">"</span>
            Come <span className="underline-marker">hungry.</span>
            <span className="text-[#bcbcbc] mx-3">·</span>
            Leave <span className="underline-marker underline-marker-blue">happy.</span>
            <span className="text-[#e63ebd]">"</span>
          </p>
          <p className="font-marker text-center text-[#a3a3a3] text-base mt-4 rotate-[-1deg]">
            — the only promise we make
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              data-testid={`stat-${i}`}
              className="bg-[#050505] border border-[#2a2a2a] p-6 hover:border-[#e63ebd] transition-colors"
            >
              <s.icon size={22} className="text-[#e63ebd] mb-4" />
              <div className="font-display text-[#e8d2a4] text-3xl sm:text-4xl uppercase leading-none mb-2">
                {s.value}
              </div>
              <div className="text-xs text-[#a3a3a3] uppercase tracking-[0.2em] font-display">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
