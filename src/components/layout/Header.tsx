import Image from 'next/image';
import Link from 'next/link';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
    <header className='flex justify-between items-center pr-4 w-full h-10 sm:h-10 text-purple-700 bg-violet-100'>
      <Link href='/' passHref>
        <div className='flex items-center pl-3 cursor-pointer'>
          <Image src='/suzu.png' width={30} height={35} alt='鈴のアイコン' className=''/>
        </div>
      </Link>
    </header>
  );
});
