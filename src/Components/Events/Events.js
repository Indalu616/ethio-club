import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Events.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { eventLists } from "../EventLists/EventList";
import comingsoon3 from "../../Icons/coming-soon-1.gif";
function Events() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
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
    <div className="events" id="event">
      <h2>Upcoming Events</h2>
      <Carousel
        responsive={responsive}
        className="carousel"
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {eventLists?.map((item, index) => {
          return (
            <div className="event-item" key={index} data-aos="zoom-in">
              <div className="event-header">
                <span className="date">
                  {item.date} {item.month} {item.year}
                </span>
                <span className="coming-soon">
                  <img src={comingsoon3} alt="coming-soon"></img>
                </span>
              </div>

              <h3>{item.title}</h3>
              <img src={item.url} alt={item.title}></img>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Events;
