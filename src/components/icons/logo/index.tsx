import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className='logo'>
            <Link href='/' passHref>
                <a>
                    <img src='/logo.png' />
                </a>
            </Link>
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
