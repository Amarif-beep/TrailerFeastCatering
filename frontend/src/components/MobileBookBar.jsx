import React from "react";
import { CalendarCheck, Truck } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MobileBookBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goVans = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById("vans")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById("vans")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mobile-book-bar" data-testid="mobile-book-bar">
      <button onClick={goVans} className="btn-outline-gold flex-1 justify-center text-xs" data-testid="mobile-vans-btn">
        <Truck size={16} /> Our Vans
      </button>
      <button onClick={() => navigate("/book")} className="btn-gold-pro flex-1 justify-center text-xs" data-testid="mobile-book-btn">
        <CalendarCheck size={16} /> Book Now
      </button>
    </div>
  );
}
