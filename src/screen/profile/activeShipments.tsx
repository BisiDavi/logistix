import React from 'react';
import { ActiveShipmentTab } from './profileData';
import ProfileCard from './ProfileCard';

export default function ActiveShipment() {
    return (
        <div className='activeShipment'>
            {ActiveShipmentTab.map(function (data, index) {
                return <ProfileCard content={data} key={index} shouldTrack />;
            })}
        </div>
    );
}
