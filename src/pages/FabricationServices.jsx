import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

const FabricationServices = ({ disableAos = false }) => {
  useEffect(() => {
    if (!disableAos) {
      AOS.init({ duration: 1000 });
    }
  }, [disableAos]);

  const excludeList = [
    "Quard - Wear Resistant Plates",
    "High Strength Steel",
    "Cladded Plate",
  ];

  return (
    <section>
      <div className="container">
        <h5 className="text-center fw-bold mb-5">FABRICATION</h5>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-6"
              {...(!disableAos ? { "data-aos": "fade-up" } : {})}
            >
              <ServiceCard
                title={service.category}
                image={service.image}
                items={service.items}
                exclude={excludeList}
                basePath="/products/fabrication"
                disableAos={disableAos}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricationServices;
