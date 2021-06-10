import React, { FC } from 'react';

const Button: FC<buttonProps> = ({ text, onClick, type }) => {
    return (
        <>
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
        </>
    );
};

interface buttonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export default Button;
