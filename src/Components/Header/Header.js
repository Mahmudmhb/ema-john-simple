import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* <h1>welcome our ema-john-simple</h1> */}
            <img className='logo' src={logo} alt="" />
            <nav className='nav'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/menage">Manage Inbentory Hare</a>
            </nav>
        </div>
    );
};

export default Header;