import { VFC } from 'react';
import { CategoryItem } from 'src/components/CategoryItem';

export const Category: VFC = () => {
  return (
    <div className='border border-violet-200 w-10/12'>
      <h1 className='text-lg bg-violet-200 text-center p-2 shadow-sm'>カテゴリー</h1>
        <ul className='divide-y > * divide-violet-100 > *'>
          <CategoryItem />
        </ul>
    </div>
  );
};