import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            <img src='/logo.png' />
            <style jsx>{`
                img {
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default Logo;
