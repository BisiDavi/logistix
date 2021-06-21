import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';
import { Logo } from '@components/icons';
import styles from './modal.module.css';

const StaticModal: FC<PropsWithChildren<StaticModalProps>> = ({
    show,
    onHide,
    children,
    className,
    header,
}) => {
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
};

interface StaticModalProps {
    show: boolean;
    onHide: () => void;
    className: string;
    header?: boolean;
}

export default StaticModal;
