import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import home from '/Users/bhawk/devmtn/cordon-bleu/src/images/home.png'
import orders from '/Users/bhawk/devmtn/cordon-bleu/src/images/orders.png'
import deliveries from '/Users/bhawk/devmtn/cordon-bleu/src/images/deliveries.png'
import myaccount from '/Users/bhawk/devmtn/cordon-bleu/src/images/my-account.png'
import help from '/Users/bhawk/devmtn/cordon-bleu/src/images/help.png'
import signout from '/Users/bhawk/devmtn/cordon-bleu/src/images/signout.png'


export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/"><img className="menu-image" src={home} />Home</a>
            <a className="menu-item" href="/orders"><img className="menu-image" src={orders} />Orders</a>
            <a className="menu-item" href="/get-free-deliveries"><img className="menu-image" src={deliveries} />Get Free Deliveries</a>
            <a className="menu-item" href="/my-account"><img className="menu-image" src={myaccount} />My Account</a>
            <a className="menu-item" href="/door-dash-credits"><img className="menu-image" src={deliveries} />DoorDash Credits</a>
            <a className="menu-item" href="/help"><img className="menu-image" src={help} />Help</a>
            <a className="menu-item" href="/signout"><img className="menu-image" src={signout} />Sign Out</a>
            <p className="seperator-line"></p>
            <a className="menu-item-lower" href="/about-us">About Us</a>
            <a className="menu-item-lower" href="/careers">Careers</a>
            <a className="menu-item-lower" href="/blog">Blog</a>
            <a className="menu-item-lower" href="/accessibility">Accessibility</a>
            <a className="menu-item-lower" href="/be-a-dasher">Be a Dasher</a>
            <a className="menu-item-lower" href="/be-a-partner-restaurant">Be a Partner Restaurant</a>
            <a className="menu-item-lower" href="/dashers-for-deliveries">Dashers for Deliveries</a>
            <button className="menu-item-button" href="/get-credits">Get $20 in Credits</button>
        </Menu>
    );
};