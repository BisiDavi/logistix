import React, { FC, useState } from 'react';
import { Profilecard, ParcelStatus } from '@styles/.';
import { Button } from '@components/.';

const ProfileCard: FC<ProfileCardProps> = ({ content, shouldTrack }) => {
    const [showContent, setShowContent] = useState(false);
    const displayContent = () => setShowContent(!showContent);
    return (
        <>
            <Profilecard>
                <div onClick={displayContent} className='title'>
                    <h4>{content.title}</h4>
                    <span className='status'>
                        {ParcelStatus(content.status)}
                    </span>
                </div>
                {showContent && (
                    <div className='body'>
                        <div className='content'>
                            <div className='text'>
                                <div className='indicator'></div>
                                <div className='address'>
                                    <p>{content.pickupAddress}</p>
                                    <p>{content.deliveryAddress}</p>
                                </div>
                            </div>
                            <p>
                                Picked up by {content.rider} at {content.time}
                            </p>
                        </div>
                        {shouldTrack && (
                            <div className='button'>
                                <Button text='Track' />
                            </div>
                        )}
                    </div>
                )}
            </Profilecard>
        </>
    );
};

type profileType = {
    time: string;
    rider: string;
    title: string;
    status: string;
    pickupAddress: string;
    deliveryAddress: string;
};

interface ProfileCardProps {
    content: profileType;
    shouldTrack?: boolean;
}

export default ProfileCard;
