import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Cart from '../components/cart/cart'
import shoppingcart from "../images/shopping-cart.png";


export default props => {
    return (
        <div>
            <div className='menu-2' >
                <Menu className='menu-item' disableAutoFocus width={375} right customBurgerIcon={<img className="shopping-cart" src={shoppingcart} alt="shopping cart" />} >
                    <Cart />
                </Menu>
            </div>
        </div>
    );
};