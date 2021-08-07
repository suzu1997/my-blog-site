import { memo, VFC } from 'react';

type Props = {
  post: any;
}

export const Post: VFC<Props> = memo((props) => {
  const { post } = props;

  return (
    <div className='py-5 px-10'>
      <div className='text-2xl font-bold border-b border-gray-300'>
        {post.title}
      </div>
      <p>{post.publishedAt}</p>
      <div className='p-12' dangerouslySetInnerHTML={{ __html: `${post.body}` }}></div>
    </div>
  );
});
