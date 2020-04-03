import React, { Component } from 'react';

import HomepageNavbar from './homepageNavbar';

class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <HomepageNavbar />
                <p>Flawless Confusion is small online-boutique, where all our items are handmade and orders are crafted with care.</p>
            </div>
        )
    }
}

export default HomePage; 