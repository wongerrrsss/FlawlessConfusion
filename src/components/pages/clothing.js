import React, { Component } from 'react';
import HomePageNavbar from './homepageNavbar';

import Img1 from "../../../static/images/ashleysmall6.jpg";
import Img2 from "../../../static/images/ashleysmall7.png";
import Img3 from "../../../static/images/ashleysmall8.jpg";
import Img4 from "../../../static/images/ashleysmall.jpg";


class Clothing extends Component {

    componentDidMount() {
        // fetch shop products
    }

    render() {
        return (
            <div className='clothing'>
                <HomePageNavbar/>
                <img src={Img1} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
                {/* clothing components will go here */}
                {/* shop product */}
                {/* cart button */}
            </div>
        )
    }
}

export default Clothing; 