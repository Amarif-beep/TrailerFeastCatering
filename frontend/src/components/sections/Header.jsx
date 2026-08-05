import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LOGO_URL } from "../../lib/content";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Our Vans", to: "/#vans" },
  { label: "Book & Contact", to: "/book" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (to) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-[#0f0d0b]/95 backdrop-blur-md border-b border-[#322a20]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} data-testid="header-logo-btn" className="flex items-center gap-2 group">
          <motion.img
            initial={{ opacity: 0, y: -8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            whileHover={{ scale: 1.03, rotate: -0.5 }}
            src={LOGO_URL}
            alt="Trailer Feast Catering"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_18px_rgba(201,160,78,0.25)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((n) => (
            <button
              key={n.label}
              data-testid={`nav-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              onClick={() => handleNav(n.to)}
              className="font-display text-sm uppercase tracking-[0.14em] text-[#f5f1e8] px-4 py-2 hover:text-[#c9a04e] transition-colors"
            >
              {n.label}
            </button>
          ))}
          <button data-testid="nav-book-now" onClick={() => handleNav("/book")} className="btn-gold-pro ml-3 text-xs">
            Book Now
          </button>
        </nav>

        <button data-testid="mobile-menu-toggle" onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#f5f1e8]" aria-label="Toggle menu">
          {open ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f0d0b] border-t border-[#322a20] px-5 py-6 flex flex-col gap-2">
          {NAV.map((n) => (
            <button
              key={n.label}
              data-testid={`mobile-nav-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              onClick={() => handleNav(n.to)}
              className="font-display text-lg uppercase tracking-wider text-left py-2 text-[#f5f1e8] hover:text-[#c9a04e]"
            >
              {n.label}
            </button>
          ))}
          <button onClick={() => handleNav("/book")} className="btn-gold-pro mt-2 justify-center">Book Now</button>
        </div>
      )}
    </header>
  );
}
