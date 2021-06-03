import React, { FC, useState } from 'react';
import Head from 'next/head';
import { Nav, Footer, Sidebar } from '@components/.';
import { useToggle } from '@hooks/.';

const Pagelayout: FC<PageLayoutProps> = ({ children, title }): JSX.Element => {
    const { toggle, toggled } = useToggle();


    return (
        <div className='logisitix position-relative'>
            <Head>
                <title>Logistics | {title} </title>
            </Head>
            <header>
                <Nav onOpen={() => toggled(true)} />
            </header>
            {toggle && <Sidebar onClose={() => toggled(false)} />}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Pagelayout;

interface PageLayoutProps {
    children: JSX.Element;
    title: string;
}
