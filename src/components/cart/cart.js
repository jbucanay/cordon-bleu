import React, { Component } from "react";
import axios from "axios";
import "./cart.scss";
import Stripe from "../stripe/stripe";
import { Link } from "react-router-dom";
import { getCart } from "../../ducks/cartReducer";
import { connect } from 'react-redux';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0
    };
  }
  componentDidMount() {
    this.props.getCart();
  }

  render() {

    let userCart;
    if (this.props.cart[0]) {
      userCart = this.props.cart.map(cart => {
        return (
          <div>
            <div className="cart-item">
              <h3>{cart.name}</h3>
              <h5>{cart.description}</h5>
              <h4>${cart.price}.00</h4>
              <h3 className="remove-item-button">Remove</h3>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="cart-outer">
        <div className="cart-item-outer">
          <h1>Your Order</h1>
          <Link to="/checkout">
            <button className="checkout-button">
              <div>Your Order</div> <div>$ {this.props.total}.00</div>
            </button>
          </Link>
          <div className="stripe-checkout-button">
            <Stripe amount={this.props.total} />
          </div>
        </div>
        <br />
        <div>{userCart}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    total: state.cartReducer.total
  }
}

export default connect(mapStateToProps, { getCart })(Cart);
