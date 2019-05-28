import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedOutHome } from "./components/loggedOutHome/loggedOutHome";
import Login from "./components/login/login";
import Restaurants from "./components/restuarants/Restaurants";

// hey
export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/restaurants" component={Restaurants} />
    <Route exact path="/" component={loggedOutHome} />
  </Switch>
);
