import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
// import Button from "@material-ui/core/Button";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const truncate = (str) => {
    return str.length > 30 ? str.substring(0, 36) + "..." : str;
  };

  const addToBasket = () => {
    // dispatch the item in data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  const toastNotify = () => {
    console.log("Humko Bulaya ??");
    toast.success(`${truncate(props.title)} added to Cart`);
  };

  const callTwoFunction = () => {
    addToBasket();
    toastNotify();
  };

  return (
    <>
      <div className="product">
        <div className="product__info">
          <img
            className="product__image"
            src={props.image}
            alt={truncate(props.title)}
          />
          <p className="product__name">{truncate(props.title)}</p>
          <div className="product__rating">
            <p>{props.rating}🌟</p>
          </div>
          <p className="product__price">₹{props.price}</p>
          {/* <Button variant="outlined" color="primary" onClick={addToBasket}>
            Add to cart
          </Button> */}
          <button onClick={callTwoFunction}>ADD TO CART</button>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        transition={Zoom}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Product;
