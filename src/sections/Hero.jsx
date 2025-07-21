import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../assets/../assets/aboutUs/3.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import "../styles/hero-section.css";

const slides = [
  {
    image: slide1,
    title: "IronShield Factory",
    subtitle: "Precision | Innovation | Reliability",
  },
  {
    image: slide2,
    title: "Advanced Steel Fabrication",
    subtitle: "Delivering Quality Across Industries",
  },
  {
    image: slide3,
    title: "Engineering Excellence",
    subtitle: "Building a Stronger Tomorrow",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <Element name="hero">
      <section
        className="hero-section fixed-height"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="hero-overlay">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
