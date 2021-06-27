import React, { useState, Fragment, useEffect } from 'react';
import { PageTitle, TextAnimate, ImageSlider } from '@components/.';
import Section from '@components/text/section';
import EmailModal from '@components/modal/EmailModal';
import 'react-toastify/dist/ReactToastify.css';
import { connectToDatabase } from '@middlewares/database';

export default function Home({ isConnected }) {
    const [data, setData] = useState(null);
    const [user, setUser] = useState({
        showEmail: false,
        confirmationEmail: '',
        details: null,
    });

    async function fetchData() {
        return await fetch('/api/core-values', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        })
            .then((res) => res.json())
            .then((d) => setData(d));
    }

    function closeEmailModal() {
        return setUser({
            ...user,
            showEmail: false,
        });
    }
    isConnected && console.log('You are connected to mongoDB');

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            <PageTitle title='Get your products delivered just in time.' />
            <section>
                <TextAnimate />
                <ImageSlider />
                <EmailModal
                    user={user}
                    setEmail={setUser}
                    onHide={closeEmailModal}
                />
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
        </Fragment>
    );
}

export async function getServerSideProps() {
    const { client } = await connectToDatabase();
    const isConnected = await client.isConnected();

    return {
        props: {
            isConnected,
        },
    };
}
