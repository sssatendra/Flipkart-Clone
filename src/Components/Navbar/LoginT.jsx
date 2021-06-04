import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import "./LoginT.css";
import { Link, useHistory } from "react-router-dom";
import { ExitToApp } from "@material-ui/icons";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";

function LoginT() {
  let dispatch = useDispatch();
  let history = useHistory();
  let dispatchRedux = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/");
  };
  return (
    <div className="more__t">
      {!user ? (
        <div className="more__ind">
          <div className="nav__head">
            <h4 className="nav__head1">New Customer? </h4>
            <Link to="/register">
              <h4 id="nav__head2">SignUp</h4>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="more__ind">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>

      <div className="more__ind">
        <StarBorderOutlinedIcon />
        <p> Flipkart Plus Zone </p>
      </div>

      <div className="more__ind">
        <StorefrontOutlinedIcon />
        <p>Orders</p>
      </div>

      <div className="more__ind">
        <FavoriteOutlinedIcon />
        <p> Wishlist </p>
      </div>

      <div className="more__ind">
        <LoyaltyIcon />
        <p>Rewards</p>
      </div>
      <div className="more__ind">
        <CardGiftcardOutlinedIcon />
        <p> Gift Cards</p>
      </div>
      {user ? (
        <div onClick={logout} className="more__ind">
          <ExitToApp />
          <p> Logout</p>
        </div>
      ) : null}
    </div>
  );
}

export default LoginT;
