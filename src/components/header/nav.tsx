import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Hamburger, Logo } from '@components/icons';
import { Button } from '@components/.';
import styles from '../../styles/nav.module.css';

const Nav: FC<NavProps> = ({ onOpen, toggleAuth }) => {
    return (
        <Container as='nav' fluid className={`${styles.nav} p-3`}>
            <Row className='justify-content-between align-items-center'>
                <Col xs={2}>
                    <Hamburger onClick={onOpen} />
                </Col>
                <Col xs={6}>
                    <Logo />
                </Col>
                <Col xs={3}>
                    <Button onClick={toggleAuth} text='signup' />
                </Col>
            </Row>
        </Container>
    );
};
interface NavProps {
    onOpen: () => void;
		toggleAuth: () => void
}

export default Nav;
