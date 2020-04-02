import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from "../../actions";


class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <NavLink to={"/"}><h1 className="header__text">flawless confusion.</h1></NavLink>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className='navbar__link' key={index} onClick={() => this.props.changeNavbarActive(link._id)}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar);

export default Navbar; 