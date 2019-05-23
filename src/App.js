import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header" />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
