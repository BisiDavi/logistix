import React from 'react';
import { HistoryTab } from './profileData';
import ProfileCard from './ProfileCard';

export default function History() {
    return (
        <div className='history'>
            {HistoryTab.map(function (data, index) {
                return <ProfileCard content={data} key={index} />;
            })}
        </div>
    );
}
