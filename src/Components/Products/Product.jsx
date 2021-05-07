import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const truncate = (str) => {
    return str.length > 30 ? str.substring(0, 48) + "..." : str;
  };

  console.log("This is the basket ", basket);

  const addToBasket = () => {
    // dispatch the item in data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <img className="product__image" src={props.image} alt="" />
        <p className="product__name">{truncate(props.title)}</p>
        <div className="product__rating">
          <p>{props.rating}🌟</p>
        </div>
        <p className="product__price">₹{props.price}</p>
        <button onClick={addToBasket}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default Product;
