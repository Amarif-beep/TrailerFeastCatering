import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Truck, Settings, UtensilsCrossed, Home as HomeIcon, CheckCircle2, CalendarDays, ArrowRight, Star, Lock } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import MobileBookBar from "../components/MobileBookBar";
import Reveal from "../components/Reveal";
import { TRAILERS, COMING_SOON, WHY_BOOK } from "../lib/trailers";
import { IMAGES, REVIEWS } from "../lib/content";

const ICONS = { settings: Settings, utensils: UtensilsCrossed, home: HomeIcon, check: CheckCircle2 };

export default function Home() {
  const navigate = useNavigate();

  return (
    <div data-testid="home-page" className="relative premium-bg">
      <Header />

      {/* HERO */}
      <section id="hero" data-testid="hero-section" className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.trailerRearSun} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0b] via-[#0f0d0b]/85 to-[#0f0d0b]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full">
          <div className="max-w-2xl">
            <div className="gold-rule mb-6" />
            <h1 data-testid="hero-headline" className="font-display uppercase text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
              Street Food
              <br />
              <span className="text-gold-solid">Done Right.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[#cfc7b8] text-base sm:text-lg leading-relaxed font-body">
              Two unique food vans. Premium street food. Available for events, festivals,
              corporate catering and private hire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button data-testid="hero-cta-vans" onClick={() => document.getElementById("vans")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold-pro">
                <Truck size={18} /> View Our Vans
              </button>
              <Link to="/book" className="btn-outline-gold" data-testid="hero-cta-book">
                <CalendarDays size={18} /> Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VANS */}
      <section id="vans" data-testid="vans-section" className="relative py-16 md:py-24 px-5 md:px-8 panel-cream">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#c9a04e]" />
              <h2 className="font-display text-[#1a1611] text-3xl sm:text-4xl uppercase tracking-wide">Our Vans</h2>
              <span className="h-px w-8 bg-[#c9a04e]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TRAILERS.map((t, i) => (
              <div key={t.id} data-testid={`van-card-${t.id}`} className="bg-white border border-[#e2dccd] rounded-lg overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={t.cardImg} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-display text-[#1a1611] text-2xl uppercase mb-3">{t.name}</h3>
                  <p className="text-[#6a6355] font-body text-sm leading-relaxed mb-6 flex-1">{t.tagline}</p>
                  <Link to={`/vans/${t.id}`} data-testid={`view-van-${t.id}`} className="btn-gold-pro justify-center text-xs">
                    View Van <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Coming soon */}
            <div data-testid="van-card-coming-soon" className="relative bg-[#1a1611] border border-[#322a20] rounded-lg overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden relative bg-black">
                  <img src={COMING_SOON.cardImg} alt={COMING_SOON.name} className="w-full h-full object-contain" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2">
                    <span className="font-display uppercase text-[#c9a04e] text-xs tracking-[0.2em] bg-black/70 border border-[#c9a04e] px-3 py-1 rounded">Coming Soon</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-display text-[#f5f1e8] text-2xl uppercase mb-3">{COMING_SOON.name}</h3>
                  <p className="text-[#b0a894] font-body text-sm leading-relaxed mb-6 flex-1">{COMING_SOON.tagline}</p>
                  <span className="inline-flex items-center justify-center gap-2 font-display uppercase text-xs tracking-[0.14em] text-[#8a8172] border border-[#322a20] rounded px-4 py-3">
                    <Lock size={14} /> Not Yet Available
                  </span>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK WITH US */}
      <section data-testid="why-book-section" className="relative py-16 md:py-24 px-5 md:px-8 bg-[#0f0d0b]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a04e]" />
              <h2 className="font-display text-white text-3xl sm:text-4xl uppercase tracking-wide">Why Book With Us?</h2>
              <span className="h-px w-8 bg-[#c9a04e]" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_BOOK.map((w, i) => {
              const Ic = ICONS[w.icon] || Settings;
              return (
                <Reveal key={i} delay={i * 90}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#c9a04e]/40 flex items-center justify-center">
                      <Ic size={26} className="text-[#c9a04e]" />
                    </div>
                    <h3 className="font-display text-[#f5f1e8] text-lg uppercase tracking-wide mb-2">{w.title}</h3>
                    <p className="text-[#b0a894] font-body text-sm leading-relaxed">{w.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS strip */}
      <section id="reviews" data-testid="reviews-section" className="relative py-14 md:py-20 px-5 md:px-8 bg-[#14110c]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex items-center justify-center gap-2 mb-8">
            {[1,2,3,4,5].map((i)=>(<Star key={i} size={18} className="fill-[#c9a04e] text-[#c9a04e]" />))}
            <span className="font-display text-[#f5f1e8] text-sm uppercase tracking-[0.16em] ml-2">100% Recommended · 16 Reviews</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0,3).map((r,i)=>(
              <Reveal key={i} delay={i*90}>
                <div data-testid={`review-card-${i}`} className="card-pro p-6 h-full">
                  <p className="font-body text-[#cfc7b8] text-sm leading-relaxed mb-4">"{r.quote}"</p>
                  <div className="font-display text-[#c9a04e] text-sm uppercase tracking-wider">{r.name}</div>
                  <div className="text-xs text-[#8a8172]">{r.date}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHECK AVAILABILITY banner */}
      <section data-testid="check-availability-banner" className="relative py-14 md:py-16 px-5 md:px-8" style={{ background: "linear-gradient(180deg,#dcb467,#c9a04e)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <CalendarDays size={48} className="text-[#17130d] shrink-0" />
          <div className="flex-1">
            <h2 className="font-display text-[#17130d] text-2xl sm:text-3xl uppercase leading-tight">Check Availability</h2>
            <p className="text-[#3a2f1a] font-body mt-1">View our live availability calendar and book the perfect van for your event.</p>
          </div>
          <button data-testid="banner-check-btn" onClick={() => navigate("/book")} className="shrink-0 bg-[#17130d] text-[#f5f1e8] font-display uppercase text-sm tracking-[0.14em] px-6 py-3 rounded hover:bg-black transition-colors">
            Check Availability
          </button>
        </div>
      </section>

      <Footer />
      <MobileBookBar />
    </div>
  );
}
