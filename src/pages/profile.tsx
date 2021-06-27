import React from 'react';
import { ProfileScreen, typeWords } from '@screen/.';
import { useSession } from 'next-auth/client';
import { TypewriterEffect } from '@components/.';

const Profile = () => {
    const [session] = useSession();
    console.log('session', session);
    const userName =
        (session !== undefined && session.user.name) ||
        (session !== undefined && session.user.email);
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
                    }
                    .welcome-note {
                        height: 30px;
                    }
                `}
            </style>
        </div>
    );
};

export default Profile;
