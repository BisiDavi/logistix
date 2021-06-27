import React from 'react';

export const signupFieldArray = [
    {
        name: 'fullName',
        type: 'text',
        placeholder: 'Your full name',
        field: 'text-input',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Your email',
        field: 'text-input',
    },
    {
        name: 'phoneNumber',
        type: 'number',
        placeholder: 'Your Phone number',
        field: 'text-input',
    },
    {
        name: 'sex',
        type: 'radio',
        labels: ['male', 'female'],
        field: 'mui-radio',
    },
    {
        name: 'location',
        type: 'text',
        placeholder: 'Your current location',
        field: 'text-input',
    },
    //{
    //    name: 'password',
    //    type: 'password',
    //    placeholder: 'set your password',
    //    field: 'password',
    //},
    //{
    //    name: 'confirmPassword',
    //    type: 'password',
    //    placeholder: 'confirm your password',
    //    field: 'text-input',
    //},
];

export function loginFieldArray() {
    return [
        {
            name: 'userEmail',
            type: 'email',
            placeholder: 'Your email?',
            field: 'text-input',
        },
    ];
}
