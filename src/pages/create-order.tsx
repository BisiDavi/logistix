import React, {useState, useEffect} from 'react';
import { Loading, PageTitle } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm';
import { useRedux } from '@hooks/.';
import SuccessModal from '@components/modal/SuccessModal';

const CreateOrder = () => {
	const {selectState} = useRedux();

	const [showModal, setShowModal] = useState(false);

	const signupState = selectState("auth");

	const {signup, loading} = signupState;

	useEffect(() => {
		if(signup.newSignup){
			setShowModal(true)
		}
	}, [])

	const closeModal = () => setShowModal(false)

    return (
        <>
            <PageTitle title='create order' />
						{loading && <Loading />}
						<SuccessModal text="Thanks for signing up, Order Received" show={showModal} onHide={closeModal} />
            <DeliveryForm />
        </>
    );
};

export default CreateOrder;
