import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2>Syl Food <span>GaRagE</span></h2>
            <div>
            <a href="/home">Home</a>
            <a href="/menu">Menu</a>
            <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;