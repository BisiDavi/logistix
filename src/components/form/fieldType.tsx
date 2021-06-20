import React from 'react';
import { Input, RadioButton, SelectInput } from './fields/inputs';
import MUIFields from './fields/MUIfields';
import {
    MUIRadio,
    MUISelect,
    PasswordField,
    TextInput,
} from './fields/FormFields';

export const fieldType = (inputField, formik, index) => {
    //const { MUIRadio, MUISelect, PasswordField, TextInput } = MUIFields(
    //    formik,
    //    inputField,
    //);

    switch (inputField.field) {
        case 'input': {
            return <Input key={index} field={inputField} formik={formik} />;
        }
        case 'text-input': {
            return (
                <TextInput
                    index={index}
                    formik={formik}
                    field={inputField}
                    key={index}
                />
            );
        }
        case 'radioButton': {
            return <RadioButton key={index} field={inputField} />;
        }
        case 'select': {
            return <SelectInput key={index} field={inputField} />;
        }
        case 'mui-select': {
            return (
                <MUISelect
                    index={index}
                    key={index}
                    formik={formik}
                    field={inputField}
                />
            );
        }
        case 'mui-radio': {
            return (
                <MUIRadio
                    index={index}
                    key={index}
                    formik={formik}
                    field={inputField}
                />
            );
        }
        case 'password': {
            return <PasswordField index={index} key={index} formik={formik}
						field={inputField} />;
        }
        default:
            return null;
    }
};

export const displayFormFields = (formField, formik) =>
    formField.map((field, index) => fieldType(field, formik, index));
