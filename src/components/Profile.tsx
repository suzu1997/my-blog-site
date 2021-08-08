import Image from 'next/image';
import { memo, VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Profile: VFC = memo(() => {
  return (
    <div className='mt-10 md:mt-0 md:w-10/12 text-center border border-violet-200'>
      <h1 className='p-2 text-lg bg-violet-200 shadow-sm'>プロフィール</h1>
      <div className='p-6'>
        <Image
          src='/profile-img.jpg'
          alt='プロフィール画像'
          width={180}
          height={180}
          className='rounded-full'
        />
        <div className='text-right'>
          <div className='mb-2'>
            <a
              href='https://twitter.com/suzu73424970'
              target='_blank'
              rel='noreferrer'
              className='mr-1 hover:opacity-70'
            >
              <FontAwesomeIcon icon={faTwitter} size='lg' />
            </a>
            <a
              href='https://github.com/suzu1997'
              target='_blank'
              rel='noreferrer'
              className='hover:opacity-70'
            >
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
          </div>
          <p className='inline-block text-sm text-gray-500 hover:text-gray-900'>
            →
            <a
              href='https://suzu-portfolio.vercel.app'
              className='border-b border-gray-500'
              target='_blank'
              rel='noreferrer'
            >
              ポートフォリオサイト
            </a>
          </p>
        </div>
        <div className='mt-4'>
          新卒で旅行会社に入社。添乗員してました✈︎ 10月よりWEBフロントエンドエンジニアに転職します。
          <br />
          自分用の日記&記録として、まったりと投稿していきます＊
          <br />
          <br />
          好きなこと : 旅行、カフェ巡り、映画鑑賞、体を動かすこと🌼
        </div>
      </div>
    </div>
  );
});
