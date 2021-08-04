// import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';

import { BlogList } from 'src/components/BlogList';
import { fetcher } from 'src/libs/fetcher';

type Props = {
  blogs: any;
};

const Home: NextPage<Props> = ({ blogs }) => {
  return <BlogList blogs={blogs} />;
};
//SSG
export const getStaticProps: GetStaticProps = async () => {
  const data: any = await fetcher('https://suzu-blog.microcms.io/api/v1/blog');

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
