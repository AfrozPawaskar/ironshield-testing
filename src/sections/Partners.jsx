import React, { useEffect, useRef } from "react";
import "../styles/partners.css";

const logoModules = import.meta.glob("../assets/partners/*.jpg", { eager: true });
const logos = Object.entries(logoModules).map(([path, mod]) => ({
  src: mod.default,
  name: path.split("/").pop().replace(".jpg", "").replace(/[-_]/g, " "),
}));

// Duplicate logos for smooth infinite scroll
const scrollingLogos = [...logos, ...logos];

const Partners = () => {
  const marqueeRef = useRef();

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = marquee?.querySelector(".marquee-content");

    if (marquee && content) {
      const contentWidth = content.offsetWidth;
      const baseSpeed = 50; // px per second
      const duration = contentWidth / baseSpeed;

      marquee.style.setProperty("--scroll-duration", `${duration}s`);
    }
  }, []);

  return (
    <section
      className="partners-section py-5 bg-body-tertiary"
      aria-label="Partners and Clients"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="text-center mb-5">
        <h5 className="fw-bold">PARTNERS</h5>
        {/* <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          We’re proud to be associated with renowned companies and organizations across the globe.
        </p> */}
      </div>

      <div
        className="marquee"
        ref={marqueeRef}
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
        onDoubleClick={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      >
        <ul className="marquee-content list-unstyled d-flex m-0 p-0">
          {scrollingLogos.map((logo, i) => (
            <li
              className="logo-container"
              key={i}
              style={{ listStyle: "none" }}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                draggable={false}
                loading="lazy"
                onDragStart={(e) => e.preventDefault()}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
