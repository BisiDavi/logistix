import React from 'react';
import { HistoryTab } from './profileData';
import ProfileCard from './ProfileCard';

const History = () => {
    return (
        <div className='history'>
            {HistoryTab.map((data, index) => (
                <ProfileCard content={data} key={index} />
            ))}
        </div>
    );
};

export default History;
