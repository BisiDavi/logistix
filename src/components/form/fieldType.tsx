import React from 'react';
import { Input, RadioButton, SelectInput } from './fields/inputs';
import { MUIRadio, MUISelect, TextInput } from './fields/MUIfields';

export const fieldType = (inputField, formik, index) => {
    switch (inputField.field) {
        case 'input':
            return <Input key={index} field={inputField} formik={formik} />;
        case 'text-input':
            return <TextInput key={index} field={inputField} formik={formik} />;
        case 'radioButton':
            return <RadioButton field={inputField} />;
        case 'select':
            return <SelectInput field={inputField} />;
        case 'mui-select':
            return <MUISelect formik={formik} field={inputField} />;
        case 'mui-radio':
            return <MUIRadio field={inputField} formik={formik} />;
        default:
            return null;
    }
};

export const displayFormFields = (formField, formik) =>
    formField.map((field, index) => fieldType(field, formik, index));
