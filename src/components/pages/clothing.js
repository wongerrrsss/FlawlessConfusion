import React, { Component } from 'react';
import HomePageNavbar from './homepageNavbar';

import Img1 from "../../../static/images/ashleysmall6.jpg";
import Img2 from "../../../static/images/ashleysmall7.png";
import Img3 from "../../../static/images/ashleysmall8.jpg";
import Img4 from "../../../static/images/ashleysmall.jpg";



class Clothing extends Component {
    

    render() {
        return (
            <div className='clothing'>
                <HomePageNavbar/>
                
                <div className='clothing-wrapper'>
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                    <img src={Img4} />
                    {/* clothing components will go here */}
                    {/* shop product */}
                    {/* cart button */}
                    <div className='item-one'>
                        Fall is here sweater - $30.00
                        <p>add to bag.</p>
                    </div>
                    <div className='item-two'>
                        "FLY" tshirt - $15.00
                        <p>add to bag.</p>
                    </div>
                    <div className='item-three'>
                        Printed Cardigan (brown) - $20.00
                        <p>add to bag.</p>
                    </div>
                    <div className='item-four'>
                        Winter Wonderland Sweater - $30.00
                        <p>add to bag.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clothing; 