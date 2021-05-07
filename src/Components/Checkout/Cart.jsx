import React from "react";
import "./Cart.css";
import Address from "./Address";
import PriceDetails from "./PriceDetails";
import { useStateValue } from "../../StateProvider";
import CartItems from "./CartItems";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__header">
          <h3>My Cart({basket?.length}) </h3>
          <div className="right">
            <img
              className="image"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
              alt=""
            />
            <p className="deliver">Deliver to </p>
            <Address />
          </div>
        </div>
        <hr />
        <div className="cartinfo">
          {basket.map((item) => (
            <CartItems
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>

        {/* <div className="bottom__cart">
          <Counter />
          <button className="btn__primary">SAVE FOR LATER</button>
          <button className="btn__primary">REMOVE</button>
        </div> */}

        <div className="place__order">
          <button
            disabled={!basket}
            className={basket?.length === 0 ? "button__off" : "button__on"}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
      <PriceDetails />
      {/* PRICE DETAILS */}
    </div>
  );
}

export default Cart;
