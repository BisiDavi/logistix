import React from 'react';
import { Button, PageTitle, TypewriterEffect } from '@components/.';
import { Dropdown } from '@components/buttons';
import { deliveryDetails, pickupDetails } from '@utils/profileDetails';

const UserTab = () => {

    return (
        <div className='profilePage'>
            <PageTitle title='Profile' />
            <div className='parcel-details'>
                <div className='user-profile mt-2'>
                    <div className='profile-icon'></div>
                    <div className='user-details'>
                        <h5>Name:</h5>
                        <h5>Phone number:</h5>
                        <h5>Location:</h5>
                        <h5>Email:</h5>
                        <h5>Sex:</h5>
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
                        align-items: center;
                        justify-content: flex-start;
                    }
                    .profile-icon {
                        height: 100px;
                        width: 100px;
                        background-color: #c85a5f;
                        border-radius: 50%;
                        margin-right: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default UserTab;
