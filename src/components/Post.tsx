import { useRouter } from 'next/dist/client/router';
import { memo, VFC } from 'react';

type Props = {
  post: any;
}

export const Post: VFC<Props> = memo((props) => {
  const router = useRouter();
  const { post } = props;

  return (
    <div className='py-5 px-10'>
      <div className='text-2xl font-bold border-b border-gray-300'>
        {post.title}
      </div>
      <button
        className='py-2 px-3 rounded-md border border-gray-500'
        onClick={() => router.back()}
      >
        戻る
      </button>
      <p>{post.publishedAt}</p>
      <div className='p-12' dangerouslySetInnerHTML={{ __html: `${post.body}` }}></div>
    </div>
  );
});
