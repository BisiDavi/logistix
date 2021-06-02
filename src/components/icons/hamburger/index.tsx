import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const Hamburger = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <AiOutlineMenu />
        </div>
    );
};

export default Hamburger;
