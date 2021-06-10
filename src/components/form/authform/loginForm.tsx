import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { displayFormFields } from '../fieldType';
import { loginFieldArray, signupFieldArray } from './authFields';
import { Button } from '@components/.';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: '',
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Form>
            {displayFormFields(loginFieldArray, formik)}
            <Button type='submit' text='Login' />
        </Form>
    );
};

export default LoginForm;
