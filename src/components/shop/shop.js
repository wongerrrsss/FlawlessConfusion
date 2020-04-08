import React, { Component } from 'react';
import HomePageNavbar from '../pages/homepageNavbar';

import { connect } from 'react-redux'
import * as actions from "../../actions"

class Shop extends Component {

    componentDidMount() {
        this.props.fetchShopCategories()
    }

    render() {
        return (
            <div className='shop'>
                <HomePageNavbar/>
                
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return { state }
}

Shop = connect(mapStatetoProps, actions)(Shop);

export default Shop; 