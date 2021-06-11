import React from 'react';

export const signupFieldArray = [
    {
        name: 'fullName',
        type: 'email',
        placeholder: 'Your full name',
        field: 'input',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Your email',
        field: 'input',
    },
    {
        name: 'sex',
        type: 'radio',
        labels: ['male', 'female'],
        field: 'radioButton',
    },

    {
        name: 'location',
        type: 'text',
        placeholder: 'Your current location',
        field: 'input',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'set your password',
        field: 'input',
    },
    {
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'confirm your password',
        field: 'input',
    },
];

export const loginFieldArray = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'Your email?',
        field: 'input',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Your password',
        field: 'input',
    },
];