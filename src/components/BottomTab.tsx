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
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute bottom-20 w-full bg-gray-100 origin-bottom-right focus:outline-none'>
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className='divide-y divide-gray-300 > *'>
              {data?.contents.map((content: any) => {
                return (
                  <Menu.Item key={content.id}>
                    <Link href={`/posts/categories/${content.id}`}>
                      <a>
                        <button className='block items-center py-4 px-2 w-full text-center'>
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
      </Menu>
    </div>
    // <div className='w-56 text-right fixed top-16'>
    //   <Menu as='div' className='relative inline-block text-left'>
    //     {({ open }) => (
    //       <>
    //         <div>
    //           <Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
    //             Options
    //           </Menu.Button>
    //         </div>
    //         {open ? (
    //           <Transition
    //             as={Fragment}
    //             enter='transition ease-out duration-100'
    //             enterFrom='transform opacity-0 scale-95'
    //             enterTo='transform opacity-100 scale-100'
    //             leave='transition ease-in duration-75'
    //             leaveFrom='transform opacity-100 scale-100'
    //             leaveTo='transform opacity-0 scale-95'
    //           >
    //             <Menu.Items
    //               className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
    //               static
    //             >
    //               <div className='px-1 py-1'>
    //                 {data?.contents.map((content: any) => {
    //                   return (
    //                     <Menu.Item key={content.id}>
    //                       {({ active }) => (
    //                         <Link href={`/posts/categories/${content.id}`}>
    //                           <a href={`/posts/categories/${content.id}`}>
    //                             <button
    //                               className={`${
    //                                 active ? 'text-white' : 'text-gray-900'
    //                               } group items-center w-full px-2 py-4 text-md block text-center`}
    //                               onClick={() => {
    //                                 open = !open;
    //                                 console.log(open);
    //                               }}
    //                             >
    //                               {content.category}
    //                             </button>
    //                           </a>
    //                         </Link>
    //                       )}
    //                     </Menu.Item>
    //                   );
    //                 })}
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <button
    //                       className={`${
    //                         active
    //                           ? 'bg-violet-500 text-white'
    //                           : 'text-gray-900'
    //                       } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                     >
    //                       Edit
    //                     </button>
    //                   )}
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <button
    //                       className={`${
    //                         active
    //                           ? 'bg-violet-500 text-white'
    //                           : 'text-gray-900'
    //                       } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                     >
    //                       Duplicate
    //                     </button>
    //                   )}
    //                 </Menu.Item>
    //               </div>
    //               <div className='px-1 py-1'>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <button
    //                       className={`${
    //                         active
    //                           ? 'bg-violet-500 text-white'
    //                           : 'text-gray-900'
    //                       } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                     >
    //                       Archive
    //                     </button>
    //                   )}
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <button
    //                       className={`${
    //                         active
    //                           ? 'bg-violet-500 text-white'
    //                           : 'text-gray-900'
    //                       } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                     >
    //                       Move
    //                     </button>
    //                   )}
    //                 </Menu.Item>
    //               </div>
    //               <div className='px-1 py-1'>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <button
    //                       className={`${
    //                         active
    //                           ? 'bg-violet-500 text-white'
    //                           : 'text-gray-900'
    //                       } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                     >
    //                       Delete
    //                     </button>
    //                   )}
    //                 </Menu.Item>
    //               </div>
    //             </Menu.Items>
    //           </Transition>
    //         ) : (<div>aaa</div>)}
    //       </>
    //     )}
    //   </Menu>
    // </div>
  );
});
