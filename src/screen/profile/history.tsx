import React from 'react';
import { HistoryTab } from './profileData';
import { Button } from '@components/.';

const History = () => {
    return (
        <div className='history'>
            {HistoryTab.map((data, index) => (
                <div key={index}>
                    <div className='title'>
                        <h4>{data.title}</h4>
                        <span className='status'>{data.status}</span>
                    </div>
                    <div className='content'>
                        <div className='indicator'>
                            <img src='/indicator.png' alt='indicator' />
                        </div>
                        <div className='address'>
                            <p>{data.pickupAddress}</p>
                            <p>{data.deliveryAddress}</p>
                        </div>
                        <p>
                            Picked up by {data.rider} at {data.time}
                        </p>
                    </div>
                    <Button text='Track' />
                </div>
            ))}
        </div>
    );
};

export default History;
