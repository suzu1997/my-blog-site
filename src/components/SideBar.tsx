import { VFC } from 'react';
import { Category } from './ Category';
import { Profile } from './Profile';

export const SideBar: VFC = () => {
  return (
    <div className='flex flex-col w-1/4 px-8 py-20'>
      <Profile />
      <Category />
    </div>
  );
};
