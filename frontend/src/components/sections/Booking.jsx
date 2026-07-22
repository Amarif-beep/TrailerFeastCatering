import React, { useState, useEffect } from "react";
import { Send, PartyPopper, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { TRAILERS } from "../../lib/trailers";
import PaintSplatter from "../decor/PaintSplatter";

const EVENT_TYPES = [
  "Private Party",
  "Wedding",
  "Corporate Event",
  "Festival",
  "Birthday",
  "Pub Night",
  "Other",
];

const initial = (defaultTrailerId, defaultDate) => ({
  name: "",
  email: "",
  phone: "",
  trailer_id: defaultTrailerId || TRAILERS[0].id,
  event_date: defaultDate || "",
  event_location: "",
  event_type: EVENT_TYPES[0],
  guest_count: 50,
  electricity_available: false,
  message: "",
});

export default function Booking({ defaultTrailerId, defaultDate }) {
  const [form, setForm] = useState(initial(defaultTrailerId, defaultDate));
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // If the parent updates the defaults (e.g. calendar picks a date), sync in.
  useEffect(() => {
    setForm((f) => ({
      ...f,
      trailer_id: defaultTrailerId || f.trailer_id,
      event_date: defaultDate || f.event_date,
    }));
  }, [defaultTrailerId, defaultDate]);

  const update = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          guest_count: parseInt(form.guest_count, 10) || 1,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const msg = typeof err.detail === "string" ? err.detail : err.detail?.[0]?.msg || "Booking failed";
        throw new Error(msg);
      }
      setDone(true);
      toast.success("Booking request sent!");
      setForm(initial(defaultTrailerId, defaultDate));
    } catch (err) {
      toast.error(err.message || "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="relative py-14 md:py-20 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <div className="spray" style={{ background: "#f26b2e", width: 360, height: 360, bottom: "-140px", right: "-100px", opacity: 0.2 }} />

      <div className="relative max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#e63ebd]" />
            <p className="font-display text-[#e63ebd] text-xs uppercase tracking-[0.3em]">
              Booking Enquiry
            </p>
            <span className="h-px w-8 bg-[#e63ebd]" />
          </div>
          <h2 className="font-display text-white text-3xl sm:text-4xl uppercase leading-none mb-3">
            Book the <span className="text-gold underline-marker underline-marker-orange">trailer.</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-lg mx-auto text-sm leading-relaxed font-body">
            Share a few details and we'll come back within 24 hours with availability,
            a menu and a quote.
          </p>
        </div>

        {done ? (
          <div
            data-testid="booking-success"
            className="bg-[#e8d2a4] text-black p-10 sm:p-12 border-2 border-black text-center"
            style={{ boxShadow: "10px 10px 0 #000" }}
          >
            <PartyPopper size={52} className="mx-auto mb-5 text-[#e63ebd]" />
            <h3 className="font-display text-4xl uppercase mb-3 tracking-wide">Request Sent</h3>
            <p className="mb-7 text-base leading-relaxed max-w-md mx-auto font-body">
              Thanks — we've got your details. Expect a reply within 24 hours with
              availability, a menu and a quote.
            </p>
            <button
              data-testid="booking-another-btn"
              className="btn-pink"
              onClick={() => setDone(false)}
            >
              Send Another Request
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            data-testid="booking-form"
            className="bg-[#0a0a0a] p-7 sm:p-10 border-2 border-[#e8d2a4] relative"
            style={{ boxShadow: "10px 10px 0 #000" }}
          >
            <div className="absolute -top-4 left-8 bg-[#e63ebd] text-black font-display uppercase text-xs tracking-[0.22em] px-4 py-1.5 border-2 border-black">
              Event Enquiry
            </div>

            <div className="grid sm:grid-cols-2 gap-7 mt-4">
              <div>
                <label className="tht-label" htmlFor="bk-name">Your Name *</label>
                <input id="bk-name" data-testid="booking-name" required className="tht-input" placeholder="Jane Doe" value={form.name} onChange={update("name")} />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-email">Email *</label>
                <input id="bk-email" data-testid="booking-email" type="email" required className="tht-input" placeholder="you@email.com" value={form.email} onChange={update("email")} />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-phone">Phone *</label>
                <input id="bk-phone" data-testid="booking-phone" type="tel" required className="tht-input" placeholder="07XXX XXXXXX" value={form.phone} onChange={update("phone")} />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-trailer">Which Trailer *</label>
                <select id="bk-trailer" data-testid="booking-trailer" required className="tht-input bg-[#0a0a0a]" value={form.trailer_id} onChange={update("trailer_id")}>
                  {TRAILERS.map((t) => (
                    <option key={t.id} value={t.id} className="bg-[#0a0a0a]">{t.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-date">Event Date *</label>
                <input id="bk-date" data-testid="booking-date" type="date" required className="tht-input" value={form.event_date} onChange={update("event_date")} />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-loc">Event Location *</label>
                <input id="bk-loc" data-testid="booking-location" type="text" required className="tht-input" placeholder="Postcode or venue name" value={form.event_location} onChange={update("event_location")} />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-type">Event Type *</label>
                <select id="bk-type" data-testid="booking-type" required className="tht-input bg-[#0a0a0a]" value={form.event_type} onChange={update("event_type")}>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#0a0a0a]">{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-guests">Approx. Guests *</label>
                <input id="bk-guests" data-testid="booking-guests" type="number" min={1} required className="tht-input" value={form.guest_count} onChange={update("guest_count")} />
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 p-4 border-2 border-[#2a2a2a] bg-[#050505]">
              <input
                id="bk-elec"
                data-testid="booking-electricity"
                type="checkbox"
                className="mt-1 w-5 h-5 accent-[#e63ebd]"
                checked={form.electricity_available}
                onChange={update("electricity_available")}
              />
              <label htmlFor="bk-elec" className="text-sm text-[#e8d2a4] font-body cursor-pointer">
                <span className="font-display uppercase tracking-[0.14em] text-[#3db8f2] text-xs block mb-1">Electricity On Site</span>
                Tick if the venue has a 16A or 32A hook-up available. If unticked we'll bring our silent generator.
              </label>
            </div>

            <div className="mt-6">
              <label className="tht-label" htmlFor="bk-msg">Tell us about it</label>
              <textarea id="bk-msg" data-testid="booking-message" rows={4} className="tht-input resize-none" placeholder="Any dietary requirements, timing, menu preferences?" value={form.message} onChange={update("message")} />
            </div>

            <button
              type="submit"
              disabled={submitting}
              data-testid="booking-submit"
              className="btn-gold mt-9 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {submitting ? "Sending..." : "Send Booking Request"}
            </button>
            <p className="text-xs text-[#a3a3a3] mt-5 font-body">
              By submitting you agree to be contacted by The Hungry Trailer regarding your event.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
