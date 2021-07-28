import { VFC } from 'react';
import { BlogItem } from './BlogItem';

type Props = {
  blogs: any;
};

export const BlogList: VFC<Props> = (props) => {
  const { blogs } = props;
  
  return (
    <div className='grid grid-cols-blogs gap-10 justify-center w-10/12 md:w-3/4 text-center'>
      {blogs &&
        blogs.map((blog: any) => {
          return <BlogItem key={blog.id} blog={blog} />;
        })}
    </div>
  );
};
