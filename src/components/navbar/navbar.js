import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div class="navbar-div">
        <div className="nav-right">
          <div className="nav-logo-div">
            <img
              alt="logo"
              className="nav-logo-image"
              src="https://www.napapalisades.com/wp-content/uploads/2018/10/doordash-logo.png"
            />
          </div>
          <div className="nav-sign-up">
            <Link to="/login" className="nav-sign-in-words">
              <h2>Sign In</h2>
            </Link>
            <h2>Sign Up</h2>
          </div>
        </div>
      </div>
    );
  }
}
