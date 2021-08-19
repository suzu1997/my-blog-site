import Head from 'next/head';
import { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import 'src/styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Layout } from 'src/components/layout/Layout';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { GA_TRACKING_ID, pageview } from 'src/libs/gtag';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
config.autoAddCss = false;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Suzu&apos;s Diary</title>
        <meta
          name='description'
          content='新卒で旅行会社に入社。添乗員してました✈︎10月よりWEBフロントエンドエンジニアに転職します。自分用の日記&記録として、まったりと投稿していきます＊'
        />
        <link rel='icon' href='/favicon.ico' />
        <script data-ad-client="ca-pub-1287513948192042" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
