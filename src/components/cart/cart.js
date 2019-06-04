import React, { Component } from 'react';
import axios from 'axios'
import './cart.scss';


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
                console.log(userCart)
                return <div>
                    <div>
                        <h3>{cart.name}</h3>
                        <h5>{cart.description}</h5>
                        <h4>${cart.price}</h4>
                    </div>
                </div>
            })
        }

        return (
            <div>
                <h1>Cart</h1>
                <h2>Total: $ {this.state.total}</h2>
                <br />
                <div>
                    test
                    {userCart}
                </div>

            </div>
        );
    }
}


export default Cart