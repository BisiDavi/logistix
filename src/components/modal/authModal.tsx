import React, { FC } from 'react';
import { signIn } from 'next-auth/client';
import AppTab from '@components/tabs';
import { ToastContainer, toast } from 'react-toastify';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import StaticModal from './StaticModal';
import styles from './modal.module.css';
import { Authmodal } from '@styles/.';

const AuthModal: FC<AuthModalProps> = ({ show, onHide }) => {
    const tabData = {
        id: 'authModalTab',
        defaultTab: 'signup',
        content: [{ eventKey: 'signup', title: 'Signup' }],
    };
    const signInHandler = (name: string): any =>
        signIn(name)
            .then(() =>
                toast.success(
                    `wait, you'll be redirected to ${name}, for authentication`,
                ),
            )
            .catch(() => toast.error('An error occured, please try again'));

    return (
        <StaticModal show={show} onHide={onHide} className={styles.AppModal}>
            <Authmodal className='authModal'>
                <>
                    <AppTab tabData={tabData} />
                    <div className='socials'>
                        <h4>Access via Facebook or Google</h4>
                        <div className='socialLogin'>
                            <span className='mx-2'>
                                <FaFacebook
                                    onClick={() => signInHandler('facebook')}
                                    size='25px'
                                />
                            </span>
                            <span className='mx-2'>
                                <FaGoogle
                                    onClick={() => signInHandler('google')}
                                    size='25px'
                                />
                            </span>
                        </div>
                    </div>
                    <ToastContainer />
                </>
            </Authmodal>
        </StaticModal>
    );
};
interface AuthModalProps {
    show: boolean;
    onHide: () => void;
}
export default AuthModal;
