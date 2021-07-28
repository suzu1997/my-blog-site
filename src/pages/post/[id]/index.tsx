import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Header } from 'src/components/layout/Header';

const PostId: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div>ブログの子ページ</div>
      <div>{router.query.id}</div>
      <button
        className='py-2 px-3 rounded-md border border-gray-500'
        onClick={() => router.back()}
      >
        戻る
      </button>
    </div>
  );
};

export default PostId;
