import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Hamburger, Logo } from '@components/icons';
import { Button } from '@components/.';
import styles from '../../styles/nav.module.css';

const Nav: FC<NavProps> = ({ onOpen }) => {
    return (
        <Container as='nav' fluid className={`${styles.nav} p-3`}>
            <Row className='justify-content-between align-items-center'>
                <Col xs={2}>
                    <Hamburger onClick={onOpen} />
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
interface NavProps {
    onOpen: () => void;
}

export default Nav;
