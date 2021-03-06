import React, { Fragment } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './slider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
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
        '/deliveryCar.webp',
        '/bikeman.jpg',
        '/deliveryBoy.jpg',
    ];
    return (
        <Fragment>
            <Slider className={styles.Slider} {...settings}>
                {imageArray.map(function (image, index) {
                    return (
                        <div className='imageHolder' key={index}>
                            <Image
                                height={250}
                                width={300}
                                layout='responsive'
                                src={image}
                                alt='logistix banner'
                            />
                        </div>
                    );
                })}
            </Slider>
            <style jsx>
                {`
                    .imageHolder {
                        height: 100%;
                        width: 100%;
                    }
                `}
            </style>
        </Fragment>
    );
}
