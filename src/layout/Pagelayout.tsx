import React, { FC } from 'react';
import { Nav, Footer, Sidebar } from '@components/.';
import { useToggle } from '@hooks/.';

const Pagelayout: FC<PageLayoutProps> = ({ children }): JSX.Element => {
    const { toggle, toggled } = useToggle();

    return (
        <>
            <header>
                <Nav onOpen={() => toggled(true)} />
            </header>
            {toggle && <Sidebar onClose={() => toggled(false)} />}
            <main>{children}</main>
            <Footer />
            <style jsx>
                {`
                    header,
                    main {
                        background-color: #c85a5f14;
                    }
                `}
            </style>
        </>
    );
};

export default Pagelayout;

interface PageLayoutProps {
    children: JSX.Element;
}
