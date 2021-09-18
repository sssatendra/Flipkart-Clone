import React, { useState } from "react";
import "./ProductScreen.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    text: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  },
}));

function ProductScreen() {
  const [favs, setFavs] = useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <div className="ProductScreen">
        <div className="leftScreen">
          <div className="productImage">
            <>
              {favs ? (
                <FavoriteIcon
                  className="heart"
                  onClick={() => {
                    setOpen(true);
                    setFavs(!favs);
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  className="heart"
                  onClick={() => {
                    setOpen(true);
                    setFavs(!favs);
                  }}
                />
              )}
              <img
                src="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
                alt="productImage"
              />
            </>
            <div className="buttons">
              <a href="#" className="cartBtn">
                <ShoppingCartIcon />
                ADD TO CART
              </a>
              <a className="buyBtn" href="#">
                <OfflineBoltIcon />
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="rightScreen">
          <h2>
            boAt Rockerz 510 Super Extra Bass Bluetooth Headset (Raging Red, On
            the Ear)
          </h2>
          <p>1,33,749 Ratings & 18,278 Reviews</p>
          <h2>
            ₹1,599 <strike style={{ fontSize: "small" }}>₹3,490</strike> 54% off
          </h2>
          <p>Available offers</p>

          <div className="delivery__col">
            <p>Delivery</p>
            <form className={classes.text} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Pincode" />
            </form>
          </div>
        </div>
      </div>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {favs
              ? "Product Added to Wishlist"
              : "Product Removed from Wishlist"}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default ProductScreen;
