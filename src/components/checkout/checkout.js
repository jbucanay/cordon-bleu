import React from "react";
import Cart from "../cart/cart";
import Stripe from "../stripe/stripe";

export default function checkout() {
  return (
    <article>
      <Cart />
      <Stripe />
    </article>
  );
}
