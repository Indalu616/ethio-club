import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="logo">
          <h2>Ethio<span>Club</span></h2>
        </div>
        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
