import React from 'react';
import { ProfileTab } from './profileData';
import { AppTab } from '@components/.';

export default function ProfileScreen() {
    return (
        <div>
            <AppTab tabData={ProfileTab} />
        </div>
    );
}
