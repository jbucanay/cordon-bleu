import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedOutHome } from "./components/loggedOutHome/loggedOutHome";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Restaurants from "./components/restuarants/Restaurants";


export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/restaurants" component={Restaurants} />
    <Route exact path="/" component={loggedOutHome} />
  </Switch>
);
