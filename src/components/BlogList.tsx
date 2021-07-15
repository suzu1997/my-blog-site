import { VFC } from 'react';
import { BlogItem } from './BlogItem';

export const BlogList: VFC = () => {
  return (
    <div className='text-center w-3/4 grid grid-cols-blogs gap-16 p-20'>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};