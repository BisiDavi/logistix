import React from 'react';
import ContentLoader from 'react-content-loader';

export default function SectionLoader() {
    return (
        <ContentLoader speed={2} width='100%' height={320}>
            <rect x='0' y='0' rx='5' ry='5' width='100%' height='300' />
        </ContentLoader>
    );
}
