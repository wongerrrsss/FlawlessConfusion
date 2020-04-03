import React, { Component } from "react";

import { connect } from 'react-redux';
import history from '../../history';

class Header extends Component {
    render() {
        return (
            <div className="header__links">
                <a href="/"><h1>flawless confusion.</h1></a>
                {
                    this.props.headerLinks.map((link, index) => {
                        return (
                            <a className='header__link' key={index} onClick={() => history.push(link.path)}>
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
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);

export default Header; 