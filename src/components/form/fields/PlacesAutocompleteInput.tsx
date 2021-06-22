import React, { FC } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { Form, InputGroup } from 'react-bootstrap';
import { FaMapMarker } from 'react-icons/fa';
import styles from '@styles/form.module.css';

const PlacesAutocompleteInput:FC<PlacesAutocompleteInputProps> = ({ field, formik, displayModal, index }) => {

    const { ref } = usePlacesWidget({
        apiKey: process.env.NEXT_PUBLIC_APIKEY,
        options: {
            types: ['establishment'],
            fields: ['formatted_address', 'geometry'],
            locationBias: { lat: 6.5244, lng: 3.3792 },
            componentRestrictions: { country: 'ng' },
        },
        onPlaceSelected: (place) => {
            formik.setFieldValue(formik.values[field.name], place.formatted_address);
        },
    });
    return (
        <InputGroup>
            <InputGroup.Prepend className={styles.prepend}>
                <InputGroup.Text onClick={displayModal} className={styles.text}>
                    <FaMapMarker />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Group className={styles.formGroup}>
                <Form.Control
                    name={field.name}
                    id={field.name}
                    type={field.type}
                    ref={ref}
                    placeholder={field.placeholder}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    isValid={
                        formik.touched[field.name] &&
                        !Boolean(formik.errors[field.name])
                    }
                />
                <Form.Control.Feedback
                    className='d-block text-center'
                    type='invalid'
                >
                    {formik.errors[field.name]}
                </Form.Control.Feedback>
            </Form.Group>
        </InputGroup>
    );
};


interface PlacesAutocompleteInputProps {
	field: any;
	formik: any;
	displayModal?: () => void;
	index?:number
}

export default PlacesAutocompleteInput;
