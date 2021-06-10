import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { displayFormFields } from '../fieldType';
import { signupFieldArray } from './authFields';
import { Button } from '@components/.';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            sex: '',
            location: '',
            password: '',
        },
        validationSchema: '',
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Form>
            {displayFormFields(signupFieldArray, formik)}
            <Button type='submit' text='Signup' />
        </Form>
    );
};

export default SignupForm;
