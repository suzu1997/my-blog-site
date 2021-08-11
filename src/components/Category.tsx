import { memo, VFC } from 'react';
import { CategoryItem } from 'src/components/CategoryItem';

export const Category: VFC = memo(() => {
  return (
    <div className='w-full md:w-10/12 rounded-sm border border-violet-200'>
      <h1 className='p-2 text-lg text-center bg-violet-200 shadow-sm'>
        カテゴリー
      </h1>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <ul className='divide-y divide-violet-100 > *'>
        <CategoryItem />
      </ul>
    </div>
  );
});
