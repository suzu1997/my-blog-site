import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Post } from 'src/components/Post';
import { getAllPostsIds, getPostData } from 'src/libs/post';

type Props = {
  post: any;
};

const PostId: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@suzu73424970' />
        <meta property='og:url' content={`https://suzu-diary.vercel.app/post/${post.id}`} />
        <meta property='og:title' content={post.title} />
        <meta property='og:image' content={post.image.url} />
      </Head>
      <div className='flex-grow'>
        <Post post={post} />
      </div>
    </>
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
