import { fetcher } from './fetcher';

//投稿のidの一覧を取得するための関数
export const getAllPostsIds = async (): Promise<any> => {
  const posts = await fetcher('https://suzu-blog.microcms.io/api/v1/blog');

  return posts.contents.map((post: any) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

//特定のidを使って、データベースからビルド時にデータを取得するための関数
export const getPostData = async (
  id: string | string[] | undefined
): Promise<{
  res: any;
}> => {
  const post = await fetcher(`https://suzu-blog.microcms.io/api/v1/blog/${id}`);

  return post;
};

//カテゴリーのidの一覧を取得
export const getCategoriesIds = async (): Promise<any> => {
  const categories = await fetcher('https://suzu-blog.microcms.io/api/v1/category');
  
  return categories.contents.map((category: any) => {
    return {
      params: {
        id: String(category.id),
      },
    };
  });
};

//カテゴリーのidを使って、ブログデータを取得するための関数
export const getPostsByCategories = async (
  id: string | string[] | undefined
): Promise<{
  res: any;
}> => {
  const posts = await fetcher(`https://suzu-blog.microcms.io/api/v1/blog?filters=category[equals]${id}`);
  console.log(posts);
  
  return posts;
};