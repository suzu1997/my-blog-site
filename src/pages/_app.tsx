import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { NextPage } from 'next';

import 'tailwindcss/tailwind.css';
import 'src/styles/globals.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
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
