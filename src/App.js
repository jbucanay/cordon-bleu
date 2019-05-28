import React from "react";
import "../src/sidebar.js/sidebar.scss";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Navbar from './components/navbar/navbar';
import SideBar from '../src/sidebar.js/sidebar.js';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header" />
        <SideBar />
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
