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
        </Pagelayout>
    );
};

export default Home;
