import * as Yup from 'yup';

export const DeliverySchema = Yup.object().shape({
    deliveryAddress: Yup.string().required('Enter the delivery address'),
    fullName: Yup.string().required('Enter your full name'),
    phoneNumber: Yup.number().required('Enter your phone number'),
    pickupAddress: Yup.string().required('Enter your pickup address'),
});
