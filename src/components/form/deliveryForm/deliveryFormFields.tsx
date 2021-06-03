import React from 'react';
import { Input } from '../inputs';

export const formFieldArray = [
    {
        name: 'fullName',
        type: 'text',
        placeholder: 'Full name',
        field: 'input',
    },
    {
        name: 'phoneNumber',
        type: 'number',
        placeholder: 'Phone Number',
        field: 'input',
    },
    {
        name: 'pickupAddress',
        type: 'text',
        placeholder: 'Pickup Address',
        field: 'input',
    },
    {
        name: 'state',
        type: 'text',
        placeholder: 'State',
        field: 'input',
    },
];

const fieldType = (inputField, formik, index) => {
    switch (inputField.field) {
        case 'input':
            return <Input key={index} field={inputField} formik={formik} />;
        default:
            return null;
    }
};

export const displayFormFields = (formField, formik) =>
    formField.map((field, index) => fieldType(field, formik, index));
