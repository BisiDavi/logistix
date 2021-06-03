import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo } from '@components/icons';
import { displayLinks } from '@utils/.';
import { menuLinks, policies, socialIcons } from './footerContent';
import styles from '../../styles/footer.module.css';

const Footer: FC = () => {
    return (
        <Container as='footer' className={styles.footer} fluid>
            <Row>
                <Col xs={6}>
                    <Logo />
                </Col>
                <Col xs={12}>{displayLinks(menuLinks)}</Col>
                <Col xs={12}>
                    <div className={styles.socialIcons}>
                        {displayLinks(socialIcons)}
                    </div>
                    <div className='policies'>{displayLinks(policies)}</div>
                    <div className='copyright'>
                        <p>&copy; 2021 Logistix.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
