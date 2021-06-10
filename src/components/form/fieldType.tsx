import { Input, RadioButton, SelectInput } from './inputs';

export const fieldType = (inputField, formik, index) => {
    switch (inputField.field) {
        case 'input':
            return <Input key={index} field={inputField} formik={formik} />;
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
