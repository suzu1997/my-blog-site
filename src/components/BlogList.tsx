import { VFC } from 'react';
import { BlogItem } from './BlogItem';

export const BlogList: VFC = () => {
  return (
    <div className='text-center w-10/12 md:w-3/4 grid grid-cols-blogs gap-12'>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};