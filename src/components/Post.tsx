import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { memo, VFC } from 'react';
import Link from 'next/link';

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  post: any;
};

export const Post: VFC<Props> = memo((props) => {
  const { post } = props;

  // 公開日を日本時間に加工
  const publishedAt = dayjs
    .utc(post.publishedAt)
    .tz('Asia/Tokyo')
    .format('YYYY-MM-DD');
  // 更新日を日本時間に加工
  const revisedAt = dayjs
    .utc(post.revisedAt)
    .tz('Asia/Tokyo')
    .format('YYYY-MM-DD');

  return (
    <div className='py-5 sm:px-24 md:ml-20 rounded-sm sm:shadow-md'>
      <div className='pt-2 text-xl sm:text-2xl font-bold border-b border-gray-300'>
        {post.title}
      </div>
      <div className='pt-2 pl-2 text-gray-400'>
        🗓 {publishedAt}
        {publishedAt === revisedAt ? null : (
          <span className='ml-5'>
            <FontAwesomeIcon icon={faSyncAlt} size='sm' /> {revisedAt}
          </span>
        )}
      </div>
      <div
        className='mx-auto mt-8 prose'
        dangerouslySetInnerHTML={{ __html: `${post.body}` }}
      ></div>
      <div className='inline-block mt-10 hover:underline'>
        <Link href='/'>
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
});
