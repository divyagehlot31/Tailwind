import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sponsers from "../components/Sponsers";
import Offer from "../components/Offer";
import Platform from "../components/Platform";
import Contact1 from "../components/Contact1";
import Faq from "../components/Faq";
import Contact2 from "../components/Contact2.JSX";
import Footer from "../components/Footer";
import Serve from "../components/Serve";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsers />
      <Serve />
      <Offer />
      <Platform />
      <Contact1 />
      <Faq />
      <Contact2 />
      <Footer />
    </>
  );
}

export default Home;
