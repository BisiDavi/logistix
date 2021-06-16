import React from 'react';
import { LoginForm, SignupForm } from '@components/form';
import { ActiveShipment, History, UserTab } from '@components/.';

const DisplayTabs = (tabName: string) => {
    switch (tabName) {
        case 'login':
            return <LoginForm />;
        case 'signup':
            return <SignupForm />;
        case 'activeShipment':
            return <ActiveShipment />;
        case 'history':
            return <History />;
        case 'userTab':
            return <UserTab />;

        default:
            return null;
    }
};

export default DisplayTabs;
