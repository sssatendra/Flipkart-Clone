import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="Cards">
      <div className="Cards__info">
        <img
          src="https://rukminim1.flixcart.com/flap/480/480/image/2f30db9425df5cec.jpg?q=50"
          alt=""
        />
      </div>
      <div className="Cards__info">
        <img
          src="https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50"
          alt=""
        />
      </div>
      <div className="Cards__info">
        <img
          src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cards;
