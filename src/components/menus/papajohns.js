import React, { Component } from 'react';
import axios from 'axios';
import './menus.scss';




export default class papajohns extends Component {
    constructor() {
        super()
        this.state = {
            session: false,
            items: []
        }
    }

    componentDidMount() {
        axios.get('/api/menu/papajohns').then(response => {
            this.setState({ items: response.data })
            console.log(response.data)

        })
        axios.get('/api/getSession').then(response => {
            console.log(response.data.user)
            if (response.data.user.email) {
                this.setState({ session: true })
            }
        })
    }

    handleClick(id) {
        if (this.state.session) {
            axios.post(`/api/cart/${id}`).then(response => {
                console.log("hit")
            })
        } else { //history comes from react router dom
            this.props.history.push("/Login")
        }
    }

    render() {
        let itemList = this.state.items.map((menu, index) => {
            return <div className="food-item" key={index}>
                <h3>{menu.name}</h3>
                <h5 className="menu-description">{menu.description && menu.description.length > 80 ? menu.description.slice(0, 80) + "..." : menu.description}</h5>
                <h4> $ {menu.price}.00</h4>
                <button className="addToCart" onClick={() => {
                    this.handleClick(menu.id)
                    window.location.reload()

                }
                }> Add To Cart </button>
            </div>
        })
        return (
            <div>
                <div className="menu-items-upper">
                    <img className="menu-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/1280px-Papa_John%27s_Pizza_logo.svg.png" alt="logo" />

                    <h1 className="restaurant-name">Papa John's Pizza</h1>
                    <h3 className="gray-tag">Open Hours: 9:30AM - 9:10AM</h3>
                    <div class="rating">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>☆</span>
                        <h3 className="gray-tag">4.6 (24 Ratings)</h3>
                    </div>
                    <div className="info-part">
                        <div className="seperate-part"> <div className="top">Free</div><div className="bottom">delivery</div></div>
                        <div className="seperate-part"> <div className="top">15-25</div><div className="bottom">minutes</div></div>
                        <div className="seperate-part"> <div className="top">0.7</div><div className="bottom">miles</div></div>
                    </div>

                </div>
                <div className="item-bar">
                    <span className="item-bar-word">Pizza</span>
                    <span className="item-bar-word">Sides </span>
                    <span className="item-bar-word">Desserts</span>
                    <span className="item-bar-word">Drinks </span>
                    <span className="item-bar-word">Extras </span>
                </div>

                <div className="food-item-outer">

                    {itemList}

                </div>
            </div >
        );
    }
}

