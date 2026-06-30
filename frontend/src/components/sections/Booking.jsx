import React, { useState } from "react";
import { Send, PartyPopper, Loader2 } from "lucide-react";
import { toast } from "sonner";

const EVENT_TYPES = [
  "Private Party",
  "Wedding",
  "Corporate Event",
  "Festival",
  "Birthday",
  "Other",
];

const initial = {
  name: "",
  email: "",
  phone: "",
  event_date: "",
  event_type: EVENT_TYPES[0],
  guest_count: 30,
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

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
        throw new Error(err.detail?.[0]?.msg || "Booking failed");
      }
      setDone(true);
      toast.success("Booking request sent!");
      setForm(initial);
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
      className="relative py-20 md:py-28 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <div className="spray" style={{ background: "#f26b2e", width: 500, height: 500, bottom: "-150px", right: "-100px" }} />

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <p className="font-marker text-[#e63ebd] text-xl md:text-2xl rotate-[-2deg] mb-2">
            need us at your gig? 🎉
          </p>
          <h2 className="font-bungee text-[#e8d2a4] text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-4">
            Book <span className="text-[#3db8f2]">The</span> <span className="text-[#e63ebd]">Trailer</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            Weddings, festivals, birthdays, corporate days, street parties — drop the details
            and we'll get back within 24 hours.
          </p>
        </div>

        {done ? (
          <div
            data-testid="booking-success"
            className="bg-[#e8d2a4] text-black p-10 border-2 border-black text-center"
            style={{ boxShadow: "10px 10px 0 #e63ebd", transform: "rotate(-1deg)" }}
          >
            <PartyPopper size={48} className="mx-auto mb-4 text-[#e63ebd]" />
            <h3 className="font-bungee text-3xl uppercase mb-3">Booking Sent!</h3>
            <p className="mb-6">
              Cheers — we'll be in touch shortly with availability & a quote. Keep an eye on your inbox 🙌
            </p>
            <button
              data-testid="booking-another-btn"
              className="btn-pink"
              onClick={() => setDone(false)}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            data-testid="booking-form"
            className="bg-[#121212] p-6 sm:p-10 border-4 border-[#e8d2a4] relative"
            style={{ boxShadow: "12px 12px 0 #3db8f2" }}
          >
            <div className="absolute -top-4 left-8 bg-[#e63ebd] text-black font-bungee uppercase text-xs px-4 py-1.5 border-2 border-black rotate-[-3deg]">
              Event Booking
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="tht-label" htmlFor="bk-name">Your Name *</label>
                <input
                  id="bk-name"
                  data-testid="booking-name"
                  required
                  className="tht-input"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-email">Email *</label>
                <input
                  id="bk-email"
                  data-testid="booking-email"
                  type="email"
                  required
                  className="tht-input"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-phone">Phone *</label>
                <input
                  id="bk-phone"
                  data-testid="booking-phone"
                  type="tel"
                  required
                  className="tht-input"
                  placeholder="07XXX XXXXXX"
                  value={form.phone}
                  onChange={update("phone")}
                />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-date">Event Date *</label>
                <input
                  id="bk-date"
                  data-testid="booking-date"
                  type="date"
                  required
                  className="tht-input"
                  value={form.event_date}
                  onChange={update("event_date")}
                />
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-type">Event Type *</label>
                <select
                  id="bk-type"
                  data-testid="booking-type"
                  required
                  className="tht-input bg-[#121212]"
                  value={form.event_type}
                  onChange={update("event_type")}
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#121212]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-guests">Approx. Guests *</label>
                <input
                  id="bk-guests"
                  data-testid="booking-guests"
                  type="number"
                  min={1}
                  required
                  className="tht-input"
                  value={form.guest_count}
                  onChange={update("guest_count")}
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="tht-label" htmlFor="bk-msg">Tell us about it</label>
              <textarea
                id="bk-msg"
                data-testid="booking-message"
                rows={4}
                className="tht-input resize-none"
                placeholder="Where? What time? Any food preferences? Throw it all at us."
                value={form.message}
                onChange={update("message")}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              data-testid="booking-submit"
              className="btn-pink mt-8 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {submitting ? "Sending..." : "Send Booking Request"}
            </button>
            <p className="text-xs text-[#a3a3a3] mt-4">
              By submitting you agree to be contacted by The Hungry Trailer regarding your event.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
