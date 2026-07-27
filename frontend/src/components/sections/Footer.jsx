import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useLocation } from "react-router-dom";
import { CONTACT, LOGO_URL, SOCIALS } from "../../lib/content";

export default function Footer() {
  const dark = useLocation().pathname !== "/";

  const bg = dark ? "bg-[#050505] border-[#2a2a2a]" : "bg-[#0f0f0f] border-[#0f0f0f]";
  // Footer stays dark on both (premium anchor) but keep it consistent
  const ghost = "text-white/5";
  const body = "text-[#bcbcbc]";
  const link = "text-[#e8d2a4] hover:text-[#e63ebd]";

  return (
    <footer
      data-testid="site-footer"
      className={`relative ${bg} border-t pt-16 pb-10 px-5 md:px-8 overflow-hidden`}
    >
      <div
        aria-hidden
        className={`absolute inset-x-0 -bottom-4 font-display uppercase text-[15vw] leading-none ${ghost} tracking-tighter text-center pointer-events-none select-none whitespace-nowrap`}
      >
        HUNGRY TRAILER
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={LOGO_URL} alt="The Hungry Trailer" className="h-16 w-auto mb-4 rounded" />
          <p className={`${body} text-sm leading-relaxed max-w-xs`}>
            Fresh, hot and loaded street food from Daventry's favourite mobile trailers.
            Available for events across the Midlands.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[#e63ebd] uppercase text-sm tracking-[0.22em] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5 items-start text-[#e8d2a4]">
              <MapPin size={16} className="text-[#3db8f2] mt-0.5 shrink-0" /> {CONTACT.location}
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className={`flex gap-2.5 items-center ${link} transition-colors`}>
                <Phone size={16} className="text-[#3db8f2]" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className={`flex gap-2.5 items-center ${link} break-all transition-colors`}>
                <Mail size={16} className="text-[#3db8f2]" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[#3db8f2] uppercase text-sm tracking-[0.22em] mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-[#e63ebd] text-white border border-black hover:-translate-y-0.5 transition-transform">
              <Instagram size={18} />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 bg-[#3db8f2] text-white border border-black hover:-translate-y-0.5 transition-transform">
              <Facebook size={18} />
            </a>
          </div>
          <p className={`text-xs ${body} mt-6 italic max-w-xs`}>
            Daily locations &amp; events updated on Facebook.
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-xs text-[#a3a3a3] text-center sm:text-left">
          © {new Date().getFullYear()} The Hungry Trailer · Daventry, UK · All rights reserved.
        </p>
        <p className="font-display text-[#e8d2a4] text-xs uppercase tracking-[0.3em]">Fresh · Hot · Loaded</p>
      </div>
    </footer>
  );
}
