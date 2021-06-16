import React from 'react';
import { ProfileTab } from './profileData';
import { AppTab } from '@components/.';

const ProfileScreen = () => {
    return (
        <div>
            <AppTab tabData={ProfileTab} />
        </div>
    );
};

export default ProfileScreen;
