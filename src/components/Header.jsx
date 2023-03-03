import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import logo from "../assests/logo.svg"

import "../styles/header.css";

const Header = () => {

  const [showNavbar,setShowNavbar] = useState(false);
  const closeIt = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <>
      <nav>
        <NavContent />
        <div className="trans">
          <BiMenuAltRight onClick={closeIt}/>
          <div>
            <div className={`nav-menu ${showNavbar}`}>
              <div className="close-button">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div onClick={closeIt}>
                  <CgClose />
                </div>
              </div>
              <div className="stack">
                <div>
                  <a href="/#work" onClick={closeIt}>Work</a>
                </div>
                <div>
                  <a href="/#work" onClick={closeIt}>Work</a>
                </div>
                <div>
                  <a href="/#work" onClick={closeIt}>Work</a>
                </div>
                <div>
                  <a href="/#work" onClick={closeIt}>Work</a>
                </div>
                <div>
                  <a href="/#work" onClick={closeIt}>Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavContent = () => (
  <>
    <h2>Satyam.</h2>
    <div className="header-section">
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#samples">Samples</a>
      <a href="#timeline">Timeline</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact Us</a>
    </div>

    <a href="mailto:imintrouble0117@gmail.com" className="mailtoButton">
      <button>E-mail</button>
    </a>
  </>
);

export default Header;
