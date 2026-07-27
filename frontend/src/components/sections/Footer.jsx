import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, LOGO_URL, SOCIALS } from "../../lib/content";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#0b0908] border-t border-[#322a20] pt-14 pb-8 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={LOGO_URL} alt="The Hungry Trailer" className="h-14 w-auto mb-4 rounded" />
          <p className="text-[#b0a894] text-sm leading-relaxed max-w-xs font-body">
            Premium mobile street food from Daventry — available for events, festivals, corporate catering and private hire across the Midlands.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[#c9a04e] uppercase text-sm tracking-[0.2em] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5 items-start text-[#f5f1e8] font-body"><MapPin size={16} className="text-[#c9a04e] mt-0.5 shrink-0" /> {CONTACT.location}</li>
            <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex gap-2.5 items-center text-[#f5f1e8] hover:text-[#c9a04e] font-body"><Phone size={16} className="text-[#c9a04e]" /> {CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="flex gap-2.5 items-center text-[#f5f1e8] hover:text-[#c9a04e] break-all font-body"><Mail size={16} className="text-[#c9a04e]" /> {CONTACT.email}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[#c9a04e] uppercase text-sm tracking-[0.2em] mb-4">Follow</h4>
          <div className="flex gap-3 mb-5">
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#322a20] flex items-center justify-center text-[#c9a04e] hover:bg-[#c9a04e] hover:text-[#17130d] transition-colors"><Instagram size={18} /></a>
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#322a20] flex items-center justify-center text-[#c9a04e] hover:bg-[#c9a04e] hover:text-[#17130d] transition-colors"><Facebook size={18} /></a>
          </div>
          <Link to="/book" className="btn-gold-pro text-xs">Book Now</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-[#322a20] text-center">
        <p className="text-xs text-[#8a8172] font-body">© {new Date().getFullYear()} The Hungry Trailer · Daventry, UK · All rights reserved.</p>
      </div>
    </footer>
  );
}
