import React from 'react';
import { LoginForm,SignupForm } from '@components/form';

const DisplayTabs = (tabName: string) => {
    switch (tabName) {
        case 'login':
            return <LoginForm />;
        case 'signup':
            return <SignupForm />;

        default:
            return null;
    }
};

export default DisplayTabs;
