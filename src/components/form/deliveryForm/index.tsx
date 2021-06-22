import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button, AuthModal } from '@components/.';
import { displayFormFields } from '../fieldType';
import { formFieldArray } from './deliveryFormFields';
import { DeliverySchema } from './deliverySchema';
//import { generateRandomImages } from '@utils/.';
import styles from '@styles/form.module.css';
import PlacesAutocompleteInput from '../fields/PlacesAutocompleteInput';
import MapModal from '@components/modal/MapModal';
import { ToggleModalAction } from '@store/actions';
import {useRedux} from '@hooks/.';



const DeliveryForm = () => {
    const [showMap, setShowMap] = useState(false);
		const {dispatch, selectState} = useRedux();
    //const [bgImg, setBgImg] = useState('');
    //const bgImg = generateRandomImages();
    //console.log('randomBackgroundImage', bgImg);
		const modal = selectState("modal")

    const openModal = () => dispatch(ToggleModalAction(true));
    const closeModal = () => dispatch(ToggleModalAction(false))

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

    const displayModal = (value:boolean) => setShowMap(value);

    return (
        <div className='delivery-form position-relative'>
            <div className='overlay'></div>
            <div className='form-wrapper'>
                <MapModal show={showMap} onHide={() => displayModal(false)} />
                <Form
                    className={`${styles.form} ${styles.deliveryForm} mx-auto`}
                    onSubmit={submitHandler}
                >
                    <span className={styles.prependInput}>
                        <PlacesAutocompleteInput
                            field={prependInput}
                            formik={formik}
                            displayModal={() => displayModal(true)}
                        />
                    </span>
                    <>
                        {displayFormFields(formFieldArray, formik, displayModal)}
                        <Button type='submit' text='Proceed' />
                    </>
                </Form>
                <AuthModal show={modal.modalState} onHide={closeModal} />
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
