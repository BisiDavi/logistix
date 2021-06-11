import React from 'react';
import { Modal } from 'react-bootstrap';

const AppModal = ({ show, onHide, children, className }) => {
    return (
        <Modal
            contentClassName={className}
            show={show}
            onHide={onHide}
            backdrop='static'
            keyboard={false}
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

export default AppModal;
