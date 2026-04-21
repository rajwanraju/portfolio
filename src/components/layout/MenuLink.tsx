'use client';

import cn from '@utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IMenuLinkPops {
  readonly className?: React.HTMLAttributes<HTMLAnchorElement>['className'];
  readonly label: string;
  readonly path: string;
}

export default function MenuLink({ className = '', label, path }: IMenuLinkPops) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'font-inter rounded-full px-4 py-2 text-[12px] leading-[16px] tracking-[0.22em] uppercase',
        pathname === path
          ? 'bg-white/10 text-white font-semibold'
          : 'text-white/75 hover:text-white',
        className
      )}
      href={path}
    >
      {label}
    </Link>
  );
}
