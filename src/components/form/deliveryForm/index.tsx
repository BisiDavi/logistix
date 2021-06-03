import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Button } from '@components/.';
import styles from '@styles/form.module.css';
import { PrependInput } from '../inputs';
import { displayFormFields, formFieldArray } from './deliveryFormFields';
import { DeliverySchema } from './deliverySchema';

const DeliveryForm = () => {
    const [showMore, setShowMore] = useState(false);

    const formik = useFormik({
        initialValues: {
            deliveryAddress: '',
            parcel: '',
            pickupAddress: '',
            state: 'lagos',
        },
        validationSchema: DeliverySchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const displayMoreFields = () => setShowMore(true);
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
        <Form className={styles.form} onSubmit={submitHandler}>
            <span style={{ ...headerStyle }}>
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
