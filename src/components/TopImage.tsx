import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { memo, VFC } from 'react';

export const TopImage: VFC = memo(() => {
  const router = useRouter();
  return (
    <div className={`${router.pathname === '/' ? 'relative w-screen h-80' : 'relative w-screen h-40'}`}>
      <div>
        <Image
          src='/top.jpg'
          alt='ルーマニアの街並み'
          layout='fill'
          objectFit='cover'
          className='opacity-70'
        />
      </div>
      <h1 className='block absolute bottom-8 left-5 sm:left-20 font-lobster text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-purple-700 mix-blend-overlay'>
        Suzu&apos;s diary
      </h1>
    </div>
  );
});
