import React, { Component } from "react";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import one from "../../../assets/05000619000.jpg";
import two from "../../../assets/30504039000.jpg";
import three from "../../../assets/30506238000.jpg";

class carousel extends Component {
  state = {
    items: [
      // {
      //   title: one,
      //   title:two,
      //   title:three,
      // },
    ],
  };
  render() {
    //console.log(property.pic1);

    return (
      <Carousel className="carousel__container mt-3 mb-1 ">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel__picture"
            src={one}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel__picture"
            src={two}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel__picture"
            src={three}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default carousel;
