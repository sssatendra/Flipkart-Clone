import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousels.css";

function Carousel1() {
    return (
        <div className="carousel__info">
            <Carousel infiniteLoop autoPlay>
                <div className="images">
                    <img src="https://rukminim1.flixcart.com/flap/3376/560/image/e022f53ba8f7ecf0.jpg?q=50" alt=""/>
                </div>

                <div className="image">
                    <img src="https://rukminim1.flixcart.com/flap/3376/560/image/39315728668bc982.jpg?q=50" alt=""/>
                </div>

                <div className="image">
                    <img src="https://rukminim1.flixcart.com/flap/3376/560/image/ccce2750c7f61991.jpg?q=50" alt=""/>
                </div>

                <div className="image">
                    <img src="https://rukminim1.flixcart.com/flap/3376/560/image/75a15c3e19c3f7de.jpg?q=50" alt=""/>
                </div>
                    <img src="https://rukminim1.flixcart.com/flap/3376/560/image/29d05f98e3abe6f4.jpg?q=50" alt=""/>
            </Carousel>
        </div>
    )
}

export default Carousel1
