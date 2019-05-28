import React from "react";
// , { useEffect, useState }
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   console.log(width);
  // });

  return (
    <div className="navbar-div">
      <div className="nav-right">
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
    </div>
  );
};

export default Navbar;
