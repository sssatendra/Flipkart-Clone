import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousels.css";

function Carousel1() {
  return (
    <div className="carousel__info">
      <Carousel infiniteLoop autoPlay>
        <div className="images">
          <img
            src="https://rukminim1.flixcart.com/flap/1020/360/image/ff86f79a37e772ac.jpg?q=50"
            alt=""
          />
        </div>

        <div className="image">
          <img
            src="https://rukminim1.flixcart.com/flap/1020/360/image/a80774714ffecb98.jpg?q=50"
            alt=""
          />
        </div>

        <div className="image">
          <img
            src="https://rukminim1.flixcart.com/flap/1020/360/image/da468f4b12497885.jpg?q=50"
            alt=""
          />
        </div>

        <div className="image">
          <img
            src="https://rukminim1.flixcart.com/flap/1020/360/image/89f8d817a47fa997.jpg?q=50"
            alt=""
          />
        </div>
        <img
          src="https://rukminim1.flixcart.com/flap/1020/360/image/1db8b0e2969d0c05.jpg?q=50"
          alt=""
        />
      </Carousel>
    </div>
  );
}

export default Carousel1;
