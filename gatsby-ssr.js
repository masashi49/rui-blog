/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

export const onRenderBody = ( { setHeadComponents } ) => {
    if ( process.env.NODE_ENV === `production` ) {
        setHeadComponents( [
            // オプティマイズスニペット
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155031395-2"></script>,
            <script
                dangerouslySetInnerHTML={ {
                    __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-155031395-2', { 'optimize_id': 'OPT-PTTQLCB'});
         `
                } }
            />
        ] )
    }
}
