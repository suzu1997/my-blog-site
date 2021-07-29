// import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { BlogList } from 'src/components/BlogList';

import { Footer } from 'src/components/layout/Footer';
import { SideBar } from 'src/components/SideBar';
import { Header } from 'src/components/layout/Header';
import { fetcher } from 'src/libs/fetcher';

type Props = {
  blogs: any;
};

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <div className='flex flex-col items-center p-0 min-h-screen font-serif'>
      <Header />
      <main className='flex-grow min-h-full'>
        <div className='relative w-screen h-80'>
          <div>
            <Image
              src='/top2.jpg'
              alt='ルーマニアの街並み'
              layout='fill'
              objectFit='cover'
              className='opacity-70'
            />
          </div>
          <h1 className='block absolute top-2/3 left-5 sm:left-20 font-lobster text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-purple-700 mix-blend-overlay'>
            Suzu&apos;s diary
          </h1>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start my-12 md:mx-16'>
          <BlogList blogs={blogs} />
          <SideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
};
//SSG
export const getStaticProps: GetStaticProps = async () => {
  const data: any = await fetcher('https://suzu-blog.microcms.io/api/v1/blog');

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
