import React from "react";
import { Element } from "react-scroll";
import "../styles/about.css";

import img1 from "../assets/aboutUs/1.jpg";
import img2 from "../assets/aboutUs/2.jpg";
import img3 from "../assets/slide3.jpg";
import img4 from "../assets/aboutUs/3.jpg";

import TwoColumnImageSection from "../components/TwoColumnImageSection";

const About = () => {
  const images = [img1, img2, img3, img4];
  const customRadius = ["0", "12px", "12px", "0"];
  const description = [
    `<strong>Iron Shield</strong> has been actively involved in the <strong>design, fabrication, assembly</strong>, and <strong>installation of steel structures</strong> for key sectors across the Gulf region. Headquartered in <strong>Jeddah, KSA</strong>, we have built a strong reputation over the past six years for delivering comprehensive engineering services to major clients.`,
    `Iron Shield is led by a team of <strong>dedicated and highly qualified professionals</strong> who are committed to understanding and meeting the unique needs of our clients. Continuously striving for excellence, our team actively seeks <strong>innovative solutions</strong> and embraces <strong>new technologies and fabrication processes</strong> to advance the steel fabrication industry.`,
    `Our <strong>20,000 sq ft facility</strong> is fully equipped for <strong>comprehensive fabrication needs</strong>. With in-house <strong>detailing, quality control</strong>, and a team of skilled technicians, Iron Shield leads the industry in <strong>reliability, innovation</strong>, and <strong>engineering excellence</strong>.`,
  ];

  return (
    <Element name="about" className="bg-body-tertiary section-offset">
      <div className="container py-5 overflow-hidden">
        <h5 className="text-uppercase fw-bold text-center mb-4">About Us</h5>

        <TwoColumnImageSection
          title="Established in 2018"
          description={description}
          images={images}
          customRadius={customRadius}
          imageLeft={false}
          
        />

        {/* Vision & Mission untouched */}
        <div
          className="row justify-content-center gx-4 gy-4 mt-1"
          data-aos="fade-up"
        >
          <div className="col-md-6">
            <div className="vision-mission-card">
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-muted text-justify">
                To be <strong>pioneers in advancing economic growth</strong> and{" "}
                <strong>community development</strong>. To emerge as a{" "}
                <strong>comprehensive service provider</strong> for the
                industrial sector by delivering <strong>cost-effective</strong>{" "}
                and <strong>reliable solutions</strong>. To build{" "}
                <strong>industry-leading brands</strong> that consistently{" "}
                <strong>exceed customer expectations</strong> through the
                delivery of <strong>cutting-edge technologies</strong> and{" "}
                <strong>dependable services</strong>.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="vision-mission-card">
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted text-justify">
                At <strong>Iron Shield</strong>, our mission is to deliver{" "}
                <strong>high-quality steel fabrication solutions</strong>{" "}
                through <strong>innovation, precision</strong>, and{" "}
                <strong>reliability</strong>. We are committed to conducting our
                business with <strong>fairness, honesty</strong>, and{" "}
                <strong>transparency</strong>, ensuring trust and long-term
                partnerships with our <strong>clients, employees</strong>, and{" "}
                <strong>stakeholders</strong>. By continuously embracing{" "}
                <strong>new technologies</strong> and maintaining the{" "}
                <strong>highest standards of quality</strong>, we aim to be the{" "}
                <strong>leading choice</strong> for steel structure solutions
                across the <strong>Gulf region</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
