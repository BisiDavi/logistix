import { useState, useEffect } from 'react';

export default function useWindowDimension() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimension() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerWidth : null;

        return {
            width,
            height,
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimension(),
    );

    useEffect(
        function () {
            if (hasWindow) {
                function handleResize() {
                    return setWindowDimensions(getWindowDimension());
                }
                window.addEventListener('resize', handleResize);
                return function () {
                    return window.removeEventListener('resize', handleResize);
                };
            }
        },
        [hasWindow],
    );

    return windowDimensions;
}
