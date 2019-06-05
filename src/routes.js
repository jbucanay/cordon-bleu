import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedOutHome } from "./components/loggedOutHome/loggedOutHome";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Restaurants from "./components/restuarants/Restaurants";
import Chickfila from "./components/chickfila/chickfila";
import Jack from "./components/jack/Jack";
import Wendy from "./components/wendy/Wendy";
import Papa from "./components/papa/Papa";
import Corner from "./components/corner/Corner";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/restaurants" component={Restaurants} />
    <Route path="/chickfila" component={Chickfila} />
    <Route path="/jackinthebox" component={Jack} />
    <Route path="/wendy" component={Wendy} />
    <Route path="/papajohn" component={Papa} />
    <Route path="/cornerbakey" component={Corner} />
    <Route exact path="/" component={loggedOutHome} />
  </Switch>
);
