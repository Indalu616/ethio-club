import React, { useEffect } from "react";
import "./About.css";
import group from "../../images/discussion-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="about" id="about">
      <h2 data-aos="fade-up">What is EthioClub?</h2>
      <div className="about-container" data-aos="fade-up">
        <div className="about-left">
          <p data-aos="zoom-in">
            EthioClub is a vibrant student organization dedicated to showcasing
            the rich cultural heritage, diverse languages, and exquisite art of
            Ethiopia at our university. Our mission is to celebrate and preserve
            the unique traditions and history of Ethiopia, fostering a deeper
            understanding and appreciation among students, faculty, and the
            wider community.
          </p>
          <br></br>
          <p data-aos="zoom-in">
            EthioClub organizes various events and activities that highlight the
            diverse cultural practices of Ethiopia. From traditional dance
            performances and music to culinary experiences and art exhibitions,
            our events provide a platform for students to immerse themselves in
            the beauty and richness of Ethiopian culture.
          </p>
          <br></br>
          <p data-aos="zoom-in">
            Understanding the importance of language in cultural identity,
            EthioClub offers language learning sessions and workshops. These
            sessions aim to teach the basics of Amharic and other Ethiopian
            languages, promoting linguistic diversity and encouraging
            cross-cultural communication.
          </p>
          <br></br>
          <p data-aos="zoom-in">
            EthioClub is committed to promoting Ethiopian art in all its forms.
            We host art exhibitions, film screenings, and literature readings,
            providing a space for Ethiopian artists and writers to share their
            work. By doing so, we aim to inspire creativity and artistic
            expression within our community.
          </p>
          <br></br>
          <p data-aos="zoom-in">
            Join EthioClub and be a part of a dynamic community that celebrates
            the heritage of Ethiopia. Whether you're interested in learning a
            new language, experiencing traditional dances, or exploring
            Ethiopian art, EthioClub has something for everyone. Together, let's
            celebrate and preserve the beauty of Ethiopia at our university.
          </p>
        </div>
        <div className="about-right" data-aos="zoom-in">
          <img src={group} alt="about-image" data-aos="zoom-in"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
