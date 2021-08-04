import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Post } from 'src/components/Post';
import { getAllPostsIds, getPostData } from 'src/libs/post';

type Props = {
  post: any;
};

const PostId: NextPage<Props> = ({ post }) => {
  return (
    <div className='flex-grow'>
      <Post post={post}/>
    </div>
  );
};

//idのとりうる値のリストを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds();
  return {
    paths,
    fallback: 'blocking',
  };
};

//idに基づいて必要なデータを取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params?.id);
  return {
    props: {
      post,
    },
    revalidate: 5,
  };
};

export default PostId;
