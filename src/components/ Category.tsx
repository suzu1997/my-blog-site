import { VFC } from 'react';
import { CategoryItem } from 'src/components/CategoryItem';

export const Category: VFC = () => {
  return (
    <div className='w-10/12 border border-violet-200'>
      <h1 className='p-2 text-lg text-center bg-violet-200 shadow-sm'>
        カテゴリー
      </h1>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <ul className='divide-y divide-violet-100 > *'>
        <CategoryItem />
      </ul>
    </div>
  );
};
