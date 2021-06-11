import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Button, AuthModal } from '@components/.';
import styles from '@styles/form.module.css';
import { PrependInput } from '../inputs';
import { displayFormFields } from '../fieldType';
import { formFieldArray } from './deliveryFormFields';
import { DeliverySchema } from './deliverySchema';

const DeliveryForm = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const formik = useFormik({
        initialValues: {
            parcel: '',
            pickupAddress: '',
            deliveryAddress: '',
            deliveryMethod: '',
            state: 'lagos',
        },
        validationSchema: DeliverySchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            openModal();
        },
    });
    const [headerStyle, setHeaderStyle] = useState<React.CSSProperties | any>({
        transition: 'all 200ms ease-in',
        position: 'relative',
    });

    useScrollPosition(
        ({ currPos }) => {
            const isVisible = currPos.y < -160;

            const shouldBeStyle = {
                position: isVisible ? 'fixed' : 'relative',
                top: '0',
                left: '0',
                width: '100%',
                height: '40px',
                zIndex: '200',
                visibility: 'visible',
                transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                transform: isVisible ? 'none' : 'translate(0, -100%)',
            };

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle))
                return;

            setHeaderStyle(shouldBeStyle);
        },
        [headerStyle],
    );

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
                    className={`${styles.form} ${styles.deliveryForm} mt-4`}
                    onSubmit={submitHandler}
                >
                    <span style={{ ...headerStyle }}>
                        <PrependInput
                            icon='map'
                            field={prependInput}
                            formik={formik}
                        />
                    </span>
                    <AuthModal show={showModal} onHide={closeModal} />
                    <>
                        {displayFormFields(formFieldArray, formik)}
                        <Button type='submit' text='Proceed' />
                    </>
                </Form>
            </div>
            <style jsx>
                {`
                    .delivery-form {
                        background-image: url('/deliveryTruck.webp');
                        height: 450px;
                        width: 100%;
                        background-position: center;
                        background-size: cover;
                    }
                    .form-wrapper {
                        position: absolute;
                        z-index: 100;
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
