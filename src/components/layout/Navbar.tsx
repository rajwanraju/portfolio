'use client';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
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
      <div className='flex h-[80px] items-center justify-between lg:h-[100px]'>
        <Link href='/'>
          <Image
            className='h-[60px] w-[90px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'
            src='/img/logo.png'
            alt='Rajwan Raju'
            width={90}
            height={60}
            priority
          />
        </Link>

        {/* desktop menus */}
        <ul className='hidden list-none space-x-4 pt-4 lg:flex xl:space-x-10'>
          <li>
            <MenuLink
              label='Home'
              path='/'
            />
          </li>
          <li>
            <MenuLink
              label='About'
              path='/#about'
            />
          </li>
          <li>
            <MenuLink
              label='Skills'
              path='/#skills'
            />
          </li>
          <li>
            <MenuLink
              label='Services'
              path='/#services'
            />
          </li>
          <li>
            <MenuLink
              label='Portfolio'
              path='/#portfolio'
            />
          </li>
          <li>
            <MenuLink
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
          <ul className='h-auto list-none rounded-[2px] bg-white py-2 leading-10 font-bold shadow-lg lg:hidden'>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-black'
                label='Home'
                path='/'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-black'
                label='About'
                path='/#about'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-black'
                label='Skills'
                path='/#skills'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-black'
                label='Services'
                path='/#services'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-black'
                label='Portfolio'
                path='/#portfolio'
              />
            </li>
            <li className='px-10 py-1'>
              <MenuLink
                className='!text-black'
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
