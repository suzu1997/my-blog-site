import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { NextPage } from 'next';

import 'tailwindcss/tailwind.css';
import 'src/styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Suzu&apos;s Diary</title>
        <meta name='description' content='ブログサイトです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
