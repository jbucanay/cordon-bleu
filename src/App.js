import React from "react";
import "../src/sidebars/sidebar.scss";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar/navbar";
import Cart from "./sidebars/cartbar.js";
import SideBar from "./sidebars/sidebar";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header" />
        <Navbar />
        <Cart />
        <SideBar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
