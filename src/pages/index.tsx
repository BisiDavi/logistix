import React, { useState, useEffect } from 'react';
import { PageTitle, TextAnimate, ImageSlider } from '@components/.';

const Home = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        await fetch('/api/core-values', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        })
            .then((res) => res.json())
            .then((d) => setData(d));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <PageTitle title='Get your products delivered just in time.' />
            <section>
                <TextAnimate />
                <ImageSlider />
            </section>
            <section>
                <div className='image-container'>section 1</div>
                <div className='image-container'>section 2</div>
            </section>
            <style jsx>
                {`
                    section {
                        background-color: #fff2d9;
                        height: 100%;
                        width: 100%;
                        margin-top: -20px;
                        padding: 40px 0;
                    }
                    .image-container {
                        height: 250px;
                        width: 100%;
                        text-align: center;
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: lightgray;
                    }
                `}
            </style>
        </>
    );
};

export default Home;
