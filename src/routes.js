import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedOutHome } from "./components/loggedOutHome/loggedOutHome";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Restaurants from "./components/restuarants/Restaurants";
import Chickfila from "./components/chickfila/chickfila";


export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/restaurants" component={Restaurants} />
    <Route path="/chickfila" component={Chickfila} />
    <Route exact path="/" component={loggedOutHome} />
  </Switch>
);
