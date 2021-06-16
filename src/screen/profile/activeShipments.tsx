import React from 'react';
import { ActiveShipmentTab } from './profileData';
import { Button } from '@components/.';

const ActiveShipments = () => {
    return (
        <div className='activeShipment'>
            {ActiveShipmentTab.map((data, index) => (
                <div key={index}>
                    <div className='title'>
                        <h4>{data.title}</h4>
                        <span className='status'>{data.status}</span>
                    </div>
                    <div className='content'>
                        <div className='indicator'></div>
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

export default ActiveShipments;
