// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Machinery from "../sections/Machinery";
// import Navbar from "../components/Navbar";
import Partners from "../sections/Partners";
import Certifications from "../sections/Certifications";
import Services from "../sections/Services";
import Products from "../sections/Products";
import Gallery from "../sections/Gallery";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 600,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70, // adjust for sticky navbar height
        });
      }, 100); // wait for DOM to render
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>IronShield Factory | Home</title>
        <meta
          name="description"
          content="Welcome to IronShield Factory – experts in metal fabrication, welding, and machining services across industries."
        />
        <link rel="canonical" href="https://ironshield-factory.com/" />
      </Helmet>

      <main className="main-content">
        <Hero />
        <About />
        <Certifications />
        <Partners />
        <Services />
        <Products />
        <Machinery />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
