import React, { useEffect, useState } from "react";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import Menu from "../components/sections/Menu";
import About from "../components/sections/About";
import Reviews from "../components/sections/Reviews";
import FindUs from "../components/sections/FindUs";
import Booking from "../components/sections/Booking";
import Footer from "../components/sections/Footer";

export default function Home() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/menu`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => setMenu(data))
      .catch(() => setMenu(null));
  }, []);

  return (
    <div data-testid="home-page" className="relative">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Menu menu={menu} />
        <About />
        <Reviews />
        <FindUs />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
