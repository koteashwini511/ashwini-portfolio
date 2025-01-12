import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import portfolioLogo from "../images/portfolioLogo.png";
import "../styles.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNavbarOpen(false); // Close the toggle when a link is clicked
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container d-flex align-items-center" ref={navbarRef}>
        {/* Logo */}
        <a href="#home" className="navbar-brand">
          <img src={portfolioLogo} alt="Logo" className="navbar-logo" />
        </a>

        {/* Email address under the logo only when toggle is visible */}
        {navbarOpen && (
          <div className="navbar-email d-lg-none mt-2">
            <FaEnvelope size={20} color="#333" />
            <span className="ms-2 text-dark">koteashwini511@gmail.com</span>
          </div>
        )}

        {/* Hamburger button for smaller screens */}
        <button
          className={`navbar-toggler ${navbarOpen ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={navbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link text-dark ${activeLink === "home" ? "active" : ""}`}
                href="#home"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-dark ${activeLink === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-dark ${activeLink === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={() => handleLinkClick("projects")}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Email Address for large screens */}
        <div className="d-none d-lg-flex align-items-center">
          <FaEnvelope size={20} color="#333" />
          <span className="ms-2 text-dark">koteashwini511@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
