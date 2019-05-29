import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import home from '../../src/images/home.png'
import orders from '../../src/images/orders.png'
import delivery from '../../src/images/delivery.png'
import myaccount from '../../src/images/my-account.png'
import help from '../../src/images/help.png'
import signout from '../../src/images/signout.png'
import credits from '../../src/images/credits.png'


export default props => {
  return (
    <Menu disableAutoFocus width={375}>{/* this should work for mobile to just cover the whole thing */}

      <a className="menu-item" href="/"><img className="menu-image" src={home} alt="" />Home</a>
      <a className="menu-item" href="/orders"><img className="menu-image" src={orders} alt="" />Orders</a>
      <a className="menu-item" href="/get-free-deliveries"><img className="menu-image" src={delivery} alt="" />Get Free Deliveries</a>
      <a className="menu-item" href="/my-account"><img className="menu-image" src={myaccount} alt="" />My Account</a>
      <a className="menu-item" href="/door-dash-credits"><img className="menu-image" src={credits} alt="" />DoorDash Credits</a>
      <a className="menu-item" href="/help"><img className="menu-image" src={help} alt="" />Help</a>
      <a className="menu-item" href="/signout"><img className="menu-image" src={signout} alt="" />Sign Out</a>
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
