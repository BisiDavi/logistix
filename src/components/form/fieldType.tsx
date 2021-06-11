import React from 'react';
import { Input, RadioButton, SelectInput } from './fields/inputs';
import { TextInput } from './fields/MUIfields';

export const fieldType = (inputField, formik, index) => {
    switch (inputField.field) {
        case 'input':
            return <TextInput key={index} field={inputField} formik={formik} />;
        case 'radioButton':
            return <RadioButton field={inputField} />;
        case 'select':
            return <SelectInput field={inputField} />;
        default:
            return null;
    }
};

export const displayFormFields = (formField, formik) =>
    formField.map((field, index) => fieldType(field, formik, index));
