import React from 'react';
import { Modal } from 'react-bootstrap';
import { Logo } from '@components/icons';
import styles from './modal.module.css';

const AppModal = ({ show, onHide, children, className }) => {
    return (
        <Modal
            contentClassName={className}
            show={show}
            onHide={onHide}
            backdrop='static'
            keyboard={false}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                    <Logo />
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

export default AppModal;
