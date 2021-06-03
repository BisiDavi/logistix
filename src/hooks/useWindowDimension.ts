import { useState, useEffect } from 'react';

const useWindowDimension = () => {
    const hasWindow = typeof window !== 'undefined';

    const getWindowDimension = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerWidth : null;

        return {
            width,
            height,
        };
    };
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimension(),
    );

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimension());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
};

export default useWindowDimension;
