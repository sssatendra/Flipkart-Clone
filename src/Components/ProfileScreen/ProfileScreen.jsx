import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ProfileScreen.css";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import PaymentIcon from "@material-ui/icons/Payment";
import ChatIcon from "@material-ui/icons/Chat";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import CustomizedSelects from "./CustomizedSelects";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function ProfileScreen() {
  const classes = useStyles();
  let { user } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/");
  };

  return (
    <div className="profileScreen__main">
      <div className="profileScreen__left">
        <div className="profileScreen__avatar">
          <Avatar
            className="avatar__img"
            alt=""
            src="http://3.bp.blogspot.com/-iLQRphAVwAI/T0VXXsCWKkI/AAAAAAAAKZs/ReV3vL8Ql5s/s1600/Movie+Wallpaper+Iron+Man+Character+1280x720.jpg"
          />
          <div>
            <h1 className="greet">Hello,</h1>
            <h1>{user?.name.split(" ")[0]}</h1>
          </div>
        </div>

        <div className="profileScreen__leftDetails">
          <div className="screen__container">
            <AccountBalanceWalletIcon />
            <p>My Orders</p>
          </div>
          <hr />
          <div className="screen__container">
            <SettingsIcon />
            <p>Account Settings</p>
          </div>
          <hr />
          <div className="screen__container">
            <PaymentIcon />
            <p>Payments</p>
          </div>
          <hr />
          <div className="screen__container">
            <ChatIcon />
            <p>My Chats</p>
          </div>
          <hr />
          <div className="screen__container">
            <FolderSharedIcon />
            <p>My Stuffs</p>
          </div>
          <hr />
          <div onClick={logout} className="screen__container">
            <ExitToAppIcon />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className="profileScreen__right">
        <h1>Personal Information </h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </form>
        <RadioButtonsGroup />
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
        </form>
      </div>
    </div>
  );
}

export default ProfileScreen;
