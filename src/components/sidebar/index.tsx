import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { displayLinks } from '@utils/functions';
import { Button } from '..';
import styles from '@styles/sidebar.module.css';

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
    const sidebarLinks = [
        { name: 'Become a Rider', link: '#becomeRider' },
        { name: 'Market Place', link: '#marketPlace' },
    ];
    return (
        <Container className={styles.sidebar}>
            <Row className='vh-100'>
                <Col className={styles.menu} xs={10}>
                    <Button text='Sign in' />
                    <div className={styles.sidebarLinks}>
                        {displayLinks(sidebarLinks)}
                    </div>
                </Col>
                <Col className={styles.overlay} onClick={onClose} xs={2}></Col>
            </Row>
        </Container>
    );
};

interface SidebarProps {
    onClose: () => void;
}

export default Sidebar;
