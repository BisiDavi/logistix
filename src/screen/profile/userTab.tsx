import React from 'react';
import { useSession } from 'next-auth/client';
import { Button, PageTitle } from '@components/.';
import { Dropdown } from '@components/buttons';
import { deliveryDetails, pickupDetails } from '@utils/profileDetails';
import { userData, nameInitials } from './profileData';

export default function UserTab() {
    const [session] = useSession();
    const { name, phoneNumber, location } = userData;
    return (
        <div className='profilePage'>
            <PageTitle title='Profile' />
            <div className='parcel-details'>
                <div className='user-profile mt-2'>
                    <div className='profile-icon'>{nameInitials(name)}</div>
                    <div className='user-details'>
                        <h5>Name:{session.user.name || session.user.email}</h5>
                        <h5>Phone number: {phoneNumber}</h5>
                        <h5>Location: {location}</h5>
                        <h5>Email: {session.user.email}</h5>
                    </div>
                </div>
                <Dropdown data={pickupDetails} />
                <Dropdown data={deliveryDetails} />
            </div>
            <div className='confirm-delivery'>
                <h5>Click to confirm Parcel Delivery</h5>
                <Button type='button' text='Confirm Delivery' />
            </div>
            <style jsx>
                {`
                    .profilePage {
                        padding: 15px;
                        background-color: #c85a5f14;
                        padding-bottom: 50px;
                    }
                    .welcome-note {
                        height: 30px;
                    }
                    .pickup {
                        font-size: 20px;
                        text-align: center;
                    }
                    .confirm-delivery {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .confirm-delivery h5 {
                        font-size: 14px;
                    }
                    .parcel-details h5 {
                        font-size: 16px;
                        font-family: sans-serif;
                    }
                    .user-profile {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                    }
                    .profile-icon {
                        height: 100px;
                        width: 100px;
                        background-color: #c85a5f;
                        border-radius: 50%;
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: bold;
                        font-size: 40px;
                        color: white;
                        margin-bottom: 20px;
                    }
                `}
            </style>
        </div>
    );
}
