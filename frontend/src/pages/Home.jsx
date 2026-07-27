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
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative light-home">
      <Header />
      <main>
        <Hero />
        <Reveal><Trailers /></Reveal>
        <Reveal><Reviews /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FindUs /></Reveal>
        <Reveal><Booking /></Reveal>
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}
