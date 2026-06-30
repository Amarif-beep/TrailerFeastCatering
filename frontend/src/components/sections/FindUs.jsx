import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { CONTACT } from "../../lib/content";

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
      <div className="spray" style={{ background: "#3db8f2", width: 380, height: 380, top: "-100px", left: "10%", opacity: 0.2 }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#f26b2e]" />
              <p className="font-anton text-[#f26b2e] text-sm uppercase tracking-[0.3em]">
                Find Us
              </p>
            </div>
            <h2 className="font-anton text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9]">
              Park up.
              <br />
              <span className="text-[#3db8f2]">Order up.</span>
            </h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm text-base leading-relaxed">
            Catch us at Casey's Pub in Daventry six days a week — and follow our socials
            for event dates around the Midlands.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Map */}
          <div className="lg:col-span-7 relative">
            <div className="border-2 border-[#e8d2a4] overflow-hidden" style={{ boxShadow: "8px 8px 0 #000" }}>
              <iframe
                data-testid="location-map"
                title="The Hungry Trailer location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.180%2C52.250%2C-1.140%2C52.270&layer=mapnik&marker=52.2587%2C-1.1597"
                className="w-full h-[420px] grayscale-[0.5] contrast-110"
                loading="lazy"
              />
            </div>
            <a
              data-testid="open-in-maps-link"
              href="https://www.google.com/maps/search/?api=1&query=Casey%27s+Pub+Daventry"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 left-6 btn-cream text-sm"
            >
              Open in Maps →
            </a>
          </div>

          {/* Contact / Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#050505] border border-[#2a2a2a] p-7">
              <h3 className="font-anton text-[#e63ebd] text-lg uppercase tracking-[0.2em] mb-5">
                Get in Touch
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#3db8f2] mt-0.5 shrink-0" />
                  <span data-testid="contact-location" className="text-[#e8d2a4] text-base">
                    {CONTACT.location}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#3db8f2] shrink-0" />
                  <a
                    data-testid="contact-phone"
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="text-[#e8d2a4] hover:text-[#e63ebd] transition-colors text-base"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[#3db8f2] shrink-0" />
                  <a
                    data-testid="contact-email"
                    href={`mailto:${CONTACT.email}`}
                    className="text-[#e8d2a4] hover:text-[#e63ebd] transition-colors text-base break-all"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-6 pt-6 border-t border-[#2a2a2a]">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-3 bg-[#e63ebd] text-black border border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-3 bg-[#3db8f2] text-black border border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="bg-[#050505] border border-[#2a2a2a] p-7">
              <h3 className="font-anton text-[#3db8f2] text-lg uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <Clock size={18} /> Opening Hours
              </h3>
              <ul className="space-y-2.5">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm py-1">
                    <span className="font-anton text-[#e8d2a4] uppercase tracking-[0.14em]">
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
              <p className="text-xs text-[#a3a3a3] mt-5 italic">
                Event days vary — check our socials before you set off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
