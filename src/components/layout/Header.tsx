import Image from 'next/image';
import Link from 'next/link';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
    <header className='text-purple-700 bg-violet-100 w-full h-10 sm:h-10 flex items-center justify-between pr-4'>
      <Link href='/' passHref>
        <div className='flex items-center cursor-pointer pl-3'>
          <Image src='/suzu.png' width={30} height={35} alt='鈴のアイコン' className=''/>
        </div>
      </Link>
    </header>
  );
});
