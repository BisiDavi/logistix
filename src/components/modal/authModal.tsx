import React, { FC, useEffect } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import AppTab from '@components/tabs';
import { ToastContainer, toast } from 'react-toastify';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import StaticModal from './StaticModal';
import styles from './modal.module.css';
import { Authmodal } from '@styles/.';

export default function AuthModal({ show, onHide }: AuthModalProps) {
    const tabData = {
        id: 'authModalTab',
        defaultTab: 'signup',
        content: [{ eventKey: 'signup', title: 'Signup' }],
    };
    function signInHandler(name: string): any {
        return signIn(name)
            .then(function () {
                return toast.success(
                    `wait, you'll be redirected to ${name}, for authentication`,
                );
            })
            .catch(function () {
                return toast.error('An error occured, please try again');
            });
    }
    const router = useRouter();

    useEffect(function () {
        if (router.pathname.includes('&error')) {
            toast.error(
                'That email is already in our database, please use email method to sign in',
            );
        }
    }, []);

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
}
interface AuthModalProps {
    show: boolean;
    onHide: () => void;
}
