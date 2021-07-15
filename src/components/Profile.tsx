import Image from 'next/image';
import { VFC } from 'react';

export const Profile: VFC = () => {
  return (
    <div className=''>
      <h1 className='font-bold'>プロフィール</h1>
      <Image src='/portfolio-site.jpg' alt='プロフィール画像' width={200} height={200} className='rounded-full'/>
      <div>
        <div className=''>自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介</div>
      </div>
    </div>
  );
};