'use client';

import cn from '@utils/cn';
import { FloatButton, Layout } from 'antd';
import MyFooter from './MyFooter';
import Navbar from './Navbar';

const { Content, Header } = Layout;

interface IMainLayoutProps {
  readonly children: React.ReactNode;
  readonly containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export default function MainLayout({ children, containerClassName = '' }: IMainLayoutProps) {
  return (
    <Layout>
      <Header className='sticky top-0 z-[100] !h-[80px] lg:!h-[100px]'>
        <Navbar />
      </Header>

      <Content
        className={cn(
          '!min-h-[calc(100vh-160px)] lg:!min-h-[calc(100vh-200px)]',
          containerClassName
        )}
      >
        {children}
      </Content>

      <MyFooter className='container mx-auto' />

      <FloatButton.BackTop className='!rounded-full' />
    </Layout>
  );
}
