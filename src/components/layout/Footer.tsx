import { memo, VFC } from 'react';

export const Footer: VFC = memo(() => {
  return (
    <footer className='flex justify-center items-center mb-20 sm:mb-0 w-full h-10 sm:h-10 text-purple-700 bg-violet-100'>
      &copy;Chie Suzuhara 2021
    </footer>
  );
});
