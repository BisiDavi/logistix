import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Provider as AuthProvider } from 'next-auth/client';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import { Loading } from '@components/.';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Pagelayout } from '@layout/.';
import store from '@store/.';
import '@styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Router.events.on('routeChangeStart', function () {
    NProgress.start();
});
Router.events.on('routeChangeComplete', function () {
    NProgress.done();
});
Router.events.on('routeChangeError', function () {
    NProgress.done();
});

export default function MyApp({ Component, pageProps }) {
    useEffect(function () {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        function start() {
            return setLoading(true);
        }
        function end() {
            return setTimeout(() => {
                setLoading(false);
            }, 1200);
        }
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.on('routeChangeStart', start);
            Router.events.on('routeChangeComplete', end);
            Router.events.on('routeChangeError', end);
        };
    }, []);

    return (
        <AuthProvider
            options={{ clientMaxAge: 0, keepAlive: 0 }}
            session={pageProps.session}
        >
            <div className='logistix position-relative'>
                <Head>
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/favicon-16x16.png'
                    />

                    <link rel='manifest' href='/site.webmanifest' />
                    <link rel='icon' href='/favicon.ico' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap'
                        rel='stylesheet'
                    />
                    <meta
                        name='viewport'
                        content='initial-scale=1.0, width=device-width'
                    />
                </Head>
                {loading && <Loading />}
                <CssBaseline />
                <Provider store={store}>
                    <Pagelayout>
                        <Component {...pageProps} />
                    </Pagelayout>
                </Provider>
            </div>
        </AuthProvider>
    );
}
