import Image from 'next/image';
import Link from 'next/link';
import { memo, VFC } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  blog: any;
};

export const BlogItem: VFC<Props> = memo((props) => {
  const { blog } = props;

  // 公開日を日本時間に加工
  const publishedAt = dayjs
    .utc(blog.publishedAt)
    .tz('Asia/Tokyo')
    .format('YYYY-MM-DD');
  // 更新日を日本時間に加工
  const revisedAt = dayjs
    .utc(blog.revisedAt)
    .tz('Asia/Tokyo')
    .format('YYYY-MM-DD');

  return (
    <Link href={`/post/${blog.id}`}>
      <a>
        <div className='text-center rounded-lg shadow-md hover:shadow-xl hover:opacity-90'>
          <Image
            src={blog.image.url}
            alt='アイキャッチ画像'
            width={300}
            height={180}
          />
          <div className='text-left'>
            <div className='pl-2 text-gray-400'>
              🗓 {publishedAt}
            </div>
            <p className='pl-2 text-gray-400'>{`カテゴリー:${blog.category.category}`}</p>
            <p className='inline-block p-2 font-bold hover:text-purple-700'>
              {blog.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
});
