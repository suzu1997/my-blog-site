import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { NextPage } from 'next';

import 'tailwindcss/tailwind.css';
import 'src/styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Layout } from 'src/components/layout/Layout';
config.autoAddCss = false; 

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Suzu&apos;s Diary</title>
        <meta name='description' content='新卒で旅行会社に入社。添乗員してました✈︎10月よりWEBフロントエンドエンジニアに転職します。自分用の日記&記録として、まったりと投稿していきます＊' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
