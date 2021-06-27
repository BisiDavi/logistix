import React, { Fragment, PropsWithChildren, useState } from 'react';
import { Nav, Footer, Sidebar, AuthModal } from '@components/.';
import { useToggle } from '@hooks/.';

export default function Pagelayout({
    children,
}: PropsWithChildren<PageLayoutProps>): JSX.Element {
    const { toggle, toggled } = useToggle();
    const [userSignup, setSignup] = useState<boolean>(false);

    function authHandler() {
        return setSignup(!userSignup);
    }

    return (
        <Fragment>
            <header>
                <Nav toggleAuth={authHandler} onOpen={() => toggled(true)} />
            </header>
            {toggle && <Sidebar onClose={() => toggled(false)} />}
            <main>
                <AuthModal show={userSignup} onHide={authHandler} />
                {children}
            </main>
            <Footer />
            <style jsx>
                {`
                    header,
                    main {
                        background-color: #c85a5f14;
                    }
                `}
            </style>
        </Fragment>
    );
}

interface PageLayoutProps {
    children: JSX.Element;
}
