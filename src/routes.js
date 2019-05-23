import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedOutHome } from "./components/loggedOutHome/loggedOutHome";
import Login from "./components/login/login";

// hey
export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={loggedOutHome} />
  </Switch>
);
