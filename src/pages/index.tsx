import React, { useState, useEffect } from 'react';
import { PageTitle, TextAnimate, ImageSlider } from '@components/.';
import Section from '@components/text/section';

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
            <Section data={data} />
            <style jsx>
                {`
                    section {
                        background-color: #c85a5f14;
                        height: 100%;
                        width: 100%;
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
