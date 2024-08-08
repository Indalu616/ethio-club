import React, { useRef } from "react";
import "./PrivateNav.css";
import { Link } from "react-router-dom";
function PrivateNav() {
  const menuRef = useRef();

  function toggleMenu() {
    menuRef.current.classList.toggle("toggle");
  }
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <h3>
            Ethio<span id="club">Club</span>
          </h3>
        </div>
        <ul ref={menuRef} className="toggle">
          <li>
            <Link to="/ethio-club" className="anchor-link">
              Home
            </Link>
          </li>
          <li>
            <i class="fa-brands fa-facebook social"></i>
          </li>
          <li>
            <i class="fa-brands fa-square-instagram social"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter social"></i>
          </li>
        </ul>
        <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}

export default PrivateNav;
