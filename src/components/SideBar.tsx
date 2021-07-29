import { memo, VFC } from 'react';
import { Category } from './Category';
import { Profile } from './Profile';

export const SideBar: VFC = memo(() => {
  return (
    <div className='flex flex-col gap-10 items-center md:items-end md:w-1/4 min-w-64'>
      <Profile />
      <Category />
    </div>
  );
});
