import { VFC } from 'react';

export const Category: VFC = () => {
  return (
    <div className=''>
      <h1 className='font-bold'>カテゴリー</h1>
        <ul>
          <li>プログラミング</li>
          <li>キャリアのこと。</li>
          <li>映画</li>
          <li>旅行</li>
          <li>グルメ</li>
        </ul>
    </div>
  );
};