import React from "react";
import "../styles/top-header.css"

const TopHeader = () => {
  return (
    <div className="top-header bg-dark text-white py-2 px-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap small">
        <span><strong>📍</strong> Karama Industrial Scheme, Jeddah</span>
        <span><strong>📞</strong> +966 5 1234 5678</span>
        <span><strong>✉️</strong> info@ironshield-factory.com</span>
      </div>
    </div>
  );
};
export default TopHeader;
