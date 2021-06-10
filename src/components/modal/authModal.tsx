import React, { useState } from 'react';
import AppModal from '.';
import { LoginForm } from '@components/form/.';

const LoginModal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = setShowModal(!showModal);
    return (
        <AppModal
            show={showModal}
            onHide={toggleModal}
            title='Hello, Please login or create an account by signing up'
        >
            <LoginForm />
        </AppModal>
    );
};

export default LoginModal;
