import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to={'/clothing'}>clothing.</NavLink>

                <NavLink to={'/accessories'}>accessories.</NavLink>
                
                <NavLink to={'/sale'}>sale.</NavLink>
            </div>
        )
    }
}

export default Navbar; 