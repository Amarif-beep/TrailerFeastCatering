import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Package, Home as HomeIcon, Zap, Ruler, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import MobileBookBar from "../components/MobileBookBar";
import Reveal from "../components/Reveal";
import { TRAILERS_BY_ID } from "../lib/trailers";

export default function VanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const van = TRAILERS_BY_ID[id];
  const [tab, setTab] = useState(van?.menuDetail?.[0]?.id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!van) {
    return (
      <div className="min-h-screen premium-bg flex flex-col items-center justify-center px-5">
        <Header />
        <p className="font-display text-[#f5f1e8] text-3xl uppercase mb-6">Van not found</p>
        <button onClick={() => navigate("/")} className="btn-gold-pro">Back Home</button>
      </div>
    );
  }

  const activeCat = van.menuDetail.find((c) => c.id === tab) || van.menuDetail[0];
  const SPECS = [
    { icon: Package, text: van.specs.selfContained },
    { icon: HomeIcon, text: van.specs.indoorOutdoor },
    { icon: Zap, text: van.specs.power },
    { icon: Ruler, text: van.specs.size },
  ];

  return (
    <div className="relative premium-bg">
      <Header />

      {/* HERO */}
      <section data-testid={`van-hero-${van.id}`} className="relative pt-28 pb-14 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs font-body text-[#8a8172] mb-8">
            <Link to="/" className="hover:text-[#c9a04e]">Home</Link>
            <span>/</span>
            <Link to="/#vans" className="hover:text-[#c9a04e]">Our Vans</Link>
            <span>/</span>
            <span className="text-[#c9a04e]">{van.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h1 className="font-display text-white text-4xl sm:text-5xl uppercase leading-[0.9] mb-4">{van.name}</h1>
              <div className="gold-rule mb-5" />
              <p className="text-[#cfc7b8] font-body leading-relaxed mb-6">{van.description}</p>
              <ul className="space-y-3">
                {SPECS.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#f5f1e8] font-body text-sm">
                    <s.icon size={18} className="text-[#c9a04e] shrink-0" /> {s.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden border border-[#322a20]">
                <img src={van.hero} alt={van.name} className="w-full h-[320px] sm:h-[440px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Reveal>
        <section data-testid={`van-gallery-${van.id}`} className="py-14 px-5 md:px-8 bg-[#14110c]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-white text-2xl uppercase tracking-wide text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {van.gallery.map((src, i) => (
                <div key={i} data-testid={`gallery-img-${i}`} className="rounded-md overflow-hidden border border-[#322a20] aspect-[4/3]">
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* MENU */}
      <Reveal>
        <section data-testid={`van-menu-${van.id}`} className="py-16 px-5 md:px-8 bg-[#0f0d0b]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-white text-2xl sm:text-3xl uppercase tracking-wide text-center mb-8">Menu</h2>

            <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-[#322a20] pb-4">
              {van.menuDetail.map((c) => (
                <button
                  key={c.id}
                  data-testid={`menu-tab-${c.id}`}
                  onClick={() => setTab(c.id)}
                  className={`font-display uppercase text-xs tracking-[0.14em] px-4 py-2 rounded transition-colors ${
                    c.id === tab ? "bg-[#c9a04e] text-[#17130d]" : "text-[#cfc7b8] hover:text-[#c9a04e]"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8" data-testid={`menu-items-${activeCat.id}`}>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                {activeCat.columns.map((col, ci) => (
                  <div key={ci}>
                    <h3 className="font-display text-[#c9a04e] text-sm uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#322a20]">{col.title}</h3>
                    <ul className="space-y-3">
                      {col.items.map((it, ii) => (
                        <li key={ii} className="flex items-baseline justify-between gap-3">
                          <span className="text-[#f5f1e8] font-body text-sm">{it.name}</span>
                          <span className="flex-1 border-b border-dotted border-[#3a3227] mx-2 translate-y-[-3px]" />
                          <span className="font-display text-[#c9a04e] text-sm">{it.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="relative rounded-lg overflow-hidden border border-[#322a20] min-h-[220px]">
                <img src={activeCat.sample.img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10">
                  <span className="font-display text-[#c9a04e] uppercase text-[10px] tracking-[0.2em] block mb-1">Sample</span>
                  <p className="font-display text-white uppercase text-sm leading-tight">{activeCat.sample.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ALLERGENS + INFO */}
      <Reveal>
        <section className="py-14 px-5 md:px-8 bg-[#14110c]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card-pro p-7">
              <h3 className="font-display text-[#f5f1e8] text-lg uppercase tracking-wide mb-3 flex items-center gap-2">
                <AlertCircle size={18} className="text-[#c9a04e]" /> Allergens
              </h3>
              <p className="text-[#b0a894] font-body text-sm leading-relaxed">{van.allergenNote}</p>
            </div>
            <div className="card-pro p-7">
              <h3 className="font-display text-[#f5f1e8] text-lg uppercase tracking-wide mb-3 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#c9a04e]" /> Information
              </h3>
              <ul className="space-y-2">
                {van.info.map((it, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#f5f1e8] font-body text-sm">
                    <CheckCircle2 size={15} className="text-[#c9a04e] shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* BOOK CTA */}
      <section className="py-12 px-5 md:px-8 bg-[#0f0d0b]">
        <div className="max-w-6xl mx-auto">
          <button
            data-testid="van-book-cta"
            onClick={() => navigate(`/book?van=${van.id}`)}
            className="btn-gold-pro w-full justify-center text-base py-4"
          >
            Check Availability & Book This Van
          </button>
        </div>
      </section>

      <Footer />
      <MobileBookBar />
    </div>
  );
}
