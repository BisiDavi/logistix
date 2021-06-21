import React, { FC } from 'react';
import AppTab from '@components/tabs';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import StaticModal from './StaticModal';
import styles from './modal.module.css';
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
        <StaticModal show={show} onHide={onHide} className={styles.AppModal}>
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
        </StaticModal>
    );
};
interface AuthModalProps {
    show: boolean;
    onHide: () => void;
}
export default AuthModal;
