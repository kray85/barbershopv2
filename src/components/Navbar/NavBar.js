import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  function handleClick() {
    const section = document.getElementById("services");
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
      offsetTop: 1500,
    });
  }

  return (
    <nav id="home">
      <div className="navbar" style={{ backgroundColor: `${color}` }}>
        <div className="navbar-nav">
          <h4 style={{ color: `${textColor}` }}>
            <a href="/">
              {" "}
              The Barber<span>Shop</span>
            </a>
          </h4>

          <ul className="navbar-links" style={{ color: `${textColor}` }}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Meet the Team">Meet the Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="mobile-btn" onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size="lg" style={{ color: "white" }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>

          {/* Mobile Menu */}
          <div className={isOpen ? "mobile-menu__open" : "mobile-menu__close"}>
          <ul>
            <li>
              <a href="#home" onClick={() => toggleMenu(false)}>Home</a>
            </li>
            <li>
              <a href="#services" onClick={() => toggleMenu(false)}>Services</a>
            </li>
            <li>
              <a href="#about" onClick={() => toggleMenu(false)}>About</a>
            </li>
            <li>
              <a href="#team" onClick={() => toggleMenu(false)}>Meet the Team</a>
            </li>
            <li>
              <a href="#contact" onClick={() => toggleMenu(false)}>Contact</a>
            </li>
          </ul>
        </div>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
