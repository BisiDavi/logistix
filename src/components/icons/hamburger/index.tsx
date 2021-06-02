import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const Hamburger = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <AiOutlineMenu size='30px' />
        </div>
    );
};

export default Hamburger;
