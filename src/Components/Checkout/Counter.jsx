import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./Counter.css";

function Counter({ id, rating, image, title, price }) {
  const [count, setCount] = useState(1);
  const [{ basket }, dispatch] = useStateValue();

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <div className="counter__container">
        <button className="btn" disabled={count === 1} onClick={decrease}>
          -
        </button>
        <p>{count}</p>
        <button className="btn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
