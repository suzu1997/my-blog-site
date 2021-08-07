import Image from 'next/image';
import Link from 'next/link';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
    <header className='flex justify-between items-center pr-4 w-full h-10 sm:h-10 text-purple-700 bg-violet-100'>
      <Link href='/' passHref>
        <div className='flex items-center pl-2 cursor-pointer'>
          <Image src='/suzu2.png' width={120} height={32} alt='鈴のアイコン' className=''/>
        </div>
      </Link>
      <Link href='/' passHref>
        <button className='hidden sm:flex items-center py-1 px-3 hover:text-white hover:bg-purple-600 rounded-md border border-purple-700 transition cursor-pointer'>
          TOP
        </button>
      </Link>
      
    </header>
  );
});
