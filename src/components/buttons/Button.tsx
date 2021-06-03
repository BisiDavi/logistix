import React, { FC } from 'react';

const Button: FC<buttonProps> = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick} className='btn'>
                {text}
            </button>
        </>
    );
};

interface buttonProps {
    text: string;
    onClick?: (e:any) => void;
}

export default Button;
