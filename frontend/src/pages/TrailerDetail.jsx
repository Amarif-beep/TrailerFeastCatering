import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Zap, Users, Ruler, ShieldCheck, ArrowUpRight, MapPin } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Booking from "../components/sections/Booking";
import AvailabilityCalendar from "../components/AvailabilityCalendar";
import PaintSplatter from "../components/decor/PaintSplatter";
import { TRAILERS_BY_ID } from "../lib/trailers";

export default function TrailerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trailer = TRAILERS_BY_ID[id];
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!trailer) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-5">
        <Header />
        <p className="font-display text-[#e8d2a4] text-3xl uppercase mb-6">Trailer not found</p>
        <button onClick={() => navigate("/")} className="btn-pink">Back Home</button>
      </div>
    );
  }

  const isoDate = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  return (
    <div className="relative">
      <Header />
      <div className="noise-overlay" />

      {/* HERO */}
      <section
        data-testid={`trailer-hero-${trailer.id}`}
        className="relative pt-32 pb-16 px-5 md:px-8 overflow-hidden bg-[#050505]"
      >
        <PaintSplatter variant="splat1" color={trailer.accent} size={260} style={{ top: "10%", right: "5%" }} rotate={-15} opacity={0.5} />
        <PaintSplatter variant="drip" color="#3db8f2" size={160} style={{ bottom: "10%", left: "5%" }} rotate={10} opacity={0.4} />

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-[#e8d2a4] font-display uppercase text-xs tracking-[0.24em] mb-6"
              data-testid="back-home-link"
            >
              <ArrowLeft size={16} /> Back to fleet
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10" style={{ background: trailer.accent }} />
              <p className="font-display text-sm uppercase tracking-[0.32em]" style={{ color: trailer.accent }}>
                Trailer · {trailer.id}
              </p>
            </div>
            <h1 className="font-display text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.88] mb-4">
              {trailer.name}
            </h1>
            <p className="font-news text-[#bcbcbc] text-xl sm:text-2xl italic mb-6">
              {trailer.tagline}
            </p>
            <p className="text-[#bcbcbc] font-body text-base leading-relaxed max-w-2xl mb-8">
              {trailer.description}
            </p>
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-pink"
              data-testid={`hero-book-${trailer.id}`}
            >
              Book {trailer.name}
            </button>
          </div>
          <div className="lg:col-span-5">
            <div
              className="relative border-4 border-[#e8d2a4] overflow-hidden"
              style={{ boxShadow: `12px 12px 0 ${trailer.accent}`, transform: "rotate(-1deg)" }}
            >
              <img src={trailer.hero} alt={trailer.name} className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-20 px-5 md:px-8 bg-[#0a0a0a]" data-testid={`trailer-gallery-${trailer.id}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-[#3db8f2]" />
            <p className="font-display text-[#3db8f2] text-sm uppercase tracking-[0.32em]">Gallery</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trailer.gallery.map((src, i) => (
              <div
                key={i}
                data-testid={`gallery-img-${i}`}
                className="relative border-2 border-[#e8d2a4] overflow-hidden aspect-square"
                style={{
                  boxShadow: `6px 6px 0 ${trailer.accent}`,
                  transform: `rotate(${i % 2 === 0 ? "-0.5" : "0.5"}deg)`,
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SERVE + BEST FOR + SPECS */}
      <section className="relative py-20 px-5 md:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Menu */}
          <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] p-7">
            <h3 className="font-display text-[#e8d2a4] text-3xl uppercase mb-6" style={{ borderBottom: `2px solid ${trailer.accent}`, paddingBottom: "0.75rem" }}>
              What We Serve
            </h3>
            <ul className="space-y-3">
              {trailer.menu.map((m, i) => (
                <li key={i} className="flex gap-3 items-start text-[#e8d2a4] font-body text-base">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: trailer.accent }} />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Best For */}
          <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] p-7">
            <h3 className="font-display text-[#e8d2a4] text-3xl uppercase mb-6" style={{ borderBottom: `2px solid ${trailer.accent}`, paddingBottom: "0.75rem" }}>
              Best For
            </h3>
            <div className="flex flex-wrap gap-2">
              {trailer.bestFor.map((b, i) => (
                <span
                  key={i}
                  className="font-display uppercase text-xs tracking-[0.16em] px-3 py-2 border-2 border-black text-black"
                  style={{ background: trailer.accent, boxShadow: "3px 3px 0 #000" }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specs grid */}
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Ruler, label: "Setup size", value: trailer.setupSize },
            { icon: Zap, label: "Electricity", value: trailer.electricity },
            { icon: Users, label: "Capacity", value: trailer.servingCapacity },
            { icon: ShieldCheck, label: "Self-contained", value: trailer.selfContained ? "Yes — silent generator" : "Hook-up required" },
          ].map((s, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#2a2a2a] p-5">
              <s.icon size={20} className="text-[#3db8f2] mb-3" />
              <p className="font-display uppercase text-[10px] tracking-[0.22em] text-[#a3a3a3] mb-1">{s.label}</p>
              <p className="text-[#e8d2a4] font-body text-sm leading-snug">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="max-w-7xl mx-auto mt-10 bg-[#0a0a0a] border-2 border-[#e8d2a4] p-7" style={{ boxShadow: "8px 8px 0 #000" }}>
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck size={24} className="text-[#3db8f2]" />
            <h3 className="font-display text-[#e8d2a4] text-2xl uppercase tracking-wide">
              Insurance & Certificates
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {trailer.certificates.map((c, i) => (
              <div key={i} className="flex items-start gap-2 text-[#e8d2a4] font-body text-sm">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#3db8f2]" />
                {c}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#a3a3a3] italic mt-5 font-body">
            All documentation available on request as part of your booking.
          </p>
        </div>
      </section>

      {/* AVAILABILITY CALENDAR */}
      <section className="relative py-20 px-5 md:px-8 bg-[#0a0a0a]" id="availability">
        <PaintSplatter variant="splat2" color={trailer.accent} size={220} style={{ top: "5%", right: "10%" }} rotate={15} opacity={0.35} />
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10" style={{ background: trailer.accent }} />
              <p className="font-display text-sm uppercase tracking-[0.32em]" style={{ color: trailer.accent }}>
                Availability
              </p>
              <span className="h-px w-10" style={{ background: trailer.accent }} />
            </div>
            <h2 className="font-display text-[#e8d2a4] text-4xl sm:text-5xl uppercase leading-[0.9] mb-3">
              Check your <span className="underline-marker">date.</span>
            </h2>
            <p className="text-[#a3a3a3] font-body max-w-xl mx-auto">
              Booked dates are greyed out. Click any available day to pre-fill it in your enquiry below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <AvailabilityCalendar
              trailerId={trailer.id}
              accent={trailer.accent}
              onSelectDate={(d) => setSelectedDate(isoDate(d))}
            />

            <div className="bg-[#050505] border-2 border-[#2a2a2a] p-7 space-y-5">
              <h3 className="font-display text-[#e8d2a4] text-2xl uppercase tracking-wide">
                How Booking Works
              </h3>
              {[
                "Pick a date on the calendar and hit 'Request This Date'.",
                "Fill out the booking enquiry below — takes 2 minutes.",
                "We reply within 24 hours with a menu, quote and deposit info.",
                "Confirmed dates are locked to you — no double-bookings.",
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span
                    className="font-display text-2xl leading-none shrink-0 w-9 h-9 border-2 border-black flex items-center justify-center text-black"
                    style={{ background: trailer.accent, boxShadow: "3px 3px 0 #000" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[#bcbcbc] font-body pt-1.5 leading-relaxed">{step}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-[#2a2a2a] flex items-center gap-2 text-sm text-[#a3a3a3] font-body italic">
                <MapPin size={16} className="text-[#f26b2e]" />
                Live event schedule also on our Facebook page.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM (pre-filled with this trailer + selected date) */}
      <Booking defaultTrailerId={trailer.id} defaultDate={selectedDate} />

      <Footer />
    </div>
  );
}
