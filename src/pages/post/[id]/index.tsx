import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Header } from 'src/components/layout/Header';
import { fetcher } from 'src/libs/fetcher';

type Props = {
  post: any;
};

const PostId: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  console.log(post);

  return (
    <div>
      <Header />
      <div>ブログの子ページ</div>
      <div>{router.query.id}</div>
      <div>{`タイトル:${post.title}`}</div>
      <p>{post.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: `${post.body}` }}></div>
      <button
        className='py-2 px-3 rounded-md border border-gray-500'
        onClick={() => router.back()}
      >
        戻る
      </button>
    </div>
  );
};

//idの一覧を取得するための関数
export async function getAllpostsIds(): Promise<any> {
  const posts = await fetcher('https://suzu-blog.microcms.io/api/v1/blog');

  return posts.contents.map((post: any) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//特定のidを使って、データベースからビルド時にデータを取得するための関数
export async function getPostData(id: string | string[] | undefined): Promise<{
  res: any;
}> {
  const post = await fetcher(`https://suzu-blog.microcms.io/api/v1/blog/${id}`);

  return post;
}

//idのとりうる値のリストを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllpostsIds();
  return {
    paths,
    fallback: false,
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
