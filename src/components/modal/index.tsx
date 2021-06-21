import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';
import { Logo } from '@components/icons';
import styles from './modal.module.css';

const AppModal: FC<PropsWithChildren<AppModalProps>> = ({
    show,
    onHide,
    children,
    className,
    header,
}) => {
    return (
        <Modal contentClassName={className} show={show} onHide={onHide}>
            <Modal.Header className={styles.modalHeader} closeButton>
                {header && <Logo />}
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

interface AppModalProps {
    show: boolean;
    onHide: () => void;
    className: string;
    header?: boolean;
}

export default AppModal;
