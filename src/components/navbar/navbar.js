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
          {/* {width === 945 ? (
            <img
              src="https://www.gannett-cdn.com/presto/2019/01/15/PSIF/4b4af897-3e23-4c52-bb9e-7ef6436a161b-DoorDash_icon_RGB.jpg?crop=995,564,x0,y33&width=3200&height=1680&fit=bounds"
              alt="door"
              width="200"
            />
          ) : ( */}
          <img
            className="nav-logo-image"
            src="https://www.napapalisades.com/wp-content/uploads/2018/10/doordash-logo.png"
            alt=""
          />
          {/* )} */}
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
};

export default Navbar;

// constructor() {
//   super();
//   this.state = {
//     loggedIn: false,

//   };
// }

// render() {
