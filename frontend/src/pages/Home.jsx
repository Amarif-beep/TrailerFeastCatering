import React from "react";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Trailers from "../components/sections/Trailers";
import Reviews from "../components/sections/Reviews";
import Gallery from "../components/sections/Gallery";
import FAQ from "../components/sections/FAQ";
import FindUs from "../components/sections/FindUs";
import Booking from "../components/sections/Booking";
import Footer from "../components/sections/Footer";
import MobileBookBar from "../components/MobileBookBar";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative graffiti-bg">
      <Header />
      <main>
        <Hero />
        <Trailers />
        <Reviews />
        <Gallery />
        <FAQ />
        <FindUs />
        <Booking />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}
