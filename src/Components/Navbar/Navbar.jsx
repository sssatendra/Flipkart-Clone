import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import LoginT from "./LoginT";
import MoreT from "./MoreT";
import "tippy.js/themes/light.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();

  let dispatchRedux = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="navbar__out">
      <div className="navbar__left">
        <Link to="/">
          <img
            className="brand__logo"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Flipkart Logo"
          />
        </Link>
        <input
          className="navbar__input"
          type="text"
          placeholder="Search for products, brands and many more"
        />
        <SearchIcon className="navbar__searchicon" />
      </div>

      <div className="navbar__right">
        <Tippy
          theme="light"
          content={<LoginT />}
          interactive={true}
          offset={[5, 18]}
        >
          {!user ? (
            <Link to="/login">
              <button className="header__btn">Login</button>
            </Link>
          ) : (
            <h4>{JSON.stringify(user.email)}</h4>
          )}
        </Tippy>

        <Tippy
          theme="light"
          interactive={true}
          content={<MoreT> </MoreT>}
          offset={[5, 18]}
        >
          <h4 className="navbar__h4">
            More
            <ArrowDropDownIcon />
          </h4>
        </Tippy>

        <div className="viewcart">
          <Link to="/viewcart">
            <ShoppingCartIcon />
            <h5>
              <span
                className={basket?.length === 0 ? "cart__disable" : "cart__len"}
              >
                {basket?.length}
              </span>
              Cart
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
