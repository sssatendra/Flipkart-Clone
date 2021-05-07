import React from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import "./LoginT.css";

function LoginT() {
  return (
    <div className="more__t">
      <div className="more__ind">
          <NotificationsIcon />
          <p>Notification Preference</p>
      </div>

      <div className="more__ind">
          <MonetizationOnIcon />
          <p>Sell on Flipkart</p>
      </div>

      <div className="more__ind">
        <LiveHelpIcon />
        <p>24*7 Customer Support</p>
      </div>

      <div className="more__ind">
        <TrendingUpIcon />
        <p>Advertise</p>
      </div>
      <div className="more__ind">
        <GetAppIcon />
        <p> Get App</p>
      </div>

    </div>
  );
}

export default LoginT;
