import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/logo-small.png";
import axios from "axios";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      session: false,
      address: ""
    };
  }
  componentDidMount() {
    axios.get("/api/getSession").then(response => {
      console.log("check session for browsing", response.data.user);
      this.setState({ address: response.data.user.address });
      if (response.data.user.email) {
        this.setState({ session: true });
        this.setState({ address: response.data.user.address });
        console.log("check session with user", response.data.user);
      }
    });
  }
  render() {
    if (this.state.address) {
      console.log("address", this.state.address.address);
    }
    return (
      <div className="navbar-div">
        <div className="nav-outer">
          <div className="nav-logo-div">
            <h1 className="nav-address">
              {this.props.address ? (
                <div>
                  <small>ASAP</small> <small>to</small>{" "}
                  <small>{this.props.address.substr(0, 32)}</small>
                </div>
              ) : (
                  this.state.address && (
                    <div>
                      <small>ASAP</small> <small>to</small>{" "}
                      <small>{this.state.address.substr(0, 32)}</small>
                    </div>
                  )
                )}
            </h1>
            <img className="nav-logo-image" src={logo} alt="logo" /> <h1 className="website-name">Cordon Bleu</h1>
          </div>
          {this.state.session ? null : (
            <div className="nav-sign-up">
              <Link to="/login" className="nav-sign-in-words">
                <h2>Sign In</h2>
              </Link>
              <Link to="/signup">
                <button className="nav-signup-button">Sign Up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    address: reduxState.search.address
  };
};

export default connect(mapStateToProps)(Navbar);
