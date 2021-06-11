import React, { FC } from 'react';
import AppModal from '.';
import { Logo } from '@components/icons';
import AppTab from '@components/tabs';
import styles from './authModal.module.css';

const AuthModal: FC<AuthModalProps> = ({ show, onHide }) => {
    const tabData = {
        id: 'authModalTab',
        defaultTab: 'signup',
        content: [
            { eventKey: 'signup', title: 'Signup' },
            { eventKey: 'login', title: 'Login' },
        ],
    };
    return (
        <>
            <AppModal show={show} onHide={onHide} className={styles.AppModal}>
                <div className='logo'>
                    <Logo />
                </div>
                <h5>Hello, Please login or create an account by signing up</h5>
                <AppTab tabData={tabData} />
            </AppModal>
            <style jsx>
                {`
                    h5 {
                        color: red;
                        font-size: 16px;
                        font-family: 'Roboto', sans-serif;
                    }
                `}
            </style>
        </>
    );
};
interface AuthModalProps {
    show: boolean;
    onHide: () => void;
}
export default AuthModal;
