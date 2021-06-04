import React from "react";
import Counter from "./Counter";
import "./CartItems.css";
import { useStateValue } from "../../StateProvider";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function CartItems(props) {
  const [{ basket }, dispatch] = useStateValue();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const truncate = (str) => {
    return str.length > 30 ? str.substring(0, 24) + "..." : str;
  };

  const removeFromBasket = () => {
    // remove thr item from basket
    window.name = props.title;
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
    console.log(props.title);
  };

  const callFunction = () => {
    removeFromBasket();
    handleClick();
  };

  return (
    <div className="cartItems">
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
        <button onClick={callFunction} className="btn__primary">
          REMOVE
        </button>
      </div>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {`${truncate(window.name)} removed from the cart`}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default CartItems;
