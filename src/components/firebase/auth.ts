import React, {useContext} from 'react'
import { FirebaseContext } from './firebase'
import useRedux from '@hooks/useRedux';
import 'firebase/auth'
import { SignupRequestAction, SignupSuccessfulAction } from '@store/actions';

const FirebaseAuth = () => {
	const firebaseContext = useContext(FirebaseContext);
	const firebaseAuth = firebaseContext.auth();
	const {dispatch} = useRedux()

	const createUserWithEmailAndPassword = (email, password) => {
		dispatch(SignupRequestAction())
		firebaseAuth.createUserWithEmailAndPassword(email,password)
		.then(()=> {
			dispatch(SignupSuccessfulAction())
		}).catch((error) =>{
			let errorCode = error.code;
			let errorMessage = error.message;
			if(errorCode === 'auth/weak-password'){
				alert('The password is too weak.');
			}else{
				alert(errorMessage)
			}
			console.log('error', error)
		})
	}

	const sendEmailVerification = () => {
		firebaseAuth.currentUser.sendEmailVerification().then(() => {
			alert('Email Verification Sent!')
		})
	}

	const sendPasswordResetEmail = (email) => {
		firebaseAuth.sendPasswordResetEmail(email).then(() => {
			alert('Password Reset Email Sent!');
		}).catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			if(errorCode == 'auth/invalid-email'){
				alert(errorMessage);
			}else if(errorCode === 'auth/user-not-found'){
				alert(errorMessage)
			}
			console.log('error', error)
		})
	}

	const signInWithEmailAndPassword = (email, password) => {
		firebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			if(errorCode === 'auth/wrong-password'){
				alert('Wrong Password')
			}else{
				alert(errorMessage)
			}
			console.log('error', error)
		})
	}

	const signOut = () => firebaseAuth.signOut();

	const passwordReset = (password) => firebaseAuth.updatePasssword(password);

	return {
		createUserWithEmailAndPassword,
		sendEmailVerification,
		sendPasswordResetEmail,
		signInWithEmailAndPassword,
		signOut,
		passwordReset
	}

}

export default FirebaseAuth