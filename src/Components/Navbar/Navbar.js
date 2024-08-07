import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
function Navbar() {
  const [bg, setBg] = useState(false);
  const menuRef = useRef();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setBg(true);
    } else {
      setBg(false);
    }
  });

  function toggleMenu() {
    menuRef.current.classList.toggle("toggle");
  }
  return (
    <nav className={bg ? "addBg" : ""}>
      <div className="nav-container">
        <div className="logo">
          <h3>
            Ethio<span id="club">Club</span>
          </h3>
        </div>
        <ul ref={menuRef} className="toggle">
          <li>
            <AnchorLink href="#home" offset="100"  className="anchor-link">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#event" offset="100"  className="anchor-link">
              Events
            </AnchorLink>
          </li>
          <li>
         
            <AnchorLink href="#gallery" offset="100" className="anchor-link">
              Gallery
            </AnchorLink>
          </li>
          <li><AnchorLink href="#footer" className="anchor-link">Socials</AnchorLink></li>
        </ul>
        <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}

export default Navbar;
