import React from 'react';
import { ProfileScreen, typeWords } from '@screen/.';
import { useSession } from 'next-auth/client';
import { TypewriterEffect } from '@components/.';

export default function Profile() {
    const [session] = useSession();
    console.log('session', session);
    const userName = session ? session.user.name || session.user.email : '';
    return (
        <div className='profile'>
            {session ? (
                <>
                    <div className='welcome-note d-flex mx-auto my-2'>
                        <TypewriterEffect words={typeWords(userName)} />
                    </div>
                    <ProfileScreen />
                </>
            ) : (
                <p>
                    Hello, You need to sign up to view profile. Please click on
                    the signup button
                </p>
            )}
            <style jsx>
                {`
                    .profile {
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        height: 100vh;
                    }
                    .welcome-note {
                        height: 30px;
                    }
                `}
            </style>
        </div>
    );
}
