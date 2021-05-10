import React from "react";
import {Link} from "react-router-dom"
import './header.scss'
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Header = () => {
  return (
    <div className="header fix-header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options mr-4">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};


