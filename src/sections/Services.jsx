import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" id="services">
      <div className="container">
        <h5 className="text-center fw-bold mb-5">OUR SERVICES</h5>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <ServiceCard
                title={service.category}
                image={service.image}
                items={service.items}
                  disableAos={service.category === "Fabrication"} // 👈 Conditionally disable AOS

              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
