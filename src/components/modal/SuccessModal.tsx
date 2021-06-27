import React from 'react';
import { Successmodal } from '@styles/modal.style';
import AppModal from '.';
import styles from './modal.module.css';

export default function SuccessModal({
    text,
    show,
    onHide,
}: SuccessModalProps) {
    return (
        <AppModal show={show} onHide={onHide} className={styles.AppModal}>
            <Successmodal>
                <img src='/checkIcon.gif' alt='checkIcon' />
                <p>{text}</p>
            </Successmodal>
        </AppModal>
    );
}

interface SuccessModalProps {
    text: string;
    show: boolean;
    onHide: () => void;
}
