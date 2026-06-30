import React from "react";
import { Flame, Truck, Heart, Sparkles } from "lucide-react";

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
      <div className="spray" style={{ background: "#e63ebd", width: 420, height: 420, top: "10%", right: "-120px", opacity: 0.25 }} />
      <div className="spray" style={{ background: "#3db8f2", width: 380, height: 380, bottom: "5%", left: "-120px", opacity: 0.2 }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Top: section heading */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#f26b2e]" />
              <p className="font-anton text-[#f26b2e] text-sm uppercase tracking-[0.3em]">
                Our Story
              </p>
            </div>
            <h2 className="font-anton text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9]">
              Built in
              <br />
              <span className="text-[#3db8f2]">Daventry.</span>
              <br />
              <span className="text-[#e63ebd]">Fed by you.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#bcbcbc] text-base sm:text-lg leading-relaxed">
            <p className="text-[#e8d2a4] text-xl sm:text-2xl font-body font-medium leading-snug">
              The Hungry Trailer is a small, independent mobile food van based at
              Casey's Pub, Daventry — serving honest, hand-made street food to a
              community that's never been shy about telling us when something tastes
              right.
            </p>
            <p>
              We specialise in the kind of jacket potatoes people drive across the
              Midlands for: soft, fluffy interiors loaded with slow-cooked toppings
              that don't cut corners. Pulled pork, homemade chilli, Hungarian goulash,
              fresh crepes off the plancha — everything cooked to order on the trailer.
            </p>
            <p>
              We also take the show on the road: festivals, weddings, private parties,
              corporate days. If you've got hungry people and somewhere to park us,
              we'll handle the rest.
            </p>
          </div>
        </div>

        {/* Big quote band */}
        <div className="relative my-16 py-12 border-y-2 border-[#2a2a2a]">
          <p className="font-anton text-[#e8d2a4] text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight text-center">
            <span className="text-[#e63ebd]">"</span>
            Come hungry. <span className="text-[#bcbcbc]">·</span> Leave happy.
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
              <div className="font-anton text-[#e8d2a4] text-3xl sm:text-4xl uppercase leading-none mb-2">
                {s.value}
              </div>
              <div className="text-xs text-[#a3a3a3] uppercase tracking-[0.18em] font-anton">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
