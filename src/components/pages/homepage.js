import React, { Component } from 'react';
import HomepageNavbar from './homepageNavbar';
import HomepagePictureCarousel from "./homepagePictureCarousel";

class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <HomepageNavbar />
                <HomepagePictureCarousel />
            </div>
        )
    }
}

export default HomePage; 