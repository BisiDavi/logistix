import React, { useState } from 'react';

const useToggle = () => {
    const [toggle, setToggle] = useState(false);

    const toggled = (value:boolean) => setToggle(value);

    return {
        toggle,
        toggled,
    };
};

export default useToggle;
