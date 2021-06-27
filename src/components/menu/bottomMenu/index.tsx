import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    makeStyles,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles({
    root: {
        width: '100%',
        '& svg': {
            width: '35px',
            height: '35px',
        },
    },
    footer: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
    },
});

const menuIcons = [
    {
        icon: <HomeIcon />,
        label: 'Home',
        value: 0,
        link: '/',
    },
    {
        icon: <AddIcon />,
        label: 'Create',
        value: 1,
        link: '/create-order',
    },
    {
        icon: <AccountCircleIcon />,
        label: 'Profile',
        value: 2,
        link: '/profile',
    },
    {
        icon: <StorefrontIcon />,
        label: 'Marketplace',
        value: 3,
        link: '/marketplace',
    },
];

export default function BottomMenu() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const router = useRouter();

    useEffect(
        function () {
            loadPage();
        },
        [value],
    );

    function loadPage() {
        switch (value) {
            case 0:
                return router.push('/');
            case 1:
                return router.push('/create-order');
            case 2:
                return router.push('/profile');
            case 3:
                return router.push('/marketplace');
            default:
                return null;
        }
    }

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        console.log('newValue', newValue);
        return setValue(newValue);
    }

    return (
        <nav className={classes.footer}>
            <BottomNavigation
                value={value}
                showLabels
                onChange={handleChange}
                className={classes.root}
            >
                {menuIcons.map(function (footerIcon, index) {
                    return (
                        <BottomNavigationAction
                            label={footerIcon.label}
                            key={index}
                            value={footerIcon.value}
                            icon={footerIcon.icon}
                        />
                    );
                })}
            </BottomNavigation>
        </nav>
    );
}
