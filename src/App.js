import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
