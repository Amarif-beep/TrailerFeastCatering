import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarCheck } from "lucide-react";

/**
 * Availability calendar for a single trailer.
 * Green = available, Red = booked (confirmed), Yellow = pending.
 */
export default function AvailabilityCalendar({ trailerId, accent = "#c9a04e", onSelectDate }) {
  const [bookedSet, setBookedSet] = useState(new Set());
  const [pendingSet, setPendingSet] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setSelected(null);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/availability/${trailerId}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setBookedSet(new Set(data.booked_dates || []));
        setPendingSet(new Set(data.pending_dates || []));
      })
      .catch(() => {})
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [trailerId]);

  const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  // Manual availability override: only these ISO dates are bookable.
  // Everything else in the future is shown as unavailable (booked / red).
  const AVAILABLE_ONLY = new Set(["2026-08-23"]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isBooked = (d) => bookedSet.has(toISO(d));
  const isPending = (d) => pendingSet.has(toISO(d));
  const isPast = (d) => d < today;
  const isManuallyUnavailable = (d) => !isPast(d) && !AVAILABLE_ONLY.has(toISO(d));
  const isAvailable = (d) =>
    !isPast(d) && AVAILABLE_ONLY.has(toISO(d)) && !isBooked(d) && !isPending(d);

  const modifiers = {
    booked: (d) => isBooked(d) || isManuallyUnavailable(d),
    pending: (d) => isPending(d) && !isManuallyUnavailable(d),
    available: (d) => isAvailable(d),
  };

  const modifiersStyles = {
    booked: { color: "#ff5a5a", fontWeight: 700 },
    pending: { color: "#e0b64b", fontWeight: 700 },
    available: { color: "#5bd17a", fontWeight: 600 },
  };

  const handleSelect = (date) => {
    if (!date || !isAvailable(date)) return;
    setSelected(date);
    onSelectDate && onSelectDate(date);
  };

  return (
    <div className="card-pro p-5 sm:p-6" data-testid={`availability-calendar-${trailerId}`}>
      <div className="flex items-center gap-2 mb-4">
        <CalendarCheck size={18} className="text-[#c9a04e]" />
        <h4 className="font-display text-[#f5f1e8] text-base uppercase tracking-[0.16em]">Check Availability</h4>
      </div>

      <div className="tht-daypicker">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          disabled={[{ before: today }, (d) => isBooked(d) || isPending(d) || isManuallyUnavailable(d)]}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          weekStartsOn={1}
          showOutsideDays
        />
      </div>

      {loading && <p className="text-xs text-[#8a8172] italic mt-2 font-body">Loading dates…</p>}

      <div className="mt-4 pt-4 border-t border-[#322a20] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-body">
        <span className="flex items-center gap-2 text-[#cfc7b8]"><span className="w-2.5 h-2.5 rounded-full bg-[#5bd17a]" /> Available</span>
        <span className="flex items-center gap-2 text-[#cfc7b8]"><span className="w-2.5 h-2.5 rounded-full bg-[#ff5a5a]" /> Booked</span>
        <span className="flex items-center gap-2 text-[#cfc7b8]"><span className="w-2.5 h-2.5 rounded-full bg-[#e0b64b]" /> Pending</span>
      </div>

      {selected && (
        <div className="mt-4 p-4 rounded" style={{ background: accent }}>
          <p className="font-display uppercase text-[10px] tracking-[0.2em] text-black/70 mb-1">Selected date</p>
          <p className="font-display uppercase text-[#17130d] text-base tracking-wide">
            {selected.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      )}
    </div>
  );
}
