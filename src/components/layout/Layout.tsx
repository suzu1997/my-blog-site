import { FC, memo } from 'react';
import { BottomTab } from '../BottomTab';
import { SideBar } from '../SideBar';
import { TopImage } from '../TopImage';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: FC = memo((props) => {
  const { children } = props;

  return (
    <div className='flex overflow-x-hidden flex-col items-center p-0 max-w-full min-h-screen font-serif'>
      <Header />
      <main className='flex-grow min-h-full'>
        <TopImage />
        <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start my-12 mx-auto w-3/4 md:w-11/12'>
          {children}
          <SideBar />
        </div>
      </main>
      <Footer />
      <BottomTab />
    </div>
  );
});
