import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedOutHome } from "./components/loggedOutHome/loggedOutHome";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Restaurants from "./components/restaurants/Restaurants";
import Chickfila from "./components/menus/chickfila";
import Jackinthebox from "./components/menus/jackinthebox";
import Wendys from "./components/menus/wendys";
import Papajohns from "./components/menus/papajohns";
import Burgerking from "./components/menus/burgerking";
import Contact from "./components/contact/contact";
import Checkout from "./components/checkout/checkout";

export default (
  <Switch>
    <Route exact path="/" component={loggedOutHome} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/restaurants" component={Restaurants} />
    <Route path="/chickfila" component={Chickfila} />
    <Route path="/jackinthebox" component={Jackinthebox} />
    <Route path="/burgerking" component={Burgerking} />
    <Route path="/wendys" component={Wendys} />
    <Route path="/papajohns" component={Papajohns} />
    <Route path="/contact" component={Contact} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);
