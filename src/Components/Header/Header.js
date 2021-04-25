import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/course">Course</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};


export default Header;