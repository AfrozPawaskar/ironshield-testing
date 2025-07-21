import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import CertificateCard from "../components/certification/CertificateCard";
import CertificateModal from "../components/certification/CertificateModal";

import cert1 from "../assets/c1.jpg";
import cert2 from "../assets/c2.jpg";
import cert3 from "../assets/c3.jpg";

const certificates = [
  {
    src: cert1,
    title: "ISO 9001",
    subtitle: "Quality Management",
    alt: "ISO 9001 Certificate for Quality Management",
  },
  {
    src: cert2,
    title: "ISO 14001",
    subtitle: "Environmental Management",
    alt: "ISO 14001 Certificate for Environmental Standards",
  },
  {
    src: cert3,
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety",
    alt: "ISO 45001 Certificate for Workplace Safety",
  },
];

const Certifications = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const handleShowModal = (index) => {
    setModalIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = (e) => {
    if (modalIndex === null) return;
    if (e.key === "Escape") handleCloseModal();
    else if (e.key === "ArrowRight") setModalIndex((prev) => (prev + 1) % certificates.length);
    else if (e.key === "ArrowLeft") setModalIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);

  return (
    <Element name="certification" className="section-offset">
      <section className="container py-5" aria-label="Certifications Section">
        <div className="text-center mb-5">
          <h5 className="text-uppercase fw-bold">Certifications</h5>
        </div>

        <div className="row justify-content-center g-4">
          {certificates.map((cert, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              key={index}
            >
              <CertificateCard cert={cert} index={index} onClick={handleShowModal} />
            </div>
          ))}
        </div>

        {modalIndex !== null && (
          <CertificateModal
            cert={certificates[modalIndex]}
            onClose={handleCloseModal}
            onNext={() => setModalIndex((modalIndex + 1) % certificates.length)}
            onPrev={() =>
              setModalIndex(
                modalIndex === 0 ? certificates.length - 1 : modalIndex - 1
              )
            }
          />
        )}
      </section>
    </Element>
  );
};

export default Certifications;
