import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { CONTACT, LOGO_URL } from "../../lib/content";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#050505] border-t-4 border-[#3db8f2] pt-16 pb-8 px-5 md:px-8 overflow-hidden"
    >
      {/* Faded background text */}
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-2 font-bungee uppercase text-[15vw] leading-none text-[#121212] tracking-tighter text-center pointer-events-none select-none whitespace-nowrap"
      >
        HUNGRY TRAILER
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={LOGO_URL} alt="The Hungry Trailer" className="h-20 w-auto mb-4" />
          <p className="text-[#a3a3a3] text-sm leading-relaxed">
            Fresh, hot & loaded street food from Daventry's favourite mobile trailer.
            Come hungry. Leave happy.
          </p>
        </div>

        <div>
          <h4 className="font-bungee text-[#e63ebd] uppercase text-sm mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start text-[#e8d2a4]">
              <MapPin size={16} className="text-[#3db8f2] mt-1 shrink-0" />
              {CONTACT.location}
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex gap-2 items-center text-[#e8d2a4] hover:text-[#e63ebd]">
                <Phone size={16} className="text-[#3db8f2]" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex gap-2 items-center text-[#e8d2a4] hover:text-[#e63ebd] break-all">
                <Mail size={16} className="text-[#3db8f2]" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bungee text-[#3db8f2] uppercase text-sm mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-3 bg-[#e63ebd] text-black border-2 border-black hover:translate-y-[-2px] transition-transform">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="p-3 bg-[#3db8f2] text-black border-2 border-black hover:translate-y-[-2px] transition-transform">
              <Facebook size={18} />
            </a>
          </div>
          <p className="text-xs text-[#a3a3a3] mt-6 italic">
            Tag us in your spud pics 🥔
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-xs text-[#a3a3a3] text-center sm:text-left">
          © {new Date().getFullYear()} The Hungry Trailer · Daventry, UK · All rights reserved.
        </p>
        <p className="font-marker text-[#e63ebd] text-sm">
          🔥 Fresh · Hot · Loaded 🔥
        </p>
      </div>
    </footer>
  );
}
