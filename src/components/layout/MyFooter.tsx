'use client';

import {
  TwitterOutlined,
  SkypeOutlined,
  LinkedinOutlined,
  GithubOutlined
} from '@ant-design/icons';
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
        'bg-gray-900 text-white py-16 !p-0',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="row justify-content-center mb-8">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo text-center mb-8">
                <Link href="/">
                  <Image
                    src="/img/logo.png"
                    alt="Rajwan Raju"
                    width={120}
                    height={60}
                    className="mb-4"
                  />
                </Link>
                {isDesktop && (
                  <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <div className="collapse navbar-collapse offset">
                      <ul className="nav navbar-nav menu_nav mx-auto flex space-x-8">
                        <li className="nav-item">
                          <Link href="/" className="nav-link text-white hover:text-blue-400 transition-colors">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/#about" className="nav-link text-white hover:text-blue-400 transition-colors">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/#skills" className="nav-link text-white hover:text-blue-400 transition-colors">
                            Skills
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/#services" className="nav-link text-white hover:text-blue-400 transition-colors">
                            Services
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/#portfolio" className="nav-link text-white hover:text-blue-400 transition-colors">
                            Portfolio
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/#contact" className="nav-link text-white hover:text-blue-400 transition-colors">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                )}
              </div>
              <div className="footer_social mt-lg-0 mt-4 text-center">
                <Button
                  size={isDesktop ? 'large' : 'small'}
                  type="link"
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <LinkedinOutlined className="text-2xl" />
                </Button>
                <Button
                  size={isDesktop ? 'large' : 'small'}
                  type="link"
                  href="https://github.com"
                  target="_blank"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <GithubOutlined className="text-2xl" />
                </Button>
                <Button
                  size={isDesktop ? 'large' : 'small'}
                  type="link"
                  href="https://twitter.com"
                  target="_blank"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <TwitterOutlined className="text-2xl" />
                </Button>
                <Button
                  size={isDesktop ? 'large' : 'small'}
                  type="link"
                  href="skype:rajwan?chat"
                  target="_blank"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <SkypeOutlined className="text-2xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text text-center text-gray-400">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Rajwan Raju - Senior Full Stack Software Engineer
          </p>
        </div>
      </div>
    </Footer>
  );
}
