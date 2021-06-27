import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSession, signOut } from 'next-auth/client';
import { Hamburger, Logo } from '@components/icons';
import { Button, Loading } from '@components/.';
import styles from '../../styles/nav.module.css';

const Nav: FC<NavProps> = ({ onOpen, toggleAuth }) => {
    const [session, loading] = useSession();

    const signOutHandler = (e) => {
        e.preventDefault();
        signOut();
    };
    return (
        <Container as='nav' fluid className={`${styles.nav} p-3`}>
            <Row className='justify-content-between align-items-center'>
                {!session && loading && <Loading />}
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
                        font-size: 12px;
                        font-weight: bold;
                    }
                `}
            </style>
        </Container>
    );
};
interface NavProps {
    onOpen: () => void;
    toggleAuth: () => void;
}

export default Nav;
