import React, { Fragment } from 'react';

export default function Button({ text, onClick, type }: buttonProps) {
    return (
        <Fragment>
            <button type={type} onClick={onClick}>
                {text}
            </button>
            <style jsx>
                {`
                    button {
                        background-color: #c85a5f;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 20px;
                        border: none;
                    }
                `}
            </style>
        </Fragment>
    );
}

interface buttonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e) => void;
}
