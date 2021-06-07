import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { BottomMenu } from '@components/menu';
import styles from '../../styles/footer.module.css';

const Footer: FC = () => {
    return (
        <Container as='footer' className={styles.footer} fluid>
            <BottomMenu />
        </Container>
    );
};

export default Footer;
