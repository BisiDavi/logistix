import React, {useState, useEffect} from 'react';
import { PageTitle } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm';
import { useRedux } from '@hooks/.';
import SuccessModal from '@components/modal/SuccessModal';
import { RootState } from '@store/reducer/RootReducer';
import { useSelector } from 'react-redux';

const CreateOrder = () => {
	const {selectState} = useRedux();

	const [showModal, setShowModal] = useState(false);

	const signupState = selectState("auth");

	const {signup} = signupState;

	useEffect(() => {
		//if(signup.newSignup){
		if(1){
			setShowModal(true)
		}
	}, [])

	const closeModal = () => setShowModal(false)

    return (
        <>
            <PageTitle title='create order' />
						<SuccessModal text="Thanks for signing up, Order Received" show={showModal} onHide={closeModal} />
            <DeliveryForm />
        </>
    );
};

export default CreateOrder;
