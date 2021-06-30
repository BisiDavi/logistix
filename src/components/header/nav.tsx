import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSession, signOut } from 'next-auth/client';
import { Hamburger, Logo } from '@components/icons';
import { Button, Loading } from '@components/.';
import styles from '../../styles/nav.module.css';

export default function Nav({ onOpen, toggleAuth }: NavProps) {
    const [session, loading] = useSession();

    function signOutHandler(e) {
        e.preventDefault();
        return signOut();
    }
    return (
        <Container as='nav' fluid className={`${styles.nav} p-3`}>
            <Row className='justify-content-between align-items-center'>
                <Col xs={2}>
                    <Hamburger onClick={onOpen} />
                </Col>
                <Col xs={6}>
                    <Logo />
                </Col>
                <Col className='d-flex align-items-center' xs={3}>
                    {session ? (
                        <Button onClick={signOutHandler} text='signout' />
                    ) : (
                        <Button onClick={toggleAuth} text='signup' />
                    )}
                </Col>
            </Row>
            <Row>
                {session && (
                    <p className='username'>
                        Hello, {session.user.name || session.user.email}
                    </p>
                )}
            </Row>
            <style jsx>
                {`
                    p.username {
                        font-size: 13px;
                        font-weight: bold;
                        text-align: right;
                        margin: 10px 0;
                    }
                `}
            </style>
        </Container>
    );
}
interface NavProps {
    onOpen: () => void;
    toggleAuth: () => void;
}
