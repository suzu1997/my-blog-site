import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { VFC } from 'react';

import 'tailwindcss/tailwind.css';
import 'src/styles/globals.css';

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Suzu&apos;s Blog</title>
        <meta name='description' content='ブログサイトです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
