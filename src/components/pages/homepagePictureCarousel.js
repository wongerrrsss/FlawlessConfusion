import React, { Component } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const photos = [
    {
        id: "1",
        name: 'Img1',
        url: 'https://hosting.photobucket.com/images/i/tmchilongo92/0/ashley3.jpg?width=368&height=224&fit=bounds&crop=fill'
    },
    {
        id: "2",
        name: 'Img2',
        url: 'https://hosting.photobucket.com/images/i/tmchilongo92/0/ashley2.jpg?width=368&height=224&fit=bounds&crop=fill'
    },
    {
        id: "3",
        name: 'Img3',
        url: 'https://hosting.photobucket.com/images/i/tmchilongo92/0/ashley.jpg?width=368&height=224&fit=bounds&crop=fill'
    },
    {
        id: "4",
        name: 'Img4',
        url: 'https://hosting.photobucket.com/images/i/tmchilongo92/0/ashley4.jpg?width=368&height=224&fit=bounds&crop=fill'
    }
]

class HomePagePictureCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true, 
            speed: 500, 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            className: "slides"
        };
        return (
            <div className="homepage-picture-carousel" style={{padding: 24}}>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div>
                                <img width="100%" src={photo.url}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default HomePagePictureCarousel;