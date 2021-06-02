import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const menuLinks: linksInterface[] = [
    { name: 'About Logistix', link: '#aboutLogisitix' },
    { name: 'Read our blog', link: '#blog' },
    { name: 'Become a Rider', link: '#rider' },
    { name: 'Market place', link: '#marketplace' },
];

export const socialIcons: linksInterface[] = [
    { name: <FaFacebook />, link: '#facebook' },
    { name: <FaTwitter />, link: '#twitter' },
    { name: <FaInstagram />, link: '#instagram' },
];

export const policies: linksInterface[] = [
    { name: 'Privacy Policy', link: '#facebook' },
    { name: 'Terms', link: '#twitter' },
    { name: 'Pricing', link: '#instagram' },
];

export interface linksInterface {
    name: string | JSX.Element;
    link: string;
}
