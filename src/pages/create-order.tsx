import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loading, PageTitle } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm';
import { useRedux } from '@hooks/.';

const CreateOrder = () => {


    return (
        <>
            <PageTitle title='create order' />
            <ToastContainer />
            <DeliveryForm />
        </>
    );
};

export default CreateOrder;
