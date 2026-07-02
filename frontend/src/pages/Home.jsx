import React from "react";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import Trailers from "../components/sections/Trailers";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
import Reviews from "../components/sections/Reviews";
import FAQ from "../components/sections/FAQ";
import FindUs from "../components/sections/FindUs";
import Booking from "../components/sections/Booking";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Trailers />
        <About />
        <Gallery />
        <Reviews />
        <FAQ />
        <FindUs />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
