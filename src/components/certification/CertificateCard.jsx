import React from "react";
import "../../styles/certificates.css";

const CertificateCard = ({ cert, index, onClick }) => {
  return (
    <div
      className="certificate-card text-center"
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick(index)}
      title={cert.title}
      data-aos="fade-up"
    >
      <div className="certificate-image-wrapper">
        <img
          src={cert.src}
          alt={cert.alt || cert.title}
          className="certificate-img"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <div className="certificate-info py-3 px-2">
        <h6 className="fw-bold mb-1">{cert.title}</h6>
        <p className="text-muted small mb-2">{cert.subtitle}</p>
        <button className="btn btn-outline-primary btn-sm" onClick={(e) => {
          e.stopPropagation();
          onClick(index);
        }}>
          View Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
