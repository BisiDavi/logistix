import React from 'react';

export const formFieldArray = [
    {
        name: 'parcel',
        type: 'text',
        placeholder: 'What do you want to deliver?',
        field: 'input',
    },
    {
        name: 'pickupAddress',
        type: 'text',
        placeholder: 'Pickup Address',
        field: 'input',
    },
    {
        name: 'deliveryMethod',
        type: 'text',
        text: 'Delivery Method',
        placeholder: 'Select your Delivery method',
        options: ['Select your Delivery method', 'bike', 'van'],
        field: 'select',
    },
    {
        name: 'state',
        type: 'text',
        placeholder: 'State',
        field: 'input',
    },
];
