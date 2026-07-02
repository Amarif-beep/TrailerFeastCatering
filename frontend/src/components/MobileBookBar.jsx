import React from "react";
import { CalendarCheck, Truck } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MobileBookBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBook = () => {
    if (location.pathname !== "/") {
      navigate("/#booking");
      setTimeout(() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goTrailers = () => {
    if (location.pathname !== "/") {
      navigate("/#trailers");
      setTimeout(() => document.getElementById("trailers")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById("trailers")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mobile-book-bar" data-testid="mobile-book-bar">
      <button
        onClick={goTrailers}
        className="flex-1 flex items-center justify-center gap-2 border-2 border-[#e8d2a4] text-[#e8d2a4] font-display uppercase text-sm tracking-[0.14em] py-3"
        data-testid="mobile-trailers-btn"
      >
        <Truck size={16} /> Trailers
      </button>
      <button
        onClick={goBook}
        className="flex-1 btn-gold justify-center"
        style={{ padding: "0.7rem 1rem" }}
        data-testid="mobile-book-btn"
      >
        <CalendarCheck size={16} /> Book Now
      </button>
    </div>
  );
}
