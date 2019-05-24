import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'closed'
    }
  }
  handleClick = () => {
    console.log("hit")
    if (this.state.menuStatus === 'open') {
      this.setState({
        menuStatus: 'closed'
      })
    } else {
      this.setState({
        menuStatus: 'open'
      })
    }
  }

  render() {
    return (
      <div className="navbar-div">
        <div className="nav-outer">
          <div className="nav-left" onClick={() => this.handleClick()}>
            <img className="Hamburger-Image"
              src="data:image/jpeg;base64,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"
              alt="Menu Button" />
          </div>
          <div className={"side-menu-" + this.state.menuStatus}> {/* set to only display when menuStatus is open  */}
            <ul className="side-menu-list">
              <Link to="/">Home</Link>
              <Link to="/Help">Help</Link>
              <Link to="/Login">Sign Up/Sign In</Link>
            </ul>
          </div>

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
          </div>
        </div>
      </div >
    );
  };
}