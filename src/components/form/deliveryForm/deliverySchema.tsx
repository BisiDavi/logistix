import * as Yup from 'yup';

export const DeliverySchema = Yup.object().shape({
    deliveryAddress: Yup.string().required('Enter the delivery address'),
    parcel: Yup.string().required('hello, what do you want to deliver?'),
    pickupAddress: Yup.string().required('Enter your pickup address'),
    deliveryMethod: Yup.string().required('Select your delivery method'),
    state: Yup.string().matches(/lagos/i, 'Invalid phone number').required(),
});
