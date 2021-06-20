import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button, AuthModal } from '@components/.';
import { PrependInput } from '../fields/inputs';
import { displayFormFields } from '../fieldType';
import { formFieldArray } from './deliveryFormFields';
import { DeliverySchema } from './deliverySchema';
//import { generateRandomImages } from '@utils/.';
import styles from '@styles/form.module.css';

const DeliveryForm = () => {
    const [showModal, setShowModal] = useState(false);
    //const [bgImg, setBgImg] = useState('');
    //const bgImg = generateRandomImages();
    //console.log('randomBackgroundImage', bgImg);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const formik = useFormik({
        initialValues: {
            parcel: '',
            pickupAddress: '',
            deliveryAddress: '',
            deliveryMethod: '',
            state: '',
        },
        validationSchema: DeliverySchema,
        onSubmit: (values) => {
            console.log('values', values);
            openModal();
        },
    });

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
        <div className='delivery-form position-relative'>
            <div className='overlay'></div>
            <div className='form-wrapper'>
                <Form
                    className={`${styles.form} ${styles.deliveryForm} mx-auto`}
                    onSubmit={submitHandler}
                >
                    <span className={styles.prependInput}>
                        <PrependInput
                            icon='map'
                            field={prependInput}
                            formik={formik}
                        />
                    </span>
                    <>
                        {displayFormFields(formFieldArray, formik)}
                        <Button type='submit' text='Proceed' />
                    </>
                </Form>
                <AuthModal show={showModal} onHide={closeModal} />
            </div>
            <style jsx>
                {`
                    .delivery-form {
                        background-image: url('/deliveryBoy.jpg');
                        height: 85vh;
                        width: 100%;
                        background-position: center;
                        background-size: cover;
                    }
                    .form-wrapper {
                        position: absolute;
                        z-index: 90;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        margin: auto;
                        justify-content: center;
                    }
                    .overlay {
                        background-color: black;
                        opacity: 0.5;
                        z-index: 1;
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 100%;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
};

export default DeliveryForm;
