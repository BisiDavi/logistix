import React, { FC } from 'react';
import AppModal from '.';
import AppTab from '@components/tabs';
import styles from './modal.module.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Authmodal } from '@styles/.';

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
        <AppModal show={show} onHide={onHide} className={styles.AppModal}>
            <Authmodal className='authModal'>
                {/*<h5>Hello, Please login or create an account by signing up</h5>*/}
                <AppTab tabData={tabData} />
                <div className='socials'>
                    <h4>Access via Facebook or Google</h4>
                    <div className='socialLogin'>
                        <span className='mx-2'>
                            <FaFacebook size='25px' />
                        </span>
                        <span className='mx-2'>
                            <FaGoogle size='25px' />
                        </span>
                    </div>
                </div>
            </Authmodal>
        </AppModal>
    );
};
interface AuthModalProps {
    show: boolean;
    onHide: () => void;
}
export default AuthModal;
