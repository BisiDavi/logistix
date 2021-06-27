import React, { useState } from 'react';

export default function useToggle() {
    const [toggle, setToggle] = useState(false);

    function toggled(value: boolean) {
        return setToggle(value);
    }

    return {
        toggle,
        toggled,
    };
}
