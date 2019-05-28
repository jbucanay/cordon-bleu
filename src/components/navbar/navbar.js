import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";
import shoppingcart from '/Users/bhawk/devmtn/cordon-bleu/src/images/shopping-cart-7.png'

const Navbar = props => {
  return (
    <div className="navbar-div">
      <div className="nav-right">
        <div className="nav-logo-div">
          <h1>{props.address && `ASAP to ${props.address.substr(0, 22)}`}</h1>
          <img
            className="nav-logo-image"
            src="https://www.napapalisades.com/wp-content/uploads/2018/10/doordash-logo.png"
            alt=""
          />
        </div>
        <div className="nav-sign-up">
          <Link to="/login" className="nav-sign-in-words">
            <h2>Sign In</h2>
          </Link>
          <button className="nav-signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = reduxState => {
  return {
    address: reduxState.search.address
  };
};

export default connect(mapStateToProps)(Navbar);
