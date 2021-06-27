import React, { useState, useEffect } from 'react';
import { PageTitle, TextAnimate, ImageSlider } from '@components/.';
import FirebaseAuth from '@firebase/auth';
import { ToastContainer } from 'react-toastify';
import Section from '@components/text/section';
import EmailModal from '@components/modal/EmailModal';
import 'react-toastify/dist/ReactToastify.css';
import { getProviders } from 'next-auth/client';

const Home = ({ providers }) => {

    const [data, setData] = useState(null);
    const [user, setUser] = useState({
        showEmail: false,
        confirmationEmail: '',
        details: null,
    });
    const { handleSignIn } = FirebaseAuth();
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

    const closeEmailModal = () =>
        setUser({
            ...user,
            showEmail: false,
        });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        handleSignIn(user, setUser);
    }, []);

    return (
        <>
            <PageTitle title='Get your products delivered just in time.' />
            <section>
                <TextAnimate />
                <ImageSlider />
                <EmailModal
                    user={user}
                    setEmail={setUser}
                    onHide={closeEmailModal}
                />
                <ToastContainer />
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
