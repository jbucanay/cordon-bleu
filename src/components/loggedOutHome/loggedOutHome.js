import React, { Component } from "react";
import "./loggedOutHome.scss";
import Navbar from "../navbar/navbar";
import Search from "../search/Search";
export class loggedOutHome extends Component {
  render() {
    return (
      <div className="grid">
        <Navbar />
        <Search />
      </div>
    );
  }
}
