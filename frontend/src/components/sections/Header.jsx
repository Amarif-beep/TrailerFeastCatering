import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { LOGO_URL } from "../../lib/content";

const NAV = [
  { label: "Menu", id: "menu" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Find Us", id: "find-us" },
  { label: "Book Event", id: "booking" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b-2 border-[#e63ebd]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          data-testid="header-logo-btn"
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO_URL}
            alt="The Hungry Trailer"
            className="h-12 md:h-14 w-auto object-contain group-hover:rotate-[-3deg] transition-transform"
          />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => go(n.id)}
              className="font-bungee text-xs uppercase tracking-wider text-[#e8d2a4] px-3 py-2 hover:text-[#e63ebd] transition-colors"
            >
              {n.label}
            </button>
          ))}
          <button
            data-testid="nav-order-cta"
            onClick={() => go("booking")}
            className="btn-pink ml-3 text-xs"
          >
            Book Us
          </button>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#e8d2a4]"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t-2 border-[#e63ebd] px-5 py-6 flex flex-col gap-2">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`mobile-nav-${n.id}`}
              onClick={() => go(n.id)}
              className="font-bungee text-base uppercase text-left py-2 text-[#e8d2a4] hover:text-[#3db8f2]"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
