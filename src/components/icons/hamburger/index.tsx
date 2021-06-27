import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Hamburger({ onClick }) {
    return (
        <div onClick={onClick}>
            <AiOutlineMenu size='30px' />
        </div>
    );
}
