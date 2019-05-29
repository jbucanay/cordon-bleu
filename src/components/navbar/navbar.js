import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "./logo.png";
import shoppingcart from "../../../src/images/shopping-cart-3.png";

const Navbar = props => {

  return (
    <div className="navbar-div">
      <div className="nav-outer">
        <div className="nav-logo-div">
          <h1 className="nav-address">
            {props.address && `ASAP to ${props.address.substr(0, 32)}`}
          </h1>
          <img className="nav-logo-image" src={logo} alt="logo" />
        </div>
        {/* {this.state.clicked ? ( */}
        <div className="nav-sign-up">
          <Link to="/login" className="nav-sign-in-words">
            <h2>Sign In</h2>
          </Link>
          {/* <Link to="/signup"><button onClick={() => this.handleClick()} className="nav-signup-button">Sign Up</button></Link> */}
          <Link to="/signup">
            <button className="nav-signup-button">Sign Up</button>
          </Link>
        </div>
        {/* ) : ( */}

        <div className="shopping-cart-outer">
          <a href="/">
            <img
              className="shopping-cart-inner"
              src={shoppingcart}
              alt="shopping cart"
            />
          </a>
        </div>
        {/* )} */}
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
