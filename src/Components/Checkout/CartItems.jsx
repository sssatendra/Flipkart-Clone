import React from "react";
import Counter from "./Counter";
import "./CartItems.css";
import { useStateValue } from "../../StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";

function CartItems(props) {
  const [{ basket }, dispatch] = useStateValue();

  const truncate = (str) => {
    return str.length > 30 ? str.substring(0, 24) + "..." : str;
  };

  const removeFromBasket = (pid) => {
    // remove thr item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
    toast.success(`${truncate(props.title)} removed from Cart`);
  };
  return (
    <div className="cartItems">
      <ToastContainer
        position="bottom-left"
        transition={Zoom}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div className="midcart">
        <div className="product__in">
          <img className="product__img" src={props.image} alt="" />
          <div className="product__det">
            <h2>{truncate(props.title)}</h2>
            <p className="deliver">{props.title}</p>
            <p className="deliver">Seller: CORSECA</p>
            <img
              className="flip__assured"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
            <p>₹{props.price}</p>
          </div>
        </div>
        <div className="product__info2">
          <h4>Delivery by Saturday| ₹40</h4>
          <p className="deliver"> 7 days Replacement Policy</p>
        </div>
      </div>
      <div className="bottom__cart">
        <Counter />
        <button className="btn__primary">SAVE FOR LATER</button>
        <button onClick={removeFromBasket} className="btn__primary">
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default CartItems;
