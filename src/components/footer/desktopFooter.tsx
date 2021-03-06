import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Logo } from '@components/icons';
import { displayLinks } from '@utils/.';
import { menuLinks, policies, socialIcons } from './footerContent';
import styles from '@/styles/footer.module.css';

export default function DesktopFooter() {
    return (
        <Fragment>
            <Row>
                <Col xs={6}>
                    <Logo />
                </Col>
            </Row>
            <Row className='justify-content-between'>
                <Col xs={5}>{displayLinks(menuLinks)}</Col>
                <Col xs={4} className='px-0'>
                    <div className='policies'>{displayLinks(policies)}</div>
                </Col>
                <Col className='d-flex flex-column align-items-center' xs={12}>
                    <div className={styles.socialIcons}>
                        {displayLinks(socialIcons)}
                    </div>
                    <div className='copyright'>
                        <p>&copy; 2021 Logistix.</p>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
}
