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
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#121212] overflow-hidden"
    >
      <div className="spray" style={{ background: "#3db8f2", width: 400, height: 400, top: "-100px", left: "10%" }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-12">
          <p className="font-marker text-[#f26b2e] text-xl md:text-2xl rotate-[-2deg] mb-2">
            come find us 📍
          </p>
          <h2 className="font-bungee text-[#e8d2a4] text-4xl sm:text-5xl lg:text-6xl uppercase leading-none">
            Find <span className="text-[#3db8f2]">The</span> <span className="text-[#e63ebd]">Trailer</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Map */}
          <div className="lg:col-span-7 relative">
            <div className="border-4 border-[#e8d2a4] overflow-hidden" style={{ boxShadow: "10px 10px 0 #e63ebd" }}>
              <iframe
                data-testid="location-map"
                title="The Hungry Trailer location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.180%2C52.250%2C-1.140%2C52.270&layer=mapnik&marker=52.2587%2C-1.1597"
                className="w-full h-[420px] grayscale-[0.4] contrast-110"
                loading="lazy"
              />
            </div>
            <a
              data-testid="open-in-maps-link"
              href="https://www.google.com/maps/search/?api=1&query=Casey%27s+Pub+Daventry"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 left-6 btn-cream"
            >
              Open in Maps →
            </a>
          </div>

          {/* Contact / Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#050505] border-2 border-[#2a2a2a] p-6 relative">
              <div className="tape" style={{ top: -8, right: 20 }} />
              <h3 className="font-bungee text-[#e63ebd] text-xl uppercase mb-4">Reach Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#3db8f2] mt-1 shrink-0" />
                  <span data-testid="contact-location" className="text-[#e8d2a4]">{CONTACT.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#3db8f2] shrink-0" />
                  <a data-testid="contact-phone" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-[#e8d2a4] hover:text-[#e63ebd] transition-colors">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[#3db8f2] shrink-0" />
                  <a data-testid="contact-email" href={`mailto:${CONTACT.email}`} className="text-[#e8d2a4] hover:text-[#e63ebd] transition-colors break-all">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-5 pt-5 border-t border-dashed border-[#2a2a2a]">
                <a href="#" aria-label="Instagram" className="p-2 bg-[#e63ebd] text-black border-2 border-black hover:translate-y-[-2px] transition-transform">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Facebook" className="p-2 bg-[#3db8f2] text-black border-2 border-black hover:translate-y-[-2px] transition-transform">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="bg-[#050505] border-2 border-[#2a2a2a] p-6">
              <h3 className="font-bungee text-[#3db8f2] text-xl uppercase mb-4 flex items-center gap-2">
                <Clock size={18} /> Hours
              </h3>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="font-bungee text-[#e8d2a4] uppercase">{h.day}</span>
                    <span className={`font-body ${h.time === "Closed" ? "text-[#a3a3a3]" : "text-[#e8d2a4]"}`}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#a3a3a3] mt-4 italic">
                * Event days may vary — check our socials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
