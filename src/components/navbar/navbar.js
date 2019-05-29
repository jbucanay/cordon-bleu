import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "./logo.png";

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
