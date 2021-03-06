import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { FirebaseContext } from './firebase';
import 'firebase/auth';

function FirebaseAuth() {
    const firebaseContext = useContext(FirebaseContext);
    const firebaseAuth = firebaseContext.auth();

    function handleError(error) {
        console.log(error);
        return toast.error('An error just occured ' + error.message);
    }

    function handleSignOut() {
        if (firebaseAuth.currentUser) {
            firebaseAuth.signOut().catch(function (error) {
                return handleError(error);
            });
        }
    }

    function withEmailLinkSignIn(email) {
        let actionCodeSettings = {
            url: 'logistix.vercel.app',
            handleCodeInApp: true,
        };

        firebaseAuth
            .sendSignInLinkToEmail(email, actionCodeSettings)
            .then(function () {
                localStorage.setItem('emailForSignIn', email);
                return toast.success(
                    'An email was sent to ' +
                        email +
                        '. Please use the link in the email to sign-in',
                );
            })
            .catch(function (error) {
                return handleError(error);
            });
    }

    function handleSignIn(user, setUser) {
        if (firebaseAuth.isSignInWithEmailLink(window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                setUser({
                    ...user,
                    showEmail: true,
                });
                email = user.confirmationEmail;
            }
            if (email) {
                firebaseAuth
                    .signInWithEmailLink(email, window.location.href)
                    .then(function (result) {
                        if (history && history.replaceState) {
                            window.history.replaceState(
                                {},
                                document.title,
                                window.location.href.split('?')[0],
                            );
                            window.localStorage.removeItem('emailForSignIn');

                            let user = result.user;
                            setUser({
                                ...user,
                                details: result,
                            });
                            let isNewUser = result.additionalUserInfo.isNewUser;
                            console.log('result', result);
                            console.log('user', user);
                            console.log('isNewUser', isNewUser);
                        }
                    })
                    .catch(function (error) {
                        return handleError(error);
                    });
            }
        }
    }

    return {
        withEmailLinkSignIn,
        handleSignOut,
        handleSignIn,
    };
}

export default FirebaseAuth;
