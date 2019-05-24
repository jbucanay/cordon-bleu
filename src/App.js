import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header" />
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
