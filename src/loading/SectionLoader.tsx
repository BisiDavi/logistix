import React from 'react';
import ContentLoader from 'react-content-loader';

const SectionLoader = () => (
    <ContentLoader speed={2} height={550}>
        <rect x='0' y='0' rx='5' ry='5' width='400' height='300' />
        <rect x='0' y='420' rx='4' ry='4' width='400' height='13' />
        <rect x='0' y='450' rx='3' ry='3' width='400' height='13' />
    </ContentLoader>
);

export default SectionLoader;
