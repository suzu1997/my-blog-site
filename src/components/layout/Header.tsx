import Link from 'next/link';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
    <header className='text-blue-700 font-bold bg-violet-200 w-full h-8 sm:h-10 flex items-center justify-between pr-4'>
      <Link href='' passHref>
        <div className='flex items-center cursor-pointer h-14 pl-4'>
          <p>Suzu&apos;s diary</p>
        </div>
      </Link>
    </header>
  );
});
