import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import place from "../../images/wollo.png";
import wave from "../../images/hero-wave-svg.svg";
function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
  return (
    <div className="hero" id="home">
      <div className="hero-container">
        <div className="left-hero">
          <h2 data-aos="zoom-in">Welcome to Ethio Club</h2>
          <p data-aos="zoom-in">
            Discover the vibrant culture, rich language, and exquisite art of
            Ethiopia with EthioClub. Join us in celebrating and preserving our
            heritage through engaging events and activities. Join EthioClub and
            be a part of a dynamic community that celebrates the heritage of
            Ethiopia.
          </p>
        </div>
        <div className="right-hero">
          <img src={place} alt="place-in-ethiopia" data-aos="zoom-in"></img>
        </div>
      </div>
      <img src={wave} id="wave"></img>
    </div>
  );
}

export default Hero;
