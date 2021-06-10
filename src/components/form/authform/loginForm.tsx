import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';

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
    return <Form></Form>;
};

export default LoginForm;
