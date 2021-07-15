import Image from 'next/image';
import { VFC } from 'react';

export const BlogItem: VFC = () => {
  return (
    <div className='grid '>
      <Image src='/portfolio-site.jpg' alt='アイキャッチ画像' width={300} height={250} className='rounded-lg'/>
      <div>
        <div className='text-gray-400'>🗓20xx.x.x  🏷ポートフォリオ</div>
        <div className='font-bold'>HTMLとCSSでポートフォリオを作ってみた！</div>
      </div>
    </div>
  );
};