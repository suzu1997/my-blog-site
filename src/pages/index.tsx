// import Image from 'next/image';
import { NextPage } from 'next';
import Image from 'next/image';
import { BlogList } from 'src/components/BlogList';

import { Footer } from 'src/components/layout/Footer';
// import { Header } from 'src/components/layout/Header';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      {/* <Header /> */}
      <main className='flex-grow min-h-full'>
        <div className='w-screen h-80 relative'>
          <div className='opacity-70'>
            <Image
              src='/top2.jpg'
              alt='ルーマニアの街並み'
              layout='fill'
              objectFit="cover"
            ></Image>
          </div>
          <h1 className='absolute top-2/3 left-5 sm:left-20 text-purple-800 text-5xl md:text-6xl lg:text-7xl font-bold font-serif mix-blend-overlay block'>
            Suzu&apos;s diary
          </h1>
        </div>
        <p className=''>indexページです。(ブログの一覧を表示)</p>
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
