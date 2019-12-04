import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/NavMenu.css';
import AppBar from '@material-ui/core/AppBar';

const NavMenu: FunctionComponent = () => {
    return(
        <AppBar className="navBar" position="relative">
            <div className="menu">
                <div><NavLink activeClassName="active" exact to="/">Home</NavLink></div>
                <div><NavLink activeClassName="active" to="/tournaments">Tournaments</NavLink></div>
                <div><NavLink activeClassName="active" to="/players">Player Search</NavLink></div>
                <div><NavLink activeClassName="active" to="/versus">Head to Head</NavLink></div>
                <div><NavLink activeClassName="active" to="/find-tournament">Find Tournament</NavLink></div>
            </div>
        </AppBar>
    );
};

export default NavMenu;