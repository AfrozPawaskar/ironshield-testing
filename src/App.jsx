// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Navbar from "./components/Navbar";
import DetailedProduct from "./pages/DetailedProduct";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Always remove horizontal scroll
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.scrollLeft = 0;
    document.documentElement.scrollLeft = 0;
  }, [location]);

  useEffect(() => {
    const scrollToId =
      location.state?.scrollTo || location.hash?.replace("#", "");
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });

    // First time fix on load
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    const fixScroll = () => {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
    };

    // Remove scroll on resize/orientation change
    window.addEventListener("resize", fixScroll);
    return () => window.removeEventListener("resize", fixScroll);
  }, []);

  return (
    <Router>
      <Navbar />
      <ScrollHandler />
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products/:slug" element={<DetailedProduct />} />
          <Route
            path="/products/fabrication/:slug"
            element={<ServiceDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
