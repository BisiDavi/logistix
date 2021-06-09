import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplayspeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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
            <style jsx>
                {`
                    div {
                        height: 100%;
                        width: 100%;
                    }
                    img {
                        height: 100%;
                        width: 100%;
                    }
                `}
            </style>
        </Slider>
    );
};

export default ImageSlider;
