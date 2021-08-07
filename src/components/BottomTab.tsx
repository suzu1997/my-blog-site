import { Fragment, memo } from 'react';
import { VFC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useCategories } from 'src/hooks/useCategories';
import Link from 'next/link';

export const BottomTab: VFC = memo(() => {
  const { data } = useCategories();

  return (
    <div className='sm:hidden fixed bottom-0 w-full'>
      <Menu as='div' className='block relative text-left'>
        {({ open }) => (
          <>
            <div>
              <Link href='/'>
                <a>
                  <button className='px-4 w-1/2 h-20 text-lg font-medium text-purple-500 bg-purple-100 border-r border-purple-400 focus:outline-none'>
                    トップ
                  </button>
                </a>
              </Link>
              <Menu.Button className='px-4 w-1/2 h-20 text-lg font-medium text-purple-500 bg-purple-100 focus:outline-none'>
                カテゴリー
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                className='absolute bottom-20 w-full bg-gray-100 origin-bottom-right focus:outline-none'
                as='ul'
              >
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className='divide-y divide-gray-300 > *'>
                  {data?.contents.map((content: any) => {
                    return (
                      <Menu.Item key={content.id} as='li'>
                        <Link href={`/posts/categories/${content.id}`} passHref>
                          <a>
                            <button
                              className='block items-center py-4 px-2 w-full text-center'
                              onClick={(open) => !open}
                            >
                              {content.category}
                            </button>
                          </a>
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
});
