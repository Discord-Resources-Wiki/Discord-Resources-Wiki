import React from 'react';
import Head from '@docusaurus/Head';

export default function Root({children}) {
    return (
        <>
            <Head>
                <meta property="og:image" content="/img/logo-small.png" />
            </Head>
            {children}
        </>
    );
}