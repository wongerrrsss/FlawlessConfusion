import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to={"/"}><h1>flawless confusion.</h1></NavLink>
            </div>
        )
    }
}

export default Header; 