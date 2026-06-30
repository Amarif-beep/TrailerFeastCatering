import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { CONTACT, LOGO_URL, SOCIALS } from "../../lib/content";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#050505] border-t border-[#2a2a2a] pt-20 pb-10 px-5 md:px-8 overflow-hidden"
    >
      {/* Faded background text */}
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-4 font-display uppercase text-[15vw] leading-none text-[#0d0d0d] tracking-tighter text-center pointer-events-none select-none whitespace-nowrap"
      >
        HUNGRY TRAILER
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={LOGO_URL} alt="The Hungry Trailer" className="h-20 w-auto mb-5" />
          <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs">
            Fresh, hot and loaded street food from Daventry's favourite mobile trailer.
            Available for events across the Midlands.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[#e63ebd] uppercase text-sm tracking-[0.22em] mb-5">
            Contact
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-2.5 items-start text-[#e8d2a4]">
              <MapPin size={16} className="text-[#3db8f2] mt-0.5 shrink-0" />
              {CONTACT.location}
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex gap-2.5 items-center text-[#e8d2a4] hover:text-[#e63ebd] transition-colors"
              >
                <Phone size={16} className="text-[#3db8f2]" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex gap-2.5 items-center text-[#e8d2a4] hover:text-[#e63ebd] break-all transition-colors"
              >
                <Mail size={16} className="text-[#3db8f2]" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[#3db8f2] uppercase text-sm tracking-[0.22em] mb-5">
            Follow
          </h4>
          <div className="flex gap-3">
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
          <p className="text-xs text-[#a3a3a3] mt-7 italic max-w-xs">
            Daily locations & events updated on Facebook — tag us in your spud pics on Instagram.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-xs text-[#a3a3a3] text-center sm:text-left">
          © {new Date().getFullYear()} The Hungry Trailer · Daventry, UK · All rights reserved.
        </p>
        <p className="font-display text-[#e8d2a4] text-xs uppercase tracking-[0.32em]">
          Fresh · Hot · Loaded
        </p>
      </div>
    </footer>
  );
}
