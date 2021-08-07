import { memo, VFC } from 'react';
import { BlogItem } from './BlogItem';

type Props = {
  blogs: any;
};

export const BlogList: VFC<Props> = memo((props) => {
  const { blogs } = props;
  
  return (
    <div className='grid grid-cols-blogs gap-9 justify-center md:w-3/4 text-center'>
      {blogs &&
        blogs.map((blog: any) => {
          return <BlogItem key={blog.id} blog={blog} />;
        })}
    </div>
  );
});
