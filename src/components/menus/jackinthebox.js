import React, { Component } from "react";
import axios from "axios";
import "./menus.scss";
import checkmark from "../../images/checkmark.png";
import { connect } from "react-redux";
import { addToCart } from "../../ducks/cartReducer";

class jackinthebox extends Component {
  constructor() {
    super();
    this.state = {
      session: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get("/api/menu/jackinthebox").then(response => {
      this.setState({ items: response.data });
    });
    axios.get("/api/getSession").then(response => {
      if (response.data.user.email) {
        this.setState({ session: true });
      }
    });
  }

  handleClick(id) {
    if (this.state.session) {
      this.props.addToCart(id);
    } else {
      //history comes from react router dom
      this.props.history.push("/Login");
    }
  }

  render() {
    let itemList = this.state.items.map((menu, index) => {
      return (
        <div className="food-item" key={index}>
          <h3>{menu.name}</h3>
          <h5 className="menu-description">
            {menu.description && menu.description.length > 80
              ? menu.description.slice(0, 80) + "..."
              : menu.description}
          </h5>
          <h4> $ {menu.price}.00</h4>
          <button
            className="addToCart"
            onClick={() => {
              this.handleClick(menu.id);
              // window.location.reload()
            }}
          >
            {" "}
            Add To Cart{" "}
          </button>
        </div>
      );
    });

    return (
      <div>
        <div className="menu-items-upper">
          <img
            className="menu-logo"
            src="data:image/png;base64,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"
            alt="logo"
          />

          <h2 className="delivery-tag">
            <img className="checkmark" src={checkmark} alt="checkmark" />
            FREE DELIVERY WITH DASHPASS
          </h2>
          <h1 className="restaurant-name">Jack In The Box®</h1>
          <h3 className="gray-tag">Open Hours: 10:00AM - 9:30PM</h3>
          <div class="rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>☆</span>
            <h3 className="gray-tag">3.9 (14 Ratings)</h3>
          </div>
          <div className="info-part">
            <div className="seperate-part">
              {" "}
              <div className="top">Free</div>
              <div className="bottom">delivery</div>
            </div>
            <div className="seperate-part">
              {" "}
              <div className="top">14-24</div>
              <div className="bottom">minutes</div>
            </div>
            <div className="seperate-part">
              {" "}
              <div className="top">0.6</div>
              <div className="bottom">miles</div>
            </div>
          </div>
        </div>
        <div className="item-bar">
          <span className="item-bar-word">Burgers</span>
          <span className="item-bar-word">Chicken </span>
          <span className="item-bar-word">Desserts</span>
          <span className="item-bar-word">Jack's Deals </span>
          <span className="item-bar-word">Beverages </span>
        </div>
        <div className="food-item-outer">{itemList}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { addToCart }
)(jackinthebox);
