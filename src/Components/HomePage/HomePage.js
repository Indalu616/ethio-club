import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Blogs />
      <Footer />
    </>
  );
}

export default HomePage;
