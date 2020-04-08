import React, { Component } from 'react';
import HomePageNavbar from './homepageNavbar';


import Img1 from "../../../static/images/ashleysmall6.jpg";
import Img2 from "../../../static/images/ashleysmall7.png";
import Img3 from "../../../static/images/ashleysmall8.jpg";
import Img4 from "../../../static/images/ashleysmall.jpg";

import Quantity from "../quantity";

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
                    <div className='item-one'>
                        <p>Fall is here sweater - $30.00</p>
                        <button className='button'>add to bag.</button>
                        <Quantity className='quantity-counter' quantity={0}/>
                    </div>
                    <div className='item-two'>
                        <p>"FLY" tshirt - $15.00</p>
                        <button className='button'>add to bag.</button>
                        <Quantity className='quantity-counter' quantity={0}/>
                    </div>
                    <div className='item-three'>
                        <p>Printed Cardigan (brown) - $20.00</p>
                        <button className='button'>add to bag.</button>
                        <Quantity className='quantity-counter' quantity={0}/>
                    </div>
                    <div className='item-four'>
                        <p>Winter Wonderland Sweater - $30.00</p>
                        <button className='button'>add to bag.</button>
                        <Quantity className='quantity-counter' quantity={0}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Clothing; 