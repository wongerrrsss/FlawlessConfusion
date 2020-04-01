import React, { Component } from "react";
// import { NavLink } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                    <a href={'/clothing'}>clothing.</a>
                    <a href={'/accessories'}>accessories.</a>
                    <a href={'/sale'}>sale.</a>
                <div className="page-wrapper">
                    <a href={'/signin'}>sign-in.</a>
                </div>
            </div>
        )
    }
}

export default Navbar; 