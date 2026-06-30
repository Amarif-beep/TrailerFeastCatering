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

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

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
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[#050505] overflow-hidden"
    >
      <div className="spray" style={{ background: "#f26b2e", width: 460, height: 460, bottom: "-150px", right: "-100px", opacity: 0.25 }} />
      <div className="spray" style={{ background: "#e63ebd", width: 380, height: 380, top: "-100px", left: "-80px", opacity: 0.2 }} />

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#e63ebd]" />
            <p className="font-anton text-[#e63ebd] text-sm uppercase tracking-[0.3em]">
              Catering & Events
            </p>
            <span className="h-px w-10 bg-[#e63ebd]" />
          </div>
          <h2 className="font-anton text-[#e8d2a4] text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] mb-5">
            Book the
            <br />
            <span className="text-[#3db8f2]">Trailer.</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto text-base leading-relaxed">
            Weddings, festivals, birthdays, corporate days, street parties — share a few
            details and we'll come back within 24 hours with availability and a quote.
          </p>
        </div>

        {done ? (
          <div
            data-testid="booking-success"
            className="bg-[#e8d2a4] text-black p-10 sm:p-12 border-2 border-black text-center"
            style={{ boxShadow: "10px 10px 0 #000" }}
          >
            <PartyPopper size={52} className="mx-auto mb-5 text-[#e63ebd]" />
            <h3 className="font-anton text-4xl uppercase mb-3 tracking-wide">Request Sent</h3>
            <p className="mb-7 text-base leading-relaxed max-w-md mx-auto">
              Thanks — we've got your details. Expect a reply within 24 hours with
              availability and a tailored quote.
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
            <div className="absolute -top-4 left-8 bg-[#e63ebd] text-black font-anton uppercase text-xs tracking-[0.2em] px-4 py-1.5 border-2 border-black">
              Event Enquiry
            </div>

            <div className="grid sm:grid-cols-2 gap-7 mt-4">
              <div>
                <label className="tht-label" htmlFor="bk-name">
                  Your Name *
                </label>
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
                <label className="tht-label" htmlFor="bk-email">
                  Email *
                </label>
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
                <label className="tht-label" htmlFor="bk-phone">
                  Phone *
                </label>
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
                <label className="tht-label" htmlFor="bk-date">
                  Event Date *
                </label>
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
                <label className="tht-label" htmlFor="bk-type">
                  Event Type *
                </label>
                <select
                  id="bk-type"
                  data-testid="booking-type"
                  required
                  className="tht-input bg-[#0a0a0a]"
                  value={form.event_type}
                  onChange={update("event_type")}
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#0a0a0a]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="tht-label" htmlFor="bk-guests">
                  Approx. Guests *
                </label>
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
            <div className="mt-7">
              <label className="tht-label" htmlFor="bk-msg">
                Tell us about it
              </label>
              <textarea
                id="bk-msg"
                data-testid="booking-message"
                rows={4}
                className="tht-input resize-none"
                placeholder="Where? What time? Any food preferences or dietary requirements?"
                value={form.message}
                onChange={update("message")}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              data-testid="booking-submit"
              className="btn-pink mt-9 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {submitting ? "Sending..." : "Send Booking Request"}
            </button>
            <p className="text-xs text-[#a3a3a3] mt-5">
              By submitting you agree to be contacted by The Hungry Trailer regarding your event.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
