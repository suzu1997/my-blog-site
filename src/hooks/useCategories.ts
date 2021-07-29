import { fetcher } from 'src/libs/fetcher';
import useSWR from 'swr';

export const useCategories: () => {
  data: any;
  error: any;
  isLoading: boolean;
} = () => {
  const { data, error } = useSWR(
    'https://suzu-blog.microcms.io/api/v1/category',
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
