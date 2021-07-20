import { VFC } from 'react';
import { Category } from './ Category';
import { Profile } from './Profile';

export const SideBar: VFC = () => {
  return (
    <div className='flex flex-col items-center gap-10 min-w-64 md:w-1/4 md:items-end'>
      <Profile />
      <Category />
    </div>
  );
};
