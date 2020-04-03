import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from "../../actions";
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';
// import HomePage from "../pages/homepage";

import Navbar from "../../components/headernavbar/navbar";
import Header from '../headernavbar/header';

class Account extends Component {

    componentDidMount() {

        const headerLinks = [
            {
                _id: 0, 
                title: '|  home.  |',
                path: '/'
            },
            {
                _id: 1, 
                title: '|  shop.  |',
                path: '/clothing'
            },
            {
                _id: 2, 
                title: '|  logout.  |',
                path: '/'
            }
        ]

        const navbarLinks = [
            {
                _id: 0,
                title: 'my purchases.',
                active: true,
                component: <PurchaseHistory/>
            },
            {
                _id: 1, 
                title: ' my account info.',
                active: false, 
                component: <AccountInformation/>
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;
        if(this.props.navbarLinks) {
            this.props.navbarLinks.map(link => {
                if(link.active) {
                    jsx = link.component
                }
            })
        }
        return jsx;
    }

    render() {
        return (
            <div className='account'>
                <Header />
                <Navbar />
                { this.renderContent() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account; 