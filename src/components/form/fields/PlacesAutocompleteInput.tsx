import React, { FC } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { Form, InputGroup } from 'react-bootstrap';
import styles from '@styles/form.module.css';

export default function PlacesAutocompleteInput({
    field,
    formik,
    displayModal,
    index,
}: PlacesAutocompleteInputProps) {
    const { ref } = usePlacesWidget({
        apiKey: process.env.NEXT_PUBLIC_APIKEY,
        options: {
            types: ['establishment'],
            //fields: ['formatted_address', 'geometry'],
            locationBias: { lat: 6.5244, lng: 3.3792 },
            componentRestrictions: { country: 'ng' },
        },
        onPlaceSelected: function (place) {
            return formik.setFieldValue(field.name, place.formatted_address);
        },
    });
    return (
        <InputGroup className='my-2' key={index}>
            <InputGroup.Prepend className={styles.prepend}>
                <InputGroup.Text onClick={displayModal} className={styles.text}>
                    <img src='/mapIcon.png' alt='map icon' />
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
}

interface PlacesAutocompleteInputProps {
    field: any;
    formik: any;
    displayModal?: () => void;
    index?: number;
}
