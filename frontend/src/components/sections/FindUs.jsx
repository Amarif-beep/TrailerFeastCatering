import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { CONTACT, SOCIALS } from "../../lib/content";

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
      className="relative py-16 md:py-24 px-5 md:px-8 bg-[#f5f2ec]"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#f26b2e]" />
              <p className="font-display text-[#f26b2e] text-xs uppercase tracking-[0.3em]">Find Us</p>
            </div>
            <h2 className="font-display text-[#0f0f0f] text-3xl sm:text-4xl uppercase leading-none">
              Park up. <span className="ul-orange">Order up.</span>
            </h2>
          </div>
          <p className="text-[#555] max-w-xs text-sm leading-relaxed font-body">
            Casey's Pub, Daventry — six days a week, plus events across the Midlands.
          </p>
        </div>

        {/* Facebook live-locations banner */}
        <a
          href={SOCIALS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="facebook-live-banner"
          className="group relative block bg-white border-2 border-[#1877f2] p-5 sm:p-6 mb-8 transition-transform hover:-translate-y-1"
          style={{ boxShadow: "6px 6px 0 #1877f2" }}
        >
          <div className="relative flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1877f2] border-2 border-[#0f0f0f] flex items-center justify-center shrink-0">
              <Facebook size={30} className="text-white" fill="white" />
            </div>
            <div className="flex-1">
              <p className="font-display text-[#1877f2] text-xs uppercase tracking-[0.3em] mb-1">
                Live · Updated daily
              </p>
              <h3 className="font-display text-[#0f0f0f] text-xl sm:text-2xl uppercase leading-tight mb-1">
                Daily locations &amp; <span className="ul-pink">events</span> on Facebook
              </h3>
              <p className="text-[#555] font-body text-sm leading-relaxed">
                Where we're parked, what events we're at, new specials — it all goes on our Facebook. Give us a follow.
              </p>
            </div>
            <div className="shrink-0 self-start md:self-center font-display uppercase text-sm tracking-[0.16em] text-[#0f0f0f] group-hover:text-[#1877f2] transition-colors flex items-center gap-2">
              Follow <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </a>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Map */}
          <div className="lg:col-span-7 space-y-5">
            <div className="relative border-2 border-[#0f0f0f] overflow-hidden">
              <iframe
                data-testid="location-map"
                title="The Hungry Trailer location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.180%2C52.250%2C-1.140%2C52.270&layer=mapnik&marker=52.2587%2C-1.1597"
                className="w-full h-[280px]"
                loading="lazy"
              />
            </div>
            <a
              data-testid="open-in-maps-link"
              href="https://www.google.com/maps/search/?api=1&query=Casey%27s+Pub+Daventry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark text-sm"
            >
              Open in Maps →
            </a>
          </div>

          {/* Contact + hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-light p-6" style={{ boxShadow: "5px 5px 0 #e63ebd" }}>
              <h3 className="font-display text-[#0f0f0f] text-lg uppercase tracking-[0.2em] mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#e63ebd] mt-0.5 shrink-0" />
                  <span data-testid="contact-location" className="text-[#0f0f0f] text-sm font-body">{CONTACT.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#e63ebd] shrink-0" />
                  <a data-testid="contact-phone" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-[#0f0f0f] hover:text-[#e63ebd] transition-colors text-sm font-body">{CONTACT.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#e63ebd] shrink-0" />
                  <a data-testid="contact-email" href={`mailto:${CONTACT.email}`} className="text-[#0f0f0f] hover:text-[#e63ebd] transition-colors text-sm break-all font-body">{CONTACT.email}</a>
                </li>
              </ul>
              <div className="flex gap-3 mt-5 pt-5 border-t border-[#e2ddd3]">
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-[#e63ebd] text-white border-2 border-[#0f0f0f] hover:-translate-y-0.5 transition-transform">
                  <Instagram size={18} />
                </a>
                <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 bg-[#1877f2] text-white border-2 border-[#0f0f0f] hover:-translate-y-0.5 transition-transform">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="card-light p-6" style={{ boxShadow: "5px 5px 0 #1f8fd0" }}>
              <h3 className="font-display text-[#0f0f0f] text-lg uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Clock size={18} className="text-[#1f8fd0]" /> Opening Hours
              </h3>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm py-0.5">
                    <span className="font-display text-[#0f0f0f] uppercase tracking-[0.16em]">{h.day}</span>
                    <span className={`font-body ${h.time === "Closed" ? "text-[#aaa]" : "text-[#333]"}`}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
