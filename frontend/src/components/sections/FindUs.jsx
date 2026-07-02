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
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="spray" style={{ background: "#3db8f2", width: 380, height: 380, top: "-100px", left: "10%", opacity: 0.18 }} />
      <PaintSplatter variant="splat1" color="#f26b2e" size={220} style={{ top: "5%", right: "5%" }} rotate={20} opacity={0.45} />
      <PaintSplatter variant="drip" color="#e63ebd" size={150} style={{ bottom: "25%", left: "3%" }} rotate={-10} opacity={0.5} />
      <PaintSplatter variant="splat2" color="#3db8f2" size={180} style={{ top: "50%", left: "48%" }} rotate={35} opacity={0.22} />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#f26b2e]" />
              <p className="font-display text-[#f26b2e] text-sm uppercase tracking-[0.32em]">
                Find Us
              </p>
            </div>
            <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              Park up.
              <br />
              <span className="text-gold underline-marker underline-marker-orange">Order up.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm text-base leading-relaxed font-body">
            Casey's Pub in Daventry six days a week — and rolling out across the Midlands for events.
          </p>
        </div>

        {/* PROMINENT FACEBOOK LIVE-LOCATIONS BANNER */}
        <a
          href={SOCIALS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="facebook-live-banner"
          className="group relative block bg-gradient-to-br from-[#1877f2]/15 via-[#0a0a0a] to-[#e63ebd]/15 border-2 border-[#3db8f2] p-6 sm:p-8 mb-10 transition-transform hover:-translate-y-1"
          style={{ boxShadow: "10px 10px 0 #000" }}
        >
          <PaintSplatter variant="splat2" color="#3db8f2" size={180} style={{ top: -40, right: 20 }} rotate={15} opacity={0.35} />
          <PaintSplatter variant="drip" color="#e63ebd" size={120} style={{ bottom: -30, left: "30%" }} rotate={-15} opacity={0.4} />

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
                className="w-full h-[360px] grayscale-[0.5] contrast-110"
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

        {/* Events callout w/ trailer photo */}
        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 relative border-2 border-[#e8d2a4] overflow-hidden" style={{ boxShadow: "10px 10px 0 #000" }}>
            <img
              src={IMAGES.trailerRear}
              alt="The Hungry Trailer ready for events — Events, Bookings graffiti"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute top-4 left-4 bg-[#e63ebd] text-black border-2 border-black px-3 py-1.5 font-display uppercase text-xs tracking-[0.18em]" style={{ boxShadow: "3px 3px 0 #000" }}>
              Bookings Open
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#050505] border-2 border-[#2a2a2a] p-7 flex flex-col justify-center">
            <Calendar size={28} className="text-[#f26b2e] mb-4" />
            <h3 className="font-display text-[#e8d2a4] text-2xl sm:text-3xl uppercase leading-[0.95] mb-3">
              Catch us at <span className="text-[#3db8f2] underline-marker underline-marker-blue">events</span>
            </h3>
            <p className="text-[#bcbcbc] font-body leading-relaxed mb-5">
              From Heart of the Shires Shopping Village to local markets, festivals and private bookings —
              we travel. The full list is always live on Facebook.
            </p>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue self-start text-sm"
              data-testid="events-facebook-cta"
            >
              <Facebook size={16} /> See Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
