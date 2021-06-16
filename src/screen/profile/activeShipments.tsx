import React from 'react';
import { ActiveShipmentTab } from './profileData';
import ProfileCard from './ProfileCard';

const ActiveShipment = () => {
    return (
        <div className='activeShipment'>
            {ActiveShipmentTab.map((data, index) => (
                <ProfileCard content={data} key={index} shouldTrack />
            ))}
        </div>
    );
};

export default ActiveShipment;
