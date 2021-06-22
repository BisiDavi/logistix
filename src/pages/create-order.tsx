import React, {useState, useEffect} from 'react';
import { Loading, PageTitle } from '@components/.';
import DeliveryForm from '@components/form/deliveryForm';
import { useRedux } from '@hooks/.';
import SuccessModal from '@components/modal/SuccessModal';

const CreateOrder = () => {
	const {selectState} = useRedux();

	const [signupSuccessful, setSignupSuccessful] = useState(false);
	const [loginSuccessful, setLoginSuccessful] = useState(false);


	const signupState = selectState("auth");

	const {signup, loading, login} = signupState;

	useEffect(() => {
		if(signup.newSignup){
			setSignupSuccessful(true)
		}
	}, [])

	useEffect(() => {
		if(login.loggedIn){
			setLoginSuccessful(true)
		}
	}, [])

	const closeSignupSuccessModal = () => setSignupSuccessful(false)
	const closeLoginSuccessModal = () => setLoginSuccessful(false)

    return (
        <>
            <PageTitle title='create order' />
						{loading && <Loading />}
						<SuccessModal
							text="Thanks for signing up, Order Received"
							show={signupSuccessful}
							onHide={closeSignupSuccessModal}
						/>
						<SuccessModal
							text="You're logged in, Order Received"
							show={loginSuccessful}
							onHide={closeLoginSuccessModal}
						/>
            <DeliveryForm />
        </>
    );
};

export default CreateOrder;
