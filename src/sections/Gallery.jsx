import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "../styles/gallery.css";
import "../styles/machine.css";

// Dynamically import all JPG images
const allGalleryImages = Object.entries(
  import.meta.glob("../assets/gallery/**/*.jpg", {
    eager: true,
    import: "default",
  })
);

// Format image objects with label and grid size
const images = allGalleryImages.map(([path, src], idx) => {
  const match = path.match(/([^\/]+)\.jpg$/i);
  const rawLabel = match ? match[1] : `Image ${idx + 1}`;
  const formattedLabel = rawLabel
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    src,
    label: formattedLabel,
    size: ["xl"][idx % 8], // Cycle for variety
  };
});

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(15); // default for desktop

  const openModal = (item, index) => {
    setModalImage(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setModalImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setModalImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Detect screen size and adjust initial visible count
  useEffect(() => {
    const updateInitialCount = () => {
      setInitialCount(window.innerWidth < 576 ? 6 : 15);
    };
    updateInitialCount();
    window.addEventListener("resize", updateInitialCount);
    return () => window.removeEventListener("resize", updateInitialCount);
  }, []);

  // Keyboard modal navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalImage) return;
      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          showPrev();
          break;
        case "ArrowRight":
          showNext();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalImage, currentIndex]);

  const visibleImages = showAll ? images : images.slice(0, initialCount);

  return (
    <Element
      name="gallery"
      id="gallery"
      className="section-offset bg-body-tertiary"
    >
      <div className="container py-5">
        <h5 className="text-uppercase fw-bold text-center mb-4">OUR WORK</h5>
        <div className="asymmetric-grid" data-aos="fade-up">
          {visibleImages.map((item, idx) => (
            <figure
              key={idx}
              className={`gallery-tile tile-${item.size}`}
              onClick={() => openModal(item, idx)}
              style={{ cursor: "zoom-in" }}
            >
              <div className="about-image-card position-relative overflow-hidden h-100 w-100">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="w-100 h-100 image-hover-effect"
                  style={{ objectFit: "cover" }}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <figcaption className="image-hover-text">
                  <span className="machine-name">{item.label}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {images.length > initialCount && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-dark"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {modalImage && (
          <div className="image-modal" onClick={closeModal}>
            <div
              className="image-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={modalImage.src} alt={modalImage.label} />
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
              <div className="modal-caption">{modalImage.label}</div>
              <button className="nav-arrow left" onClick={showPrev}>
                &#8592;
              </button>
              <button className="nav-arrow right" onClick={showNext}>
                &#8594;
              </button>
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Gallery;
