import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Footer/>
    </div>
  );
}

export default App;
