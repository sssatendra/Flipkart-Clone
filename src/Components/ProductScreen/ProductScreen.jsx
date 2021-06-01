import React from "react";
import "./ProductScreen.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function ProductScreen() {
  return (
    <div className="ProductScreen">
      <div className="Screen__left">
        <img
          src="https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/c/n/a/hot-10-play-x688b-infinix-original-imag29hfg6vspbuz.jpeg?q=70"
          alt=""
        />
        <div className="Screen__leftButtons">
          <button className="btn__add">
            <ShoppingCartIcon className="cart__btn" /> Add to Cart
          </button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
