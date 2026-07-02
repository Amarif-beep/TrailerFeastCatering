import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarCheck, CalendarX } from "lucide-react";

/**
 * Availability calendar for a single trailer.
 * Fetches booked dates from /api/availability/:trailerId.
 * Booked dates are disabled and greyed out. Available dates can be clicked.
 * Calls onSelectDate(date: Date) when the user picks an available date.
 */
export default function AvailabilityCalendar({ trailerId, accent = "#e63ebd", onSelectDate }) {
  const [bookedSet, setBookedSet] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/availability/${trailerId}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setBookedSet(new Set(data.booked_dates || []));
      })
      .catch(() => {})
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [trailerId]);

  const toISO = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isBooked = (date) => bookedSet.has(toISO(date));
  const isPast = (date) => date < today;

  const modifiers = {
    booked: (d) => isBooked(d),
    past: (d) => isPast(d),
  };

  const modifiersStyles = {
    booked: {
      color: "#666",
      textDecoration: "line-through",
      background: "transparent",
    },
    past: {
      color: "#3a3a3a",
    },
    selected: {
      background: accent,
      color: "#000",
      border: "2px solid #000",
      borderRadius: 0,
      fontWeight: 900,
    },
  };

  const handleSelect = (date) => {
    if (!date) return;
    if (isBooked(date) || isPast(date)) return;
    setSelected(date);
    onSelectDate && onSelectDate(date);
  };

  return (
    <div
      className="bg-[#0a0a0a] border-2 border-[#e8d2a4] p-5 sm:p-6"
      style={{ boxShadow: `8px 8px 0 ${accent}` }}
      data-testid={`availability-calendar-${trailerId}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <CalendarCheck size={20} className="text-[#3db8f2]" />
        <h4 className="font-display text-[#e8d2a4] text-lg uppercase tracking-[0.18em]">
          Live Availability
        </h4>
      </div>

      <div className="tht-daypicker">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          disabled={[{ before: today }, (d) => isBooked(d)]}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          weekStartsOn={1}
          showOutsideDays
        />
      </div>

      {loading && (
        <p className="text-xs text-[#a3a3a3] italic mt-3 font-body">Loading dates…</p>
      )}

      <div className="mt-5 pt-5 border-t border-[#2a2a2a] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
        <span className="flex items-center gap-2 text-[#e8d2a4] font-body">
          <span className="w-3 h-3 border-2 border-[#e8d2a4]" /> Available
        </span>
        <span className="flex items-center gap-2 text-[#666] font-body">
          <CalendarX size={14} /> Booked
        </span>
        <span className="flex items-center gap-2 font-body" style={{ color: accent }}>
          <span className="w-3 h-3 border-2 border-black" style={{ background: accent }} /> Selected
        </span>
      </div>

      {selected && (
        <div className="mt-4 p-4 border-2 border-black" style={{ background: accent, boxShadow: "5px 5px 0 #000" }}>
          <p className="font-display uppercase text-xs tracking-[0.2em] text-black/80 mb-1">
            Selected date
          </p>
          <p className="font-display uppercase text-black text-lg tracking-wide">
            {selected.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <button
            onClick={() => {
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-3 bg-black text-[#e8d2a4] font-display uppercase text-xs tracking-[0.18em] px-4 py-2 border-2 border-black hover:bg-[#050505]"
            data-testid="request-this-date-btn"
          >
            Request This Date →
          </button>
        </div>
      )}
    </div>
  );
}
