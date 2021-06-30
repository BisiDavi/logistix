import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button } from '@components/.';
import { displayFormFields } from '../fieldType';
import { formFieldArray } from './deliveryFormFields';
import { DeliverySchema } from './deliverySchema';
import PlacesAutocompleteInput from '../fields/PlacesAutocompleteInput';
import Map from '@components/map';
import getUserLocation from '@utils/getUserLocation';
import styles from '@styles/form.module.css';

export default function DeliveryForm() {
    const [showForm, setShowForm] = useState(true);
    const [userLocation, setUserLocation] = useState(null);
    const [mapDeliveryAddress, setMapDeliveryAddress] = useState(null);

    useEffect(() => {
        getUserLocation(setUserLocation);
    }, []);

    const formik = useFormik({
        initialValues: {
            parcel: '',
            pickupAddress: '',
            deliveryAddress: '',
            deliveryMethod: '',
            state: '',
        },
        validationSchema: DeliverySchema,
        onSubmit: function (values) {
            console.log('values', values);
            toast.success('Order Received, thanks for using logistix');
        },
    });

    console.log('mapDeliveryAddress', mapDeliveryAddress);

    const prependInput = {
        name: 'deliveryAddress',
        placeholder: 'Enter delivery address',
        type: 'text',
    };

    function submitHandler(e) {
        e.preventDefault();
        return formik.handleSubmit();
    }

    return (
        <div className='delivery-form position-relative'>
            <div className='overlay' onClick={() => setShowForm(false)}></div>
            <Map userLocation={userLocation} address={setMapDeliveryAddress} />
            <div className='form-wrapper'>
                {showForm ? (
                    <Form
                        className={`${styles.form} ${styles.deliveryForm} mx-auto`}
                        onSubmit={submitHandler}
                    >
                        <span className={styles.prependInput}>
                            <PlacesAutocompleteInput
                                field={prependInput}
                                formik={formik}
                            />
                        </span>
                        <>
                            {displayFormFields(formFieldArray, formik)}
                            <Button type='submit' text='Proceed' />
                        </>
                    </Form>
                ) : (
                    <button
                        className='continue'
                        onClick={() => setShowForm(false)}
                    >
                        Continue
                    </button>
                )}
            </div>
            <style jsx>
                {`
                    .delivery-form {
                        height: 85vh;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                    }
										.form-wrapper{
											display:flex;
											height:100%;
											width:100%;
											margin:auto;
											justify-content:center;
											align-items:center;
											position:relative;
										}
                    .overlay {
                        background-color: black;
                        opacity: 0.5;
                        z-index: 3;
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 100%;
                        width: 100%;
                    }
                    .continue {
                        position: absolute;
                        right: 30px;
                        bottom: 50px;
												background-color:: #c85a5f14;
												color:white;
												font: bold normal 20px/21px 'Roboto', sans-serif;
												border:none;
												border-radius:5px;
                    }
                `}
            </style>
        </div>
    );
}
