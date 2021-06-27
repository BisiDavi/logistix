import React, { useState } from 'react';
import { toast } from 'react-toastify';
import StaticModal from './StaticModal';
import styles from './modal.module.css';

export default function EmailModal({ onHide, user, setEmail }) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        return setEmail({
            ...user,
            confirmationEmail: e.target.value,
        });
    }

    function submitHandler(e): void {
        e.preventDefault();
        user.confirmationEmail.length > 5 &&
            toast.success('Email sent, expect email confirmation link sent');
        return onHide();
    }
    return (
        <StaticModal
            className={styles.AppModal}
            show={user.showEmail}
            onHide={onHide}
            header
        >
            <div className='emailModal'>
                <h5>
                    Please provide the email you would like to sign-in with for
                    confirmation
                </h5>
                <form onSubmit={submitHandler}>
                    <input
                        name='email'
                        value={user.confirmationEmail}
                        type='email'
                        onChange={handleChange}
                        placeholder='Enter your email'
                        required
                    />
                    <button type='submit'>Submit</button>
                </form>

                <style jsx>{`
                    .emailModal {
                        display: flex;
                        flex-direction: column;
                    }
                    h5 {
                        text-align: center;
                        font-size: 13px;
                        font-family: 'Roboto', sans-serif;
                    }
                    .emailModal form {
                        display: flex;
                        flex-direction: column;
                        margin: 10px auto;
                    }
                    .emailModal button {
                        color: white;
                        background-color: #c85a5f;
                        padding: 5px 10px;
                        border: none;
                    }
                    .emailModal form button {
                        width: 80px;
                        margin: auto;
                    }
                    .emailModal form input {
                        margin: 10px auto;
                        border-radius: 15px;
                        border: 1px solid gray;
                        height: 30px;
                        padding-left: 20px;
                    }
                `}</style>
            </div>
        </StaticModal>
    );
}
