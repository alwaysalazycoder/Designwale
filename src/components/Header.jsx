import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import logo from "../assests/logo.svg"
import { useRef } from "react";

import "../styles/header.css";

const Header = () => {

  const navRef = useRef();
  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive");
  }  
  return (
    <>
      <nav>
        <NavContent />

        <div className="nav-btn">
          <BiMenuAltRight onClick={showNavbar}/>
        </div>
      </nav>

      <div className="responsive-navbar" ref={navRef}>
        <div className="hstack">
          <div className="nav-logo">
            <img src={logo} alt="fuck" />
          </div>
          <div className="nav-close-btn">
            <CgClose onClick={showNavbar}/>
          </div>
        </div>
        <div className="stack">
          <div>
            <a href="/#contact" onClick={showNavbar}>Work</a>
          </div>
          <div>
            <a href="/#contact" onClick={showNavbar}>Work</a>
          </div>
          <div>
            <a href="/#contact" onClick={showNavbar}>Work</a>
          </div>
          <div>
            <a href="/#contact" onClick={showNavbar}>Work</a>
          </div>
          <div>
            <a href="/#contact">Work</a>
          </div>
        </div>
      </div>
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
