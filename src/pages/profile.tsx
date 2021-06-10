import React from 'react';
import { Button, PageTitle, TypewriterEffect } from '@components/.';
import { Dropdown } from '@components/buttons';
import { deliveryDetails, pickupDetails } from '@utils/profileDetails';

const Profile = () => {
    const typeWords = [
        '<h5>Welcome <span style="color:#c85a5f;;">Smith</span> </h5>',
        '<h5>Thanks for using <span style="color:#c85a5f;;">Logistix</span></h5>',
    ];

    return (
        <div className='profilePage'>
            <PageTitle title='Profile' />
            <div className='welcome-note d-flex mx-auto'>
                <TypewriterEffect words={typeWords} />
            </div>

            <h3>Your Parcel Details</h3>
            <div className='parcel-details'>
                <div className='user-profile mt-5'>
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
                `}
            </style>
        </div>
    );
};

export default Profile;
