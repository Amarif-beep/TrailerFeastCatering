import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Calendar, ArrowUpRight } from "lucide-react";
import { CONTACT, IMAGES, SOCIALS } from "../../lib/content";
import PaintSplatter from "../decor/PaintSplatter";

const HOURS = [
  { day: "Mon", time: "Closed" },
  { day: "Tue", time: "11:30 – 19:00" },
  { day: "Wed", time: "11:30 – 19:00" },
  { day: "Thu", time: "11:30 – 19:00" },
  { day: "Fri", time: "11:30 – 21:00" },
  { day: "Sat", time: "12:00 – 21:00" },
  { day: "Sun", time: "12:00 – 17:00" },
];

export default function FindUs() {
  return (
    <section
      id="find-us"
      data-testid="find-us-section"
      className="relative py-14 md:py-20 px-5 md:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="spray" style={{ background: "#3db8f2", width: 320, height: 320, top: "-100px", left: "10%", opacity: 0.15 }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#f26b2e]" />
              <p className="font-display text-[#f26b2e] text-xs uppercase tracking-[0.3em]">
                Find Us
              </p>
            </div>
            <h2 className="font-display text-white text-3xl sm:text-4xl uppercase leading-none">
              Park up. <span className="text-gold underline-marker underline-marker-orange">Order up.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-xs text-sm leading-relaxed font-body">
            Casey's Pub, Daventry — six days a week, plus events across the Midlands.
          </p>
        </div>

        {/* FACEBOOK LIVE-LOCATIONS BANNER */}
        <a
          href={SOCIALS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="facebook-live-banner"
          className="group relative block bg-gradient-to-br from-[#1877f2]/15 via-[#0a0a0a] to-[#e63ebd]/15 border-2 border-[#3db8f2] p-5 sm:p-6 mb-8 transition-transform hover:-translate-y-1"
          style={{ boxShadow: "6px 6px 0 #000" }}
        >
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1877f2] border-2 border-black flex items-center justify-center shrink-0" style={{ boxShadow: "5px 5px 0 #000" }}>
              <Facebook size={36} className="text-white" fill="white" />
            </div>
            <div className="flex-1">
              <p className="font-display text-[#3db8f2] text-xs uppercase tracking-[0.32em] mb-2">
                Live · Updated daily
              </p>
              <h3 className="font-display text-[#e8d2a4] text-2xl sm:text-3xl lg:text-4xl uppercase leading-[0.95] mb-2">
                Daily locations &amp; <span className="text-[#e63ebd] underline-marker">events</span> on Facebook
              </h3>
              <p className="text-[#bcbcbc] font-body text-sm sm:text-base leading-relaxed max-w-2xl">
                Where the trailer's parked, what events we're at, new specials, opening times —
                everything fresh goes on our Facebook page. Give us a follow so you never miss us.
              </p>
            </div>
            <div className="shrink-0 self-start md:self-center font-display uppercase text-sm tracking-[0.16em] text-[#e8d2a4] group-hover:text-[#e63ebd] transition-colors flex items-center gap-2">
              Follow <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </a>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative border-2 border-[#e8d2a4] overflow-hidden" style={{ boxShadow: "8px 8px 0 #000" }}>
              <iframe
                data-testid="location-map"
                title="The Hungry Trailer location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.180%2C52.250%2C-1.140%2C52.270&layer=mapnik&marker=52.2587%2C-1.1597"
                className="w-full h-[280px] grayscale-[0.5] contrast-110"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                data-testid="open-in-maps-link"
                href="https://www.google.com/maps/search/?api=1&query=Casey%27s+Pub+Daventry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cream text-sm"
              >
                Open in Maps →
              </a>
              <p className="font-news text-[#bcbcbc] text-base italic">
                Casey's Pub, Daventry — easy to spot, easier to eat at.
              </p>
            </div>
          </div>

          {/* Contact / Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#050505] border border-[#2a2a2a] p-7 relative">
              <h3 className="font-display text-[#e63ebd] text-lg uppercase tracking-[0.22em] mb-5">
                Get in Touch
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#3db8f2] mt-0.5 shrink-0" />
                  <span data-testid="contact-location" className="text-[#e8d2a4] text-base font-body">
                    {CONTACT.location}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#3db8f2] shrink-0" />
                  <a
                    data-testid="contact-phone"
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="text-[#e8d2a4] hover:text-[#e63ebd] transition-colors text-base font-body"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[#3db8f2] shrink-0" />
                  <a
                    data-testid="contact-email"
                    href={`mailto:${CONTACT.email}`}
                    className="text-[#e8d2a4] hover:text-[#e63ebd] transition-colors text-base break-all font-body"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-6 pt-6 border-t border-[#2a2a2a]">
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 bg-[#e63ebd] text-black border border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 bg-[#3db8f2] text-black border border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="bg-[#050505] border border-[#2a2a2a] p-7">
              <h3 className="font-display text-[#3db8f2] text-lg uppercase tracking-[0.22em] mb-5 flex items-center gap-2">
                <Clock size={18} /> Opening Hours
              </h3>
              <ul className="space-y-2.5">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm py-1">
                    <span className="font-display text-[#e8d2a4] uppercase tracking-[0.16em]">
                      {h.day}
                    </span>
                    <span
                      className={`font-body ${
                        h.time === "Closed" ? "text-[#666]" : "text-[#e8d2a4]"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#a3a3a3] mt-5 italic font-body">
                Event days vary — check Facebook before you set off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
