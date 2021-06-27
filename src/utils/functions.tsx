import React from 'react';
import Link from 'next/link';
import { linksInterface } from '@components/footer/footerContent';

export function displayLinks(links: linksInterface[]) {
    return (
        <ul>
            {links.map(function (menu, index) {
                return (
                    <li key={index}>
                        <Link href={menu.link} passHref>
                            <a>{menu.name}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
