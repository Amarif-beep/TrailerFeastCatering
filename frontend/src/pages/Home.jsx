import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Truck,
  Settings,
  UtensilsCrossed,
  Home as HomeIcon,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
  Star,
  Lock,
  ArrowDown,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import MobileBookBar from "../components/MobileBookBar";
import Reveal from "../components/Reveal";
import MaskedLines from "../components/MaskedLines";
import EditorialMarquee from "../components/EditorialMarquee";
import { TRAILERS, COMING_SOON, WHY_BOOK } from "../lib/trailers";
import { IMAGES, REVIEWS } from "../lib/content";

const ICONS = {
  settings: Settings,
  utensils: UtensilsCrossed,
  home: HomeIcon,
  check: CheckCircle2,
};

const CHAPTERS = [
  {
    n: "01",
    title: "Fire, Iron & Craft",
    body:
      "Every plate leaves our hatch made from scratch — smashed on the griddle, slow-cooked in the pan, plated by hand. No shortcuts, no reheats, no compromises.",
  },
  {
    n: "02",
    title: "Trailers, Not Trucks",
    body:
      "Fully self-contained, event-ready trailers built for indoor halls and outdoor fields alike. Silent power, gas-safe kitchens, 5★ hygiene wherever we roll.",
  },
  {
    n: "03",
    title: "Your Guests, Fed Right",
    body:
      "From 40 covers to 400. Corporate lunches, weddings, private parties, festivals — custom menus, dietary options, and a service that keeps the queue moving.",
  },
];

const MARQUEE_ITEMS = [
  "Jacket Potatoes",
  "Loaded Fries",
  "Smash Burgers",
  "Goulash",
  "Pulled Pork",
  "Fresh Crepes",
  "Chilli con Carne",
  "Buttermilk Chicken",
];

