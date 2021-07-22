// import Image from 'next/image';
import { NextPage } from 'next';
import Image from 'next/image';
import { BlogList } from 'src/components/BlogList';

import { Footer } from 'src/components/layout/Footer';
import { SideBar } from 'src/components/SideBar';
import { Header } from 'src/components/layout/Header';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen p-0 flex flex-col items-center font-serif'>
      <Header />
      <main className='flex-grow min-h-full'>
        <div className='w-screen h-80 relative'>
          <div>
            <Image
              src='/top2.jpg'
              alt='ルーマニアの街並み'
              layout='fill'
              objectFit='cover'
              className='opacity-70'
            />
          </div>
          <h1 className='absolute top-2/3 left-5 sm:left-20 text-purple-700 text-5xl md:text-6xl lg:text-7xl font-bold font-lobster tracking-wide mix-blend-overlay block'>
            Suzu&apos;s diary
          </h1>
        </div>
        <div className='flex flex-col items-center my-12 md:flex-row md:justify-between md:items-start md:mx-16'>
          <BlogList />
          <SideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
