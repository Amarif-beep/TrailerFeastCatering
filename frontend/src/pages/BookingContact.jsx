import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Loader2, Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck, ChefHat, Check } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import MobileBookBar from "../components/MobileBookBar";
import AvailabilityCalendar from "../components/AvailabilityCalendar";
import { TRAILERS } from "../lib/trailers";
import { CONTACT, SOCIALS } from "../lib/content";

const EVENT_TYPES = ["Private Party", "Wedding", "Corporate Event", "Festival", "Birthday", "Pub Night", "Other"];
const POWER = ["Yes — 32A available", "Yes — 16A available", "No — you'll need your generator", "Not sure"];

const STEPS = ["Choose Van", "Check Availability", "Send Enquiry"];

export default function BookingContact() {
  const query = new URLSearchParams(useLocation().search);
  const initialVan = query.get("van") && TRAILERS.some((t) => t.id === query.get("van")) ? query.get("van") : TRAILERS[0].id;

  const [vanId, setVanId] = useState(initialVan);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", event_date: "", event_location: "",
    event_type: EVENT_TYPES[0], guest_count: "", power: POWER[0], message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const isoDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const currentStep = useMemo(() => {
    if (!form.event_date) return vanId ? 2 : 1;
    if (form.name && form.email) return 3;
    return 3;
  }, [vanId, form.event_date, form.name, form.email]);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          trailer_id: vanId, event_date: form.event_date, event_location: form.event_location,
          event_type: form.event_type, guest_count: parseInt(form.guest_count, 10) || 1,
          electricity_available: form.power.startsWith("Yes"), message: form.message,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const msg = typeof err.detail === "string" ? err.detail : err.detail?.[0]?.msg || "Booking failed";
        throw new Error(msg);
      }
      setDone(true);
      toast.success("Enquiry sent!");
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative premium-bg" data-testid="booking-page">
      <Header />

      <section className="pt-28 pb-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="font-display text-white text-4xl sm:text-5xl uppercase tracking-wide">Booking &amp; Contact</h1>
            <p className="text-[#b0a894] font-body mt-2">Check availability, get a quote or make a booking.</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-3 sm:gap-8 mb-12">
            {STEPS.map((s, i) => {
              const n = i + 1;
              const active = currentStep >= n;
              return (
                <React.Fragment key={s}>
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-sm border ${active ? "bg-[#c9a04e] text-[#17130d] border-[#c9a04e]" : "text-[#8a8172] border-[#322a20]"}`}>
                      {currentStep > n ? <Check size={16} /> : n}
                    </div>
                    <span className={`font-display uppercase text-[10px] sm:text-xs tracking-[0.14em] ${active ? "text-[#c9a04e]" : "text-[#8a8172]"}`}>{s}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className={`h-px w-8 sm:w-20 ${currentStep > n ? "bg-[#c9a04e]" : "bg-[#322a20]"}`} />}
                </React.Fragment>
              );
            })}
          </div>

          {/* Choose van */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {TRAILERS.map((t) => {
              const sel = vanId === t.id;
              return (
                <button
                  key={t.id}
                  data-testid={`choose-van-${t.id}`}
                  onClick={() => setVanId(t.id)}
                  className={`relative text-left rounded-lg overflow-hidden border-2 transition-colors ${sel ? "border-[#c9a04e]" : "border-[#322a20]"}`}
                >
                  <div className="h-36 overflow-hidden">
                    <img src={t.cardImg} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className={`p-4 ${sel ? "bg-[#c9a04e] text-[#17130d]" : "bg-[#1a1611] text-[#f5f1e8]"}`}>
                    <span className="font-display uppercase text-sm tracking-wide">{t.name}</span>
                  </div>
                  {sel && <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#c9a04e] border-2 border-[#17130d] flex items-center justify-center"><Check size={14} className="text-[#17130d]" /></div>}
                </button>
              );
            })}
          </div>

          {/* Calendar + form */}
          {done ? (
            <div data-testid="booking-success" className="max-w-2xl mx-auto text-center card-pro p-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#c9a04e] flex items-center justify-center"><Check size={30} className="text-[#17130d]" /></div>
              <h3 className="font-display text-white text-3xl uppercase mb-3">Enquiry Sent</h3>
              <p className="text-[#b0a894] font-body mb-6">Thanks — we'll reply within 24 hours with availability, a menu and a quote.</p>
              <button className="btn-gold-pro" onClick={() => setDone(false)}>Send Another</button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Calendar */}
              <div>
                <AvailabilityCalendar trailerId={vanId} accent="#c9a04e" onSelectDate={(d) => setForm((f) => ({ ...f, event_date: isoDate(d) }))} />
                <div className="card-pro p-6 mt-6">
                  <h4 className="font-display text-[#f5f1e8] text-lg uppercase tracking-wide mb-3">Need Help?</h4>
                  <p className="text-[#b0a894] font-body text-sm mb-4">Have a question or need a custom quote? Get in touch with us.</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 text-[#f5f1e8] font-body"><Phone size={16} className="text-[#c9a04e]" /> <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-[#c9a04e]">{CONTACT.phone}</a></li>
                    <li className="flex items-center gap-3 text-[#f5f1e8] font-body"><Mail size={16} className="text-[#c9a04e]" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-[#c9a04e] break-all">{CONTACT.email}</a></li>
                    <li className="flex items-center gap-3 text-[#f5f1e8] font-body"><MapPin size={16} className="text-[#c9a04e]" /> Daventry, Northamptonshire</li>
                  </ul>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-[#322a20]">
                    <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-[#322a20] flex items-center justify-center text-[#c9a04e] hover:bg-[#c9a04e] hover:text-[#17130d] transition-colors"><Facebook size={16} /></a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-[#322a20] flex items-center justify-center text-[#c9a04e] hover:bg-[#c9a04e] hover:text-[#17130d] transition-colors"><Instagram size={16} /></a>
                  </div>
                </div>
              </div>

              {/* Event details form */}
              <form onSubmit={submit} data-testid="booking-form" className="card-pro p-6 sm:p-8">
                <h3 className="font-display text-[#f5f1e8] text-xl uppercase tracking-wide mb-5">Event Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="label-pro">Event Date *</label>
                    <input data-testid="booking-date" type="date" required className="input-pro" value={form.event_date} onChange={update("event_date")} />
                  </div>
                  <div>
                    <label className="label-pro">Event Type *</label>
                    <select data-testid="booking-type" required className="input-pro" value={form.event_type} onChange={update("event_type")}>
                      {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label-pro">Number of Guests *</label>
                    <input data-testid="booking-guests" type="number" min={1} required className="input-pro" placeholder="Enter number" value={form.guest_count} onChange={update("guest_count")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label-pro">Location *</label>
                    <input data-testid="booking-location" required className="input-pro" placeholder="Enter location / postcode" value={form.event_location} onChange={update("event_location")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label-pro">Power Available</label>
                    <select data-testid="booking-power" className="input-pro" value={form.power} onChange={update("power")}>
                      {POWER.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label-pro">Your Name *</label>
                    <input data-testid="booking-name" required className="input-pro" placeholder="Enter your name" value={form.name} onChange={update("name")} />
                  </div>
                  <div>
                    <label className="label-pro">Email *</label>
                    <input data-testid="booking-email" type="email" required className="input-pro" placeholder="Enter your email" value={form.email} onChange={update("email")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label-pro">Phone *</label>
                    <input data-testid="booking-phone" type="tel" required className="input-pro" placeholder="Enter your phone" value={form.phone} onChange={update("phone")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label-pro">Additional Information</label>
                    <textarea data-testid="booking-message" rows={3} className="input-pro resize-none" placeholder="Tell us about your event…" value={form.message} onChange={update("message")} />
                  </div>
                </div>
                <button type="submit" disabled={submitting} data-testid="booking-submit" className="btn-gold-pro w-full justify-center mt-6 disabled:opacity-60">
                  {submitting ? <Loader2 size={18} className="animate-spin" /> : null}
                  {submitting ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Bottom features */}
      <section className="py-12 px-5 md:px-8 border-t border-[#322a20] bg-[#0f0d0b]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: "Fast Response", text: "We aim to reply within 24 hours." },
            { icon: ShieldCheck, title: "Fully Insured", text: "Peace of mind for your event." },
            { icon: ChefHat, title: "Tailored Menus", text: "We can accommodate your needs." },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon size={24} className="text-[#c9a04e] shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-[#f5f1e8] text-sm uppercase tracking-wide">{f.title}</h4>
                <p className="text-[#b0a894] font-body text-sm">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <MobileBookBar />
    </div>
  );
}
