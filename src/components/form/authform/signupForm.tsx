import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { displayFormFields } from '../fieldType';
import { signupFieldArray } from './authFields';
import { Button } from '@components/.';
import styles from './authform.module.css';
import { SignupSchema } from './authSchema';
import FirebaseAuth from '@components/firebase/auth';
import { ToggleModalAction } from '@store/actions';
import useRedux from '@hooks/useRedux';

const SignupForm = () => {
	const {createUserWithEmailAndPassword} = FirebaseAuth();
	const {dispatch} = useRedux()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            sex: '',
            phoneNumber: '',
            location: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log('signup values', values);
						createUserWithEmailAndPassword(values.email, values.password)
        },
    });
    const submitHandler = (e) => {
        e.preventDefault();
        formik.handleSubmit();
				dispatch(ToggleModalAction(false));
    };

    return (
        <Form onSubmit={submitHandler} className={styles.form}>
            {displayFormFields(signupFieldArray, formik)}
            <Button type='submit' text='Signup' />
        </Form>
    );
};

export default SignupForm;
