import React from "react";
import "../src/sidebar.js/sidebar.scss";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Navbar from './components/navbar/navbar';
import SideBar from '/Users/bhawk/devmtn/cordon-bleu/src/sidebars/sidebar';
import Cart from '/Users/bhawk/devmtn/cordon-bleu/src/sidebars/cart.js';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header" />

        <SideBar />
        <Cart />
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;