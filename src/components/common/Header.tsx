import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css';
import logo from '../../images/logo.png'; //https://owips.com/clipart-16893677

const Header = () => {
    return(
        <div className="headerWrapper">
            <div className="header">
                <img className="logo" src={logo} alt={"logo"} />
                <div className="title"><Link to="/">Pin Stats</Link></div>
            </div>
        </div>
    );
};

export default Header;