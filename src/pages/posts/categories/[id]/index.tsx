import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BlogList } from 'src/components/BlogList';
import { getCategoriesIds, getPostsByCategories } from 'src/libs/post';

type Props = {
  blogs: any;
};

const CategoryId: NextPage<Props> = ({ blogs }) => {
  return <BlogList blogs={blogs.contents} />;
};

//idのとりうる値のリストを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getCategoriesIds();

  return {
    paths,
    fallback: 'blocking',
  };
};

//idに基づいて必要なデータを取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogs = await getPostsByCategories(params?.id);
  
  return {
    props: {
      blogs,
    },
    revalidate: 5,
  };
};

export default CategoryId;
