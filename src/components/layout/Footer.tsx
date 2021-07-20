import { memo, VFC } from 'react';

export const Footer: VFC= memo(() => {
  return (
    <footer className='text-purple-700 bg-violet-100 w-full h-10 sm:h-10 flex justify-center items-center'>
      &copy;Chie Suzuhara 2021
    </footer>
  );
});
