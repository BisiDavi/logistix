import React, { useState } from 'react';
import { Button, PageTitle, TypewriterEffect } from '@components/.';
import { Dropdown } from '@components/buttons';

const Profile = () => {
    const typeWords = [
        '<h5>Welcome <span style="color:#c85a5f;;">Smith</span> </h5>',
        '<h5>Thanks for using <span style="color:#c85a5f;;">Logistix</span></h5>',
    ];

    const pickupDetails = {
        text: 'Pickup Details',
        dropdown: [
            { text: 'Parcel ID', value: '' },
            { text: 'Parcel Name', value: '' },
            { text: 'Parcel Delivery method', value: '' },
            { text: 'Parcel Condition', value: '' },
            { text: 'Your Phone Number', value: '' },
            { text: 'Your Address', value: '' },
            { text: 'Your email', value: '' },
        ],
    };
    const deliveryDetails = {
        text: 'Delivery Details',
        dropdown: [
            { text: 'Delivery Contact Name', value: '' },
            { text: 'Delivery Contact Address', value: '' },
            { text: 'Delivery Contact PhoneNumber', value: '' },
        ],
    };
    return (
        <div className='profilePage'>
            <PageTitle title='Profile' />
            <div className='welcome-note d-flex mx-auto'>
                <TypewriterEffect words={typeWords} />
            </div>
            <div className='user-profile mt-5'>
                <div className='profile-icon'></div>
            </div>

            <h3>Your Parcel Details</h3>
            <div className='parcel-details'>
                <h5>Parcel ID:</h5>
                <h5>Parcel Name: </h5>
                <h5>Parcel Delivery method: Bike</h5>
                <h5>Parcel Condition: Good</h5>
                <h5>Your Phone Number: </h5>
                <h5>Your Address: </h5>
                <h5>Your email: </h5>
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
