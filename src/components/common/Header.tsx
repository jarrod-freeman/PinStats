import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Header.css';
import logo from '../../images/logo.png'; //https://owips.com/clipart-16893677

const Header: FunctionComponent = () => {
    return(
        <div className="headerWrapper">
            <div className="header">
                <img className="logo" src={logo} alt={'logo'} />
                <div className="title"><NavLink to="/">Pin Stats</NavLink></div>
            </div>
        </div>
    );
};

export default Header;