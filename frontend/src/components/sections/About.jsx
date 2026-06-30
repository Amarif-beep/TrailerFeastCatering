import React from "react";
import { Flame, Truck, Heart } from "lucide-react";
import { IMAGES } from "../../lib/content";

const STATS = [
  { icon: Flame, label: "Fresh Daily", value: "100%" },
  { icon: Truck, label: "Mobile Van", value: "ON TOUR" },
  { icon: Heart, label: "Recommend", value: "100%" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#121212] overflow-hidden"
    >
      <div className="spray" style={{ background: "#e63ebd", width: 400, height: 400, top: "10%", right: "-100px" }} />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: overlapping polaroid images */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[500px]">
          <div
            className="absolute top-0 left-0 w-[60%] bg-[#e8d2a4] p-2 pb-6 border-2 border-black"
            style={{ transform: "rotate(-5deg)", boxShadow: "10px 10px 0 #3db8f2" }}
          >
            <img
              src={IMAGES.truck}
              alt="The Hungry Trailer van"
              className="w-full h-[220px] sm:h-[260px] object-cover"
            />
            <p className="font-marker text-black text-center mt-2 text-sm">our home base</p>
          </div>
          <div
            className="absolute bottom-0 right-0 w-[60%] bg-[#e8d2a4] p-2 pb-6 border-2 border-black"
            style={{ transform: "rotate(4deg)", boxShadow: "-10px 10px 0 #e63ebd" }}
          >
            <img
              src={IMAGES.festival}
              alt="At a festival"
              className="w-full h-[220px] sm:h-[260px] object-cover"
            />
            <p className="font-marker text-black text-center mt-2 text-sm">events & festivals 🤘</p>
          </div>
          <div
            className="absolute top-[40%] left-[35%] bg-[#f26b2e] text-black font-bungee uppercase text-xs px-3 py-2 border-2 border-black"
            style={{ transform: "rotate(-8deg)", boxShadow: "4px 4px 0 #000" }}
          >
            ★ Since Day 1
          </div>
        </div>

        {/* Right: copy */}
        <div className="lg:col-span-6 relative">
          <p className="font-marker text-[#f26b2e] text-2xl rotate-[-2deg] mb-3">our story</p>
          <h2 className="font-bungee text-[#e8d2a4] text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-6">
            Built in <span className="text-[#3db8f2]">Daventry</span>,<br />
            <span className="text-[#e63ebd]">fed</span> by you.
          </h2>
          <div className="space-y-4 text-[#a3a3a3] text-base leading-relaxed">
            <p>
              The Hungry Trailer is a small mobile food van slinging proper street food from{" "}
              <span className="text-[#e8d2a4] font-semibold">Casey's Pub in Daventry</span>. We
              specialise in the spuds people drive across the Midlands for — soft, fluffy, and
              loaded with toppings that don't mess around.
            </p>
            <p>
              Pulled pork, slow-cooked chilli, Hungarian goulash, fresh crepes off the plancha
              — all cooked fresh, with ingredients we'd serve our own families. We also roll
              out to festivals, weddings, private parties and corporate events across the UK.
            </p>
            <p className="font-marker text-[#e8d2a4] text-xl">
              Come hungry. Leave happy. That's the deal.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                data-testid={`stat-${i}`}
                className="bg-[#050505] border-2 border-[#2a2a2a] p-4 text-center"
              >
                <s.icon size={22} className="mx-auto mb-2 text-[#e63ebd]" />
                <div className="font-bungee text-[#e8d2a4] text-base sm:text-lg">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-[#a3a3a3] uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
