import React from "react";
import { Element } from "react-scroll";
import "../styles/about.css";
import "../styles/machine.css";

import laser from "../assets/machines/laser.jpg";
import bending from "../assets/machines/bending.jpeg";
import shearing from "../assets/machines/shearing.jpeg";
import rolling from "../assets/machines/rolling.jpeg";

import TwoColumnImageSection from "../components/TwoColumnImageSection";

const Machinery = () => {
  const images = [laser, bending, shearing, rolling];
  const labels = [
    "Laser Cutting Machine",
    "Bending Machine",
    "Shearing Machine",
    "Rolling Machine",
  ];
  const customRadius = ["12px", "0", "0", "12px"];
  const description = [
    `At <strong>Iron Shield</strong>, we operate a modern, fully equipped fabrication floor featuring advanced steel processing technologies. These precision machines streamline production, reduce manual error, and help us deliver consistent, high-quality fabrication across diverse industry applications.`,
    `Our key machinery includes: <strong>Laser Cutting Machines</strong> for high-speed, clean-edge profiling, <strong>Bending Machines</strong> for accurate angle forming, <strong>Shearing Machines</strong> for fast and precise sheet cutting, and <strong>Rolling Machines</strong> for forming cylindrical or curved steel structures. These tools empower us to handle both structural and custom steel projects with ease.`,
    `With this equipment in-house, Iron Shield significantly improves project turnaround, enhances fabrication accuracy, and guarantees on-spec delivery for sectors including construction, mining, petrochemical, and heavy industries.`,
  ];

  return (
    <Element name="machineries" className="section-offset">
      <div className="container py-5 overflow-hidden">
        <h5 className="text-uppercase fw-bold text-center mb-4">
          Our In-House Machinery
        </h5>

        <TwoColumnImageSection
          title="Advanced Steel Processing"
          description={description}
          images={images}
          labels={labels}
          customRadius={customRadius}
          imageLeft={true}
        />
      </div>
    </Element>
  );
};

export default Machinery;
