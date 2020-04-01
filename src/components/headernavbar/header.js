import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to={"/"}><h1>flawless confusion.</h1></NavLink>
                <div className="header__links">
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a className='header__link' key={index} onClick={() => console.log('trying to switch tab')}>
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);

export default Header; 