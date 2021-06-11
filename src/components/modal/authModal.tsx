import React, { FC } from 'react';
import AppModal from '.';
import { Logo } from '@components/icons';
import AppTab from '@components/tabs';

const AuthModal: FC<AuthModalProps> = ({ show, onHide }) => {
    const tabData = {
        id: 'authModalTab',
				defaultTab:'signup',
        content: [
            { eventKey: 'signup', title: 'Signup' },
            { eventKey: 'login', title: 'Login' },
        ],
    };
    return (
        <AppModal
            show={show}
            onHide={onHide}
            title='Hello, Please login or create an account by signing up'
        >
            <div className='logo'>
                <Logo />
            </div>
            <AppTab tabData={tabData} />
        </AppModal>
    );
};
interface AuthModalProps {
    show: boolean;
    onHide: () => void;
}
export default AuthModal;
