import Image from 'next/image';
import { VFC } from 'react';

export const BlogItem: VFC = () => {
  return (
    <div className='text-center rounded-lg shadow-md hover:shadow-xl hover:opacity-90'>
      <Image src='/portfolio-site.jpg' alt='アイキャッチ画像' width={300} height={180} className=''/>
      <div>
        <div className='text-gray-400'>🗓20xx.x.x  🏷ポートフォリオ</div>
        <div className='font-bold p-2'>HTMLとCSSでポートフォリオを作ってみた！</div>
      </div>
    </div>
  );
};