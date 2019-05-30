import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Cart from '../components/cart/cart'


export default props => {
    return (
        <div>
            <div className='menu-2' >
                <Menu className='menu-item' disableAutoFocus width={375} right>{/* this should work for mobile to just cover the whole thing */}
                    <Cart />
                </Menu>
            </div>
        </div>
    );
};