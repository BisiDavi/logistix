import React from 'react';
import { fieldType } from '../fieldType';

export const loginFieldArray = [
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

export const signupFieldArray = [
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

export const displayFormFields = (formField, formik) =>
    formField.map((field, index) => fieldType(field, formik, index));
