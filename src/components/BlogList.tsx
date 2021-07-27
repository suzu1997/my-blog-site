import { VFC } from 'react';
import { BlogItem } from './BlogItem';

type Props = {
  blogs: any;
};

export const BlogList: VFC<Props> = (props) => {
  const { blogs } = props;
  console.log(blogs);
  
  return (
    <div className='text-center w-10/12 md:w-3/4 grid grid-cols-blogs gap-10 justify-center'>
      {blogs &&
        blogs.map((blog: any) => {
          return <BlogItem key={blog.id} blog={blog} />;
        })}
    </div>
  );
};
