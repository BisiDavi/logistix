import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { BottomMenu } from '@components/menu';
import styles from '../../styles/footer.module.css';

export default function Footer() {
    return (
        <Container as='footer' className={styles.footer} fluid>
            <BottomMenu />
        </Container>
    );
}
