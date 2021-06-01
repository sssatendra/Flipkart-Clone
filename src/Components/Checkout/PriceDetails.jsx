import React from "react";
import "./PriceDetails.css";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

function PriceDetails() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={basket?.length === 0 ? "nodisplay" : "priceDetails"}>
      <div className="header__container">
        <h3>PRICE DETAILS</h3>
      </div>
      <hr />
      <div className="billinfo">
        <div className="billinfo__left">
          <h4>Price({basket?.length} Items)</h4>
          <h4>Discount(10%)</h4>
          <h4>Delivery Charges</h4>
          <h3>Total Amount</h3>
        </div>
        <div className="billinfo__right">
          <h4>₹{getBasketTotal(basket)}</h4>
          <h4>− ₹{Math.floor(getBasketTotal(basket) / 100) * 10} </h4>
          <h4>₹0</h4>
          <h3>
            {getBasketTotal(basket) - (getBasketTotal(basket) / 100) * 10}
          </h3>
        </div>
      </div>
      <hr />
      <h4>
        You will save ₹{Math.floor(getBasketTotal(basket) / 100) * 10} on this
        order
      </h4>
    </div>
  );
}

export default PriceDetails;
