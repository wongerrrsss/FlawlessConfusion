import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class HomePageNavbar extends Component {
    render() {
        return (
            <div className='homepage-navbar'>
                <a href="/"><h1>flawless confusion</h1></a>
                <NavLink to="/clothing">clothing.</NavLink>
                <NavLink to="/signin">login.</NavLink>
            </div>
        )
    }
}

export default HomePageNavbar; 