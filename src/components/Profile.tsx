import Image from 'next/image';
import { VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Profile: VFC = () => {
  return (
    <div className='mt-10 md:mt-0 w-10/12 text-center border border-violet-200'>
      <h1 className='p-2 text-lg bg-violet-200 shadow-sm'>プロフィール</h1>
      <div className='p-6'>
        <Image
          src='/portfolio-site.jpg'
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
          <p className='text-sm text-gray-500'>
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
          自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介
        </div>
      </div>
    </div>
  );
};
