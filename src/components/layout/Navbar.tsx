'use client';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { portfolioData } from '@data/portfolio';
import useMediaQuery from '@hooks/useMediaQuery';
import cn from '@utils/cn';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuLink from './MenuLink';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width: 992px)');

  // check if desktop device to hide navbar
  useEffect(() => {
    if (isDesktop) {
      setMobileMenuOpen(false);
    }
  }, [isDesktop]);

  // check if the click occurred outside the mobile menu
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        mobileMenuOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.btn-menu-toggle-icon')
      ) {
        setMobileMenuOpen(false);
      }
    }

    // attach the event listener to the document
    document.addEventListener('click', handleDocumentClick);

    // clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className='z-[100] container mx-auto w-full'>
      <div className='flex h-[80px] items-center justify-between lg:h-[90px]'>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/img/logo.png'
            alt={portfolioData.personal.name}
            width={40}
            height={40}
            priority
            className='h-10 w-10 rounded-xl border border-white/10 bg-white/[0.03] p-1'
          />
          <span className='text-sm font-semibold tracking-tight text-white'>
            {portfolioData.personal.name}
          </span>
        </Link>

        {/* desktop menus */}
        <ul className='hidden list-none items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 backdrop-blur lg:flex'>
          <li>
            <MenuLink
              className='!text-white/80'
              label='Home'
              path='/'
            />
          </li>
          <li>
            <MenuLink
              className='!text-white/80'
              label='About'
              path='/#about'
            />
          </li>
          <li>
            <MenuLink
              className='!text-white/80'
              label='Skills'
              path='/#skills'
            />
          </li>
          <li>
            <MenuLink
              className='!text-white/80'
              label='Experience'
              path='/#experience'
            />
          </li>
          <li>
            <MenuLink
              className='!text-white/80'
              label='Work'
              path='/#portfolio'
            />
          </li>
          <li>
            <MenuLink
              className='!text-white/80'
              label='Contact'
              path='/#contact'
            />
          </li>
        </ul>

        {/* menu toggle button */}
        <div className='flex items-center gap-x-4 lg:hidden'>
          <Button
            className='!rounded-full'
            icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type='primary'
            shape='circle'
            size='large'
          />
        </div>
      </div>

      {/* mobile menus */}
      <div className='-mt-2 flex justify-center lg:hidden'>
        <div
          className={cn('mobile-menu absolute w-full px-2', mobileMenuOpen ? 'active' : 'block')}
        >
          <ul className='h-auto list-none rounded-2xl border border-white/10 bg-black/90 py-3 leading-10 font-semibold text-white shadow-2xl backdrop-blur lg:hidden'>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-white/90'
                label='Home'
                path='/'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-white/90'
                label='About'
                path='/#about'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-white/90'
                label='Skills'
                path='/#skills'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-white/90'
                label='Experience'
                path='/#experience'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-white/90'
                label='Work'
                path='/#portfolio'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-white/90'
                label='Contact'
                path='/#contact'
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
