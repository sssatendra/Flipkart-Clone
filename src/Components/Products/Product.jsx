import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
// import { motion } from "framer-motion";

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

function Product(props) {
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
    handleClick();
  };

  // const callTwoFunction = () => {
  //   addToBasket();
  // };

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
          <button onClick={addToBasket}>ADD TO CART</button>
        </div>
      </div>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {`${truncate(props.title)} added to cart`}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default Product;
