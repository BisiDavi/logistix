import React from 'react';
import { ProfileScreen, typeWords } from '@screen/.';
import { TypewriterEffect } from '@components/.';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='welcome-note d-flex mx-auto my-2'>
                <TypewriterEffect words={typeWords} />
            </div>
            <ProfileScreen />
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
