import React, { Fragment, useState } from 'react';

export default function Dropdown({ data }: DropdownProps) {
    const [showDropdown, setShowDropdown] = useState(false);

    const ifActive = showDropdown ? '+' : '-';
    const dropdownStyle = showDropdown ? 'block' : 'none';

    function displayDropdown() {
        return setShowDropdown(!showDropdown);
    }
    return (
        <Fragment>
            <ul onClick={displayDropdown} className='dropdown'>
                <div className='text'>
                    <h3>{data.text}</h3>
                    <span>{ifActive}</span>
                </div>
                {data.dropdown.map(function (item, index) {
                    return (
                        <li key={index}>
                            {item.text}:{item.value}
                        </li>
                    );
                })}
            </ul>
            <style jsx>
                {`
                    li {
                        list-style: none;
                    }
                    .text h3 {
                        font-size: 18px;
                        margin-bottom: 0px;
                    }
                    .dropdown {
                        font-family: 'Roboto', sans-serif;
                        padding: 10px;
                        padding-left: 0px;
                        margin-bottom: 0px;
                    }
                    ul.dropdown li {
                        display: ${dropdownStyle};
                        background-color: #c85a5f;
                        color: white;
                        padding: 5px 10px;
                        border-bottom: 1px solid white;
                    }
                    .text {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border: 1px solid sandybrown;
                        padding-left: 10px;
                        border-bottom-right-radius: 25px;
                        border-top-right-radius: 25px;
                        margin-bottom: 0px;
                    }
                    .text span {
                        border: 2px solid #c85a5f;
                        color: #c85a5f;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: 40px;
                        margin-bottom: 0px;
                        display: flex;
                        padding-bottom: 0px;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </Fragment>
    );
}

type dropdownType = {
    text: string;
    value: string;
};

interface DropdownProps {
    data: {
        text: string;
        dropdown: dropdownType[];
    };
}
