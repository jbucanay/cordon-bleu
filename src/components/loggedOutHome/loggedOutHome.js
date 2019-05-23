import React, { Component } from "react";
import "./loggedOutHome.scss";
import { Navbar } from "../navbar/navbar";

export class loggedOutHome extends Component {
  render() {
    return (
      <div class="grid">
        <Navbar />
      </div>
    );
  }
}
