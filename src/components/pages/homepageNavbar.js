import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomePageNavbar extends Component {
    render() {
        return (
            <div className='homepage-navbar'>
                <NavLink to="/clothing">clothing.</NavLink>
            </div>
        )
    }
}

export default HomePageNavbar; 