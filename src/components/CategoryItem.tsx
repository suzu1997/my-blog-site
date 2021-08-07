import Link from 'next/link';
import { memo, VFC } from 'react';
import { useCategories } from 'src/hooks/useCategories';

export const CategoryItem: VFC = memo(() => {
  const { data, error, isLoading } = useCategories();

  if (isLoading) {
    return <div>ローディング中...</div>;
  }
  if (error) {
    return <div className='p-2'>{error.message}</div>;
  }

  return (
    <>
      {data.contents.map((content: any) => {
        return (
          <li
            key={content.id}
            className='p-4 hover:bg-violet-100 hover:bg-opacity-60 cursor-pointer'
          >
            <Link href={`/posts/categories/${content.id}`}>
              <a className='block'>{content.category}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
});
