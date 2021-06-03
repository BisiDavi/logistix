import React from 'react';
import { TextAnimate } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm';
import { Pagelayout } from '@layout/.';

//#c85a5f

const Home = () => {
    return (
        <Pagelayout title='Get your products delivered just in time.'>
            <>
                <section>
                    <TextAnimate />
                    <DeliveryForm />
                </section>
                <style jsx>
                    {`
                        section {
                            background-color: #fff2d9;
                            height: 60vh;
                            width: 100%;
                            margin-top: -20px;
                            padding-top: 40px;
                        }
                    `}
                </style>
            </>
        </Pagelayout>
    );
};

export default Home;
