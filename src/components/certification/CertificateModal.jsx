import React, { useEffect, useRef, useState } from "react";
import "../../styles/certificates.css";

const CertificateModal = ({ cert, onClose, onNext, onPrev }) => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    modalRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") handleClose();
  };

  return (
    <div
      className="modal-backdrop-custom"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onKeyDown={handleKeyDown}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1050,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "1rem",
          width: "95%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          border: "1px solid #ddd",
          transform: visible ? "scale(1)" : "scale(0.9)",
          opacity: visible ? 1 : 0,
          transition: "all 0.3s ease",
        }}
      >
        {/* Desktop top bar */}
        <div className="d-flex justify-content-between align-items-center mb-2 d-none d-md-flex">
          <h6 className="modal-title m-0">{cert.title}</h6>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close modal"
          />
        </div>

        {/* Mobile title center */}
        <div className="d-block d-md-none mb-2">
          <h6 className="modal-title text-center">{cert.title}</h6>
        </div>

        {/* Framed image */}
        <div className="certificate-modal-img-wrapper mx-auto my-3">
          <img
            src={cert.src}
            alt={cert.alt || cert.title}
            className="certificate-modal-img"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <p className="mt-2 text-muted mb-2 small">{cert.subtitle}</p>

        {/* Navigation Buttons + Center X on mobile */}
        <div className="d-flex justify-content-between align-items-center px-3 mt-3">
          <button className="btn btn-outline-secondary btn-sm" onClick={onPrev}>
            ← Prev
          </button>

          <button
            className="btn btn-outline-danger btn-sm d-block d-md-none"
            onClick={handleClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          <button className="btn btn-outline-secondary btn-sm" onClick={onNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
