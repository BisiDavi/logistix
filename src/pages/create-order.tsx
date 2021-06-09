import React from 'react';
import { PageTitle } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm';

const CreateOrder = () => {
    return (
        <>
            <PageTitle title='create order' />
            <DeliveryForm />
        </>
    );
};

export default CreateOrder;
