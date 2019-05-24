import React, { Component } from "react";
import "./loggedOutHome.scss";

import Search from "../search/Search";
export class loggedOutHome extends Component {
  render() {
    return (
      <div className="grid">
        <Search />
      </div>
    );
  }
}
