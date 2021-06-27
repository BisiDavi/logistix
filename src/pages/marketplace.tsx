import React from 'react';
import { PageTitle } from '@components/.';

const Marketplace = () => {
    return (
        <div className='marketplace'>
            <PageTitle title='Market place' />
            <h6>You need to signup as a rider to view the market place.</h6>
            <style jsx>
                {`
                    .marketplace {
                        height: 100vh;
                    }
                `}
            </style>
        </div>
    );
};

export default Marketplace;
