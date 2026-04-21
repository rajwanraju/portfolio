'use client';

import {
  GithubOutlined
} from '@ant-design/icons';
import { portfolioData } from '@data/portfolio';
import useMediaQuery from '@hooks/useMediaQuery';
import cn from '@utils/cn';
import { Button, Layout } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Footer } = Layout;

export default function MyFooter({
  className = '',
}: {
  readonly className?: React.HTMLAttributes<HTMLDivElement>['className'];
}) {
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <Footer
      className={cn(
        '!bg-transparent text-white py-14 !p-0',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur'>
            <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <Link className='flex items-center gap-3' href='/'>
                  <Image
                    src='/img/logo.png'
                    alt={portfolioData.personal.name}
                    width={36}
                    height={36}
                    className='h-9 w-9 rounded-xl border border-white/10 bg-white/[0.03] p-1'
                  />
                  <span className='text-sm font-semibold text-white'>{portfolioData.personal.name}</span>
                </Link>
                <div className='mt-2 text-xs text-white/60'>{portfolioData.personal.title}</div>
              </div>

              <div className='flex items-center gap-3'>
                <Button
                  size={isDesktop ? 'large' : 'middle'}
                  type='text'
                  href={portfolioData.personal.github}
                  target='_blank'
                  className='!text-white/80'
                  icon={<GithubOutlined />}
                />
                <a
                  className='text-xs text-white/70 underline underline-offset-4'
                  href={`mailto:${portfolioData.personal.email}`}
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className='mt-6 text-center text-xs text-white/50'>
              © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
