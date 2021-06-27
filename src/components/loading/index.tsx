//import { Logo } from '@components/icons';
import React from 'react';

export default function Loading() {
    return (
        <div className='loading'>
            <div className='d-flex m-auto full zoom'>
                <img src='/logo.png' />
            </div>
            <style jsx>
                {`
                    .full {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        top: 35%;
                        position: absolute;
                    }
                    .loading img {
                        height: 50px;
                        width: 200px;
                    }
                    .loading {
                        height: 100%;
                        width: 100%;
                        background-color: rgba(0, 0, 0, 0.2);
                        position: absolute;
                        top: 0px;
                        z-index: 100;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .zoom {
                        animation: scale 10s linear infinite;
                    }

                    @keyframes scale {
                        50% {
                            -webkit-transform: scale(1.4);
                            -moz-transform: scale(1.4);
                            -ms-transform: scale(1.4);
                            -o-transform: scale(1.4);
                            transform: scale(1.4);
                        }
                    }
                `}
            </style>
        </div>
    );
}
