import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery_1 from "../../images/gallery-1.jpg";
import gallery_2 from "../../images/gallery-2.jpg";
import gallery_3 from "../../images/gallery-3.jpg";
import gallery_4 from "../../images/gallery-4.jpg";
import gallery_5 from "../../images/gallery-5.jpg";
import gallery_6 from "../../images/gallery-6.jpg";
import gallery_7 from "../../images/gallery-7.jpg";
function Gallery() {
  useEffect(()=>{
    AOS.init({duration:3000})
  })
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="gallery" id="gallery" data-aos="fade-up">
      <h2>Explore our Gallery</h2>
      <Carousel
        responsive={responsive}
        className="carousel"
        infinite={true}
        autoPlay={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <div className="item">
          <img src={gallery_1} alt="gallery"></img>
        </div>
        <div className="item">
          <img src={gallery_2} alt="gallery"></img>
        </div>
        <div className="item">
          <img src={gallery_3} alt="gallery"></img>
        </div>
        <div className="item">
          <img src={gallery_4} alt="gallery"></img>
        </div>
        <div className="item">
          <img src={gallery_5} alt="gallery"></img>
        </div>
        <div className="item">
          <img src={gallery_6} alt="gallery"></img>
        </div>
        <div className="item">
          <img src={gallery_7} alt="gallery"></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
