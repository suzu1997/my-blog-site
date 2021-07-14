import { memo, VFC } from 'react';

export const Footer: VFC= memo(() => {
  return (
    <footer className='text-violet-700 bg-violet-200 w-full h-8 sm:h-10 flex justify-center items-center'>
      &copy;Chie Suzuhara 2021
    </footer>
  );
});
