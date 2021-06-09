import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src='/deliveryBoy.svg' />
            </div>
            <div>
                <img src='/sliderImage.webp' />
            </div>
            <div>
                <img src='/sliderImage2.webp' />
            </div>
        </Slider>
    );
};

export default ImageSlider;
