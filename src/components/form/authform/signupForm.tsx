import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/client';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ToggleModalAction } from '@store/actions';
import useRedux from '@hooks/useRedux';
import { displayFormFields } from '../fieldType';
import { signupFieldArray } from './authFields';
import { Button } from '@components/.';
import { SignupSchema } from './authSchema';
import styles from './authform.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupForm() {
    const { dispatch } = useRedux();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            sex: '',
            location: '',
        },
        validationSchema: SignupSchema,
        onSubmit: function (values) {
            return signInHandler(values.email);
        },
    });

    function submitHandler(e) {
        e.preventDefault();
        formik.handleSubmit();
        console.log('I was clicked');
        dispatch(ToggleModalAction(false));
    }

    function signInHandler(userEmail) {
        console.log('userEmail', userEmail);
        return signIn('email', { email: userEmail })
            .then(function () {
                return toast.success(
                    'Please verify the link sent to your email address',
                );
            })
            .catch(function (error) {
                console.log('signup error', error);
                return toast.error(
                    'An error occured please try again, Thanks. ',
                );
            });
    }

    return (
        <Fragment>
            <Form
                method='post'
                action='/api/auth/signin/email'
                onSubmit={submitHandler}
                className={styles.form}
            >
                {displayFormFields(signupFieldArray, formik)}
                <Button type='submit' text='Signup' />;
            </Form>
        </Fragment>
    );
}
