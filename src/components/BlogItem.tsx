import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
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

export const BlogItem: VFC<Props> = (props) => {
  const { blog } = props;
  console.log(blog);

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
  console.log(publishedAt);
  console.log(revisedAt);

  return (
    <div className='text-center rounded-lg shadow-md hover:shadow-xl hover:opacity-90'>
      <Link href={`/post/${blog.id}`}>
        <a>
          <Image
            src={blog.image.url}
            alt='アイキャッチ画像'
            width={300}
            height={180}
            className=''
          />
        </a>
      </Link>
      <div className='text-left'>
        <div className='text-gray-400 pl-2'>
          🗓 {publishedAt} <span className='ml-5'><FontAwesomeIcon icon={faSyncAlt} size='sm' /> {revisedAt}</span>
        </div>
        <p className='text-gray-400 pl-2'>🏷ポートフォリオ</p>
        <div className='font-bold p-2'>{blog.title}</div>
      </div>
    </div>
  );
};
