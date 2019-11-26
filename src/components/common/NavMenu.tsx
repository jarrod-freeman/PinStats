import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/NavMenu.css';

const NavMenu = () => {
    return(
        <div className="navBar">
            <div className="menu">
                <div><NavLink activeClassName="active" exact to="/">Home</NavLink></div>
                <div><NavLink activeClassName="active" to="/tournaments">Tournaments</NavLink></div>
                <div><NavLink activeClassName="active" to="/players">Player Search</NavLink></div>
                <div><NavLink activeClassName="active" to="/find-tournament">Find Tournament</NavLink></div>
            </div>
        </div>
    );
};

export default NavMenu;