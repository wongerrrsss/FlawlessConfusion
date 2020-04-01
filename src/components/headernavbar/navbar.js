import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="page-wrapper">
                    <NavLink to={'/clothing'}>clothing.</NavLink>

                    <NavLink to={'/accessories'}>accessories.</NavLink>
                    
                    <NavLink to={'/sale'}>sale.</NavLink>

                    <NavLink to={'/signin'}>signin.</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar; 