import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';
import { Logo } from '@components/icons';
import styles from './modal.module.css';

export default function StaticModal({
    show,
    onHide,
    children,
    className,
    header,
}: PropsWithChildren<StaticModalProps>) {
    return (
        <Modal
            contentClassName={className}
            show={show}
            onHide={onHide}
            backdrop='static'
            keyboard={false}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                {header && <Logo />}
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}

interface StaticModalProps {
    show: boolean;
    onHide: () => void;
    className: string;
    header?: boolean;
}
