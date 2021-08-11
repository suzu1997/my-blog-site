import { memo, VFC } from 'react';

export const SkeletonLoading: VFC = memo(() => {
  return (
    <div className='py-5'>
      <div className='flex justify-between items-center animate-pulse'>
        <div className='ml-5 w-6/12 h-4 bg-gray-200 rounded'></div>
      </div>
    </div>
  );
});
