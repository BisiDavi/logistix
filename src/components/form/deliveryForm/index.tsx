import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button } from '@components/.';
import styles from '@styles/form.module.css';
import { PrependInput } from '../inputs';
import { displayFormFields, formFieldArray } from './deliveryFormFields';

const DeliveryForm = () => {
    const [showMore, setShowMore] = useState(false);

    const formik = useFormik({
        initialValues: {
            deliveryAddress: '',
            fullName: '',
            phoneNumber: '',
            pickupAddress: '',
            state: 'lagos',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log('values', values);
        },
    });
    const displayMoreFields = () => setShowMore(true);

    const prependInput = {
        name: 'deliveryAddress',
        placeholder: 'Enter delivery address',
        type: 'text',
    };

    const submitHandler = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    };

    return (
        <Form className={styles.form} onSubmit={submitHandler}>
            <span>
                <PrependInput icon='map' field={prependInput} formik={formik} />
            </span>
            {showMore ? (
                <>
                    {displayFormFields(formFieldArray, formik)}
                    <Button type='submit' text='Order' />
                </>
            ) : (
                <Button
                    type='button'
                    onClick={displayMoreFields}
                    text='Continue'
                />
            )}
        </Form>
    );
};

export default DeliveryForm;
