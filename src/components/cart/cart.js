import React, { Component } from 'react';
import axios from 'axios'
import './cart.scss';
import Stripe from '../stripe/stripe'



class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            total: 0
        }
    }
    componentDidMount() {
        axios.get('/api/cart').then(response => {
            console.log(response)
            this.setState({
                cart: [...this.state.cart, response.data.cart],
                total: response.data.total
            })
        })
    }

    render() {
        let userCart;
        if (this.state.cart[0]) {
            userCart = this.state.cart[0].map(cart => {
                return <div>
                    <div className="cart-item">
                        <h3>{cart.name}</h3>
                        <h5>{cart.description}</h5>
                        <h4>${cart.price}</h4>
                        <h3 className="remove-item-button">Remove</h3>
                    </div>
                </div>
            })
        }

        console.log("userCart", userCart)
        return (
            <div className="cart">
                <div className="cart-item-outer">
                    <h1>Your Order</h1>
                    <button className="checkout-button"><div>Checkout</div> <div>$ {this.state.total}</div></button>
                    <Stripe amount={this.state.total} />

                </div>
                <br />
                <div>

                    {userCart}
                </div>

            </div>
        );
    }
}


export default Cart