import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
const Carosule = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ height: "45rem" }}
            src="https://voicebot.ai/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">PROSHOP</h3>
            <p className="text-dark">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ height: "45rem" }}
            src="https://reviewed-com-res.cloudinary.com/image/fetch/s--V4Hmlw1f--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_xy_center,q_auto,w_972,x_1651,y_2005/https://reviewed-production.s3.amazonaws.com/1557334966467/Amazon-Echo-Devices-Hero-Amazon.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">PROSHOP</h3>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ height: "45rem" }}
            src="https://primesmarthouse.com/wp-content/uploads/2020/12/texto-13.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">PROSHOP</h3>
            <p className="text-dark">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carosule;
