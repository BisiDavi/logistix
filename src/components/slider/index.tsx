import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './slider.module.css';
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
    const imageArray = [
        '/deliveryBoy.svg',
        '/sliderImage.svg',
        '/sliderImage2.svg',
    ];
    return (
        <>
            <Slider className={styles.Slider} {...settings}>
                {imageArray.map((image, index) => (
                    <div className='imageHolder' key={index}>
                        <Image
                            height={250}
                            width={250}
                            layout='responsive'
                            src={image}
                            alt='logistix banner'
                        />
                    </div>
                ))}
            </Slider>
            <style jsx>
                {`
                    .imageHolder {
                        height: 100%;
                        width: 100%;
                    }
                `}
            </style>
        </>
    );
};

export default ImageSlider;
