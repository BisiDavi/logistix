import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Hamburger, Logo } from '@components/icons';
import { useToggle } from '@hooks/.';
import { Button } from '@components/.';
import styles from '../../styles/nav.module.css';

const Nav = () => {
    const { toggle, toggled } = useToggle();
    return (
        <Container as='nav' fluid className={`${styles.nav} p-3`}>
            <Row className='justify-content-between align-items-center'>
                <Col xs={2}>
                    <Hamburger onClick={() => toggled(toggle)} />
                </Col>
                <Col xs={4}>
                    <Logo />
                </Col>
                <Col xs={3}>
                    <Button text='signup' />
                </Col>
            </Row>
        </Container>
    );
};

export default Nav;
