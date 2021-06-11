import React, { FC } from 'react';
import AppModal from '.';
import AppTab from '@components/tabs';
import styles from './modal.module.css';

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
                <h5>Hello, Please login or create an account by signing up</h5>
                <AppTab className='appModal' tabData={tabData} />
            </AppModal>
            <style jsx>
                {`
                    h5 {
                        color: #c85a5f;
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
