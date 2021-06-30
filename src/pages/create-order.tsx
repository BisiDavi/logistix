import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { PageTitle } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm/deliveryForm';

export default function CreateOrder() {
    return (
        <Fragment>
            <PageTitle title='create order' />
            <ToastContainer />
            <DeliveryForm />
        </Fragment>
    );
}
