export const fetcher: (url: string) => Promise<any> = async (url: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const res: any = await fetch(url, {
    headers: {
      'X-API-KEY': `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  if (!res.ok) {
    throw new Error('何らかのエラーにより、データを取得できませんでした');
  }
  const json = await res.json();

  return json;
};