import Document, { Html, Head, Main, NextScript } from 'next/document';

import { existsGaId, GA_TRACKING_ID } from 'src/libs/gtag';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,});
                  `,
                }}
              />
            </>
          )}
          <script
            data-ad-client='ca-pub-1287513948192042'
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
