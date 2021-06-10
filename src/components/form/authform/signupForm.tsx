import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';

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
    return <Form></Form>;
};

export default SignupForm;
