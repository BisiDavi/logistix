import React, { FC } from 'react';

const Button: FC<buttonProps> = ({ text, onClick, type }) => {
    return (
        <>
            <button type={type} onClick={onClick} className='btn'>
                {text}
            </button>
        </>
    );
};

interface buttonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export default Button;
