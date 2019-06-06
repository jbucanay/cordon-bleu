import React, { Component } from 'react';
import axios from 'axios';
import './menus.scss';
import checkmark from '../../images/checkmark.png'




export default class wendys extends Component {
    constructor() {
        super()
        this.state = {
            session: false,
            items: []
        }
    }

    componentDidMount() {
        axios.get('/api/menu/wendys').then(response => {
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
                    <img className="menu-logo" src="https://amp.businessinsider.com/images/51e3f458eab8ea135800001d-750-606.jpg" alt="logo" />

                    <h2 className="delivery-tag"><img className="checkmark" src={checkmark} alt="checkmark" />FREE DELIVERY WITH DASHPASS</h2>
                    <h1 className="restaurant-name">Wendy's</h1>
                    <h3 className="gray-tag">Open Hours: 10:00AM - 10:30PM</h3>
                    <div class="rating">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>☆</span>
                        <h3 className="gray-tag">4.5 (769 Ratings)</h3>
                    </div>
                    <div className="info-part">
                        <div className="seperate-part"> <div className="top">Free</div><div className="bottom">delivery</div></div>
                        <div className="seperate-part"> <div className="top">26-36</div><div className="bottom">minutes</div></div>
                        <div className="seperate-part"> <div className="top">1.8</div><div className="bottom">miles</div></div>
                    </div>

                </div>
                <div className="item-bar">
                    <span className="item-bar-word">Entrees </span>
                    <span className="item-bar-word">Salads</span>
                    <span className="item-bar-word">Sides </span>
                    <span className="item-bar-word">Beverages </span>
                    <span className="item-bar-word">Frosty </span>
                </div>

                <div className="food-item-outer">

                    {itemList}

                </div>
            </div >
        );
    }
}

