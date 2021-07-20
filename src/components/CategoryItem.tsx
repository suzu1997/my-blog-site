import { VFC } from 'react';

const categories = [
  'プログラミング',
  'キャリアのこと。',
  '映画',
  '旅行',
  'グルメ',
];

export const CategoryItem: VFC = () => {
  return (
    <>
      {categories.map((category) => {
        return (
          <li key={category} className='p-4 cursor-pointer hover:bg-violet-100 hover:bg-opacity-60'>
            <a>{category}</a>
          </li>
        );
      })}
    </>
  );
};
