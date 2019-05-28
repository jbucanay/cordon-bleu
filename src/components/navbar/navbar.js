import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";
import shoppingcart from '/Users/bhawk/devmtn/cordon-bleu/src/images/shopping-cart-7.png'



export default class Navbar extends Component {


  render() {
    return (
      <div className="navbar-div">
        <div className="nav-outer">
          <div className="nav-logo-div">
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
            <a className="shopping-cart-image" href="/"><img src={shoppingcart} /></a>

          </div>
        </div>
      </div >
    );
  };
}