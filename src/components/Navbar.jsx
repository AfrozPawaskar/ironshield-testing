import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "About", to: "about" },
  { label: "Certification", to: "certification" },
  { label: "Services", to: "services" },
  { label: "Products", to: "products" },
  { label: "Machineries", to: "machineries" },
  { label: "Gallery", to: "gallery" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (target) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } });
    }
  };

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky-top bg-light shadow-sm z-3">
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
          {/* Logo click goes to homepage */}
          <div
            className="navbar-brand d-flex align-items-center"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo}
              alt="IronShield Logo"
              height="40"
              className="me-2"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map(({ label, to }) => (
                <li className="nav-item" key={to}>
                  {location.pathname === "/" ? (
                    <ScrollLink
                      className="nav-link"
                      to={to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                    >
                      {label}
                    </ScrollLink>
                  ) : (
                    <button
                      className="nav-link btn btn-link text-decoration-none"
                      onClick={() => handleNavClick(to)}
                      style={{ cursor: "pointer" }}
                    >
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
