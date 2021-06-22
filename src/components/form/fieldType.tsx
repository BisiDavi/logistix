import React from 'react';
import { Input, RadioButton, SelectInput } from './fields/inputs';
import {
    MUIRadio,
    MUISelect,
    PasswordField,
    TextInput,
} from './fields/FormFields';
import PlacesAutocompleteInput from './fields/PlacesAutocompleteInput';
import styles from '@styles/form.module.css';

export const fieldType = (inputField, formik, index, displayModal) => {

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
				case 'autocomplete':{
					return (
						<span key={index} className={styles.prependInput}>
							<PlacesAutocompleteInput
								index={index}
								key={index}
								field={inputField}
								formik={formik}
								displayModal={() => displayModal(true)}
							/>
						</span>
					)
				}
        case 'password': {
            return <PasswordField index={index} key={index} formik={formik}
						field={inputField} />;
        }
        default:
            return null;
    }
};

export const displayFormFields = (formField:any, formik:any,
	displayModal?:(value:boolean)=> void) =>
    formField.map((field, index) => fieldType(field, formik, index, displayModal));

