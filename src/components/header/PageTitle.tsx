import React from 'react';
import Head from 'next/head';

export default function PageTitle({ title }) {
    return (
        <Head>
            <title>Logistics | {title}</title>
        </Head>
    );
}
