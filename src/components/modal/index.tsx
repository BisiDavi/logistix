import React from 'react';
import { Modal } from 'react-bootstrap';

const AppModal = ({ show, onHide, children, title }) => {
    return (
        <Modal show={show} onHide={onHide} backdrop='static' keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

export default AppModal;