const REVEAL_UP = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  // Parallax: image drifts, vignette fades on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <div data-testid="home-page" className="relative premium-bg">
      <Header />

      {/* HERO — kinetic, parallax, masked line reveal */}
      <section
        ref={heroRef}
        id="hero"
        data-testid="hero-section"
        className="relative min-h-[100vh] flex items-end pt-24 pb-16 overflow-hidden grain"
      >
        {/* Parallax backdrop */}
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={IMAGES.trailerRearSun}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0b] via-[#0f0d0b]/85 to-[#0f0d0b]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-transparent to-transparent" />
        </motion.div>

        {/* Number tag — top-right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-28 right-5 md:right-10 z-10 hidden md:flex items-center gap-3"
          data-testid="hero-chapter-tag"
        >
          <span className="font-editorial text-[#c9a04e] text-2xl">01</span>
          <span className="h-px w-8 bg-[#c9a04e]/60" />
          <span className="font-display text-[#c9a04e] uppercase text-xs tracking-[0.28em]">
            Street Food Season
          </span>
        </motion.div>

        {/* Left side rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.3 }}
          className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4"
        >
          <span className="rotate-180 [writing-mode:vertical-rl] font-display uppercase text-[10px] tracking-[0.35em] text-[#8a8172]">
            Est. Midlands · UK
          </span>
          <span className="h-24 w-px bg-gradient-to-b from-[#c9a04e] to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY }}
          className="relative max-w-7xl mx-auto px-5 md:px-8 w-full z-10"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="gold-rule mb-6"
            />

            <MaskedLines
              data-testid="hero-headline"
              lines={["Street food.", "Done right."]}
              className="font-display uppercase text-white text-[3.4rem] sm:text-7xl lg:text-8xl leading-[0.86] tracking-tight"
              highlightIndex={1}
              highlightClassName="font-editorial italic normal-case text-gold-solid tracking-tight"
              delay={0.35}
              stagger={0.14}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-[#cfc7b8] text-base sm:text-lg leading-relaxed font-body"
            >
              A fleet of premium catering trailers. Fresh jacket potatoes,
              loaded fries, smashed burgers &mdash; and Hungarian classics
              coming soon. Available for events, festivals, corporate catering
              and private hire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <button
                data-testid="hero-cta-vans"
                onClick={() =>
                  document
                    .getElementById("vans")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gold-pro"
              >
                <Truck size={18} /> View Our Vans
              </button>
              <Link
                to="/book"
                className="btn-outline-gold"
                data-testid="hero-cta-book"
              >
                <CalendarDays size={18} /> Book Now
              </Link>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-16 flex items-center gap-3"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#c9a04e]"
            >
              <ArrowDown size={16} />
            </motion.span>
            <span className="font-display uppercase text-[10px] tracking-[0.35em] text-[#8a8172]">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* EDITORIAL MARQUEE */}
      <section
        data-testid="marquee-section"
        className="relative border-y border-[#322a20] bg-[#0b0907]"
      >
        <EditorialMarquee items={MARQUEE_ITEMS} />
      </section>

      {/* MANIFESTO — numbered chapters */}
      <section
        id="manifesto"
        data-testid="manifesto-section"
        className="relative py-24 md:py-32 px-5 md:px-8 bg-[#0f0d0b] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={REVEAL_UP}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-4 mb-16"
          >
            <span className="font-editorial text-[#c9a04e] text-2xl">§</span>
            <span className="font-display uppercase text-[#c9a04e] text-xs tracking-[0.3em]">
              The Manifesto
            </span>
            <span className="h-px flex-1 bg-[#322a20]" />
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {CHAPTERS.map((c, i) => (
              <motion.article
                key={c.n}
                data-testid={`chapter-${c.n}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={REVEAL_UP}
                transition={{
                  duration: 0.9,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                <div className="md:col-span-3 flex md:block items-baseline gap-4">
                  <span className="chapter-number text-[6rem] md:text-[9rem]">
                    {c.n}
                  </span>
                </div>
                <div className="md:col-span-9 md:pl-8 md:border-l md:border-[#322a20]">
                  <h3 className="font-display text-white uppercase text-3xl sm:text-4xl md:text-5xl leading-[0.95] mb-5">
                    {c.title}
                  </h3>
                  <p className="text-[#b0a894] font-body text-base md:text-lg leading-relaxed max-w-2xl">
                    {c.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VANS */}
      <section
        id="vans"
        data-testid="vans-section"
        className="relative py-20 md:py-28 px-5 md:px-8 panel-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={REVEAL_UP}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#c9a04e]" />
              <span className="font-display text-[#c9a04e] uppercase text-xs tracking-[0.3em]">
                Chapter 02
              </span>
              <span className="h-px w-8 bg-[#c9a04e]" />
            </div>
            <h2 className="font-display text-[#1a1611] text-4xl sm:text-5xl uppercase tracking-tight">
              The <span className="font-editorial italic normal-case text-[#c9a04e]">Fleet</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TRAILERS.map((t, i) => (
              <motion.div
                key={t.id}
                data-testid={`van-card-${t.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white border border-[#e2dccd] rounded-lg overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-shadow"
              >
                <div className="h-52 overflow-hidden spotlight-frame border-0 rounded-none">
                  <img
                    src={t.cardImg}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-display text-[#1a1611] text-2xl uppercase mb-3">
                    {t.name}
                  </h3>
                  <p className="text-[#6a6355] font-body text-sm leading-relaxed mb-6 flex-1">
                    {t.tagline}
                  </p>
                  <Link
                    to={`/vans/${t.id}`}
                    data-testid={`view-van-${t.id}`}
                    className="btn-gold-pro justify-center text-xs"
                  >
                    View Van <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Coming soon */}
            <motion.div
              data-testid="van-card-coming-soon"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-[#1a1611] border border-[#322a20] rounded-lg overflow-hidden h-full flex flex-col"
            >
              <div className="h-52 overflow-hidden relative bg-black">
                <img
                  src={COMING_SOON.cardImg}
                  alt={COMING_SOON.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-3 left-1/2 -translate-x-1/2">
                  <span className="font-display uppercase text-[#c9a04e] text-xs tracking-[0.2em] bg-black/70 border border-[#c9a04e] px-3 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="font-display text-[#f5f1e8] text-2xl uppercase mb-3">
                  {COMING_SOON.name}
                </h3>
                <p className="text-[#b0a894] font-body text-sm leading-relaxed mb-6 flex-1">
                  {COMING_SOON.tagline}
                </p>
                <span className="inline-flex items-center justify-center gap-2 font-display uppercase text-xs tracking-[0.14em] text-[#8a8172] border border-[#322a20] rounded px-4 py-3">
                  <Lock size={14} /> Not Yet Available
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY BOOK WITH US */}
      <section
        data-testid="why-book-section"
        className="relative py-20 md:py-28 px-5 md:px-8 bg-[#0f0d0b] overflow-hidden grain"
      >
        <div className="relative max-w-6xl mx-auto z-10">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a04e]" />
              <span className="font-display text-[#c9a04e] uppercase text-xs tracking-[0.3em]">
                Chapter 03
              </span>
              <span className="h-px w-8 bg-[#c9a04e]" />
            </div>
            <h2 className="mt-3 font-display text-white text-4xl sm:text-5xl uppercase tracking-tight">
              Why <span className="font-editorial italic normal-case text-[#c9a04e]">book</span> with us?
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_BOOK.map((w, i) => {
              const Ic = ICONS[w.icon] || Settings;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#c9a04e]/40 flex items-center justify-center transition-colors hover:border-[#c9a04e]">
                    <Ic size={26} className="text-[#c9a04e]" />
                  </div>
                  <h3 className="font-display text-[#f5f1e8] text-lg uppercase tracking-wide mb-2">
                    {w.title}
                  </h3>
                  <p className="text-[#b0a894] font-body text-sm leading-relaxed">
                    {w.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS strip */}
      <section
        id="reviews"
        data-testid="reviews-section"
        className="relative py-16 md:py-24 px-5 md:px-8 bg-[#14110c]"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={18}
                className="fill-[#c9a04e] text-[#c9a04e]"
              />
            ))}
            <span className="font-display text-[#f5f1e8] text-sm uppercase tracking-[0.16em] ml-2">
              100% Recommended &middot; 16 Reviews
            </span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <motion.div
                key={i}
                data-testid={`review-card-${i}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-pro p-6 h-full"
              >
                <span className="font-editorial text-[#c9a04e] text-3xl leading-none">
                  &ldquo;
                </span>
                <p className="font-body text-[#cfc7b8] text-sm leading-relaxed mb-4 -mt-2">
                  {r.quote}
                </p>
                <div className="font-display text-[#c9a04e] text-sm uppercase tracking-wider">
                  {r.name}
                </div>
                <div className="text-xs text-[#8a8172]">{r.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECK AVAILABILITY banner */}
      <section
        data-testid="check-availability-banner"
        className="relative py-14 md:py-16 px-5 md:px-8"
        style={{ background: "linear-gradient(180deg,#dcb467,#c9a04e)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <CalendarDays size={48} className="text-[#17130d] shrink-0" />
          <div className="flex-1">
            <h2 className="font-display text-[#17130d] text-2xl sm:text-3xl uppercase leading-tight">
              Check Availability
            </h2>
            <p className="text-[#3a2f1a] font-body mt-1">
              View our live availability calendar and book the perfect van for
              your event.
            </p>
          </div>
          <motion.button
            data-testid="banner-check-btn"
            onClick={() => navigate("/book")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0 bg-[#17130d] text-[#f5f1e8] font-display uppercase text-sm tracking-[0.14em] px-6 py-3 rounded hover:bg-black transition-colors"
          >
            Check Availability
          </motion.button>
        </div>
      </section>

      <Footer />
      <MobileBookBar />
    </div>
  );
}
