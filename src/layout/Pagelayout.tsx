import React, { FC } from 'react';
import Head from 'next/head';
import { Nav, Footer } from '@components/.';
import { PageLayoutProps } from '@typeDefs/.';

const Pagelayout: FC<PageLayoutProps> = ({ children, title }): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Logistics | {title} </title>
            </Head>
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Pagelayout;
