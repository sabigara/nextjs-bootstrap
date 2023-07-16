'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { LayoutSideMenuHeader } from '@/components/layout/LayoutMenuHeader';
import { LayoutSideMenu } from '@/components/layout/LayoutSideMenu';
import { LayoutMain } from '@/components/layout/LayoutMain';
import { usePathname } from 'next/navigation';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
};

export const LayoutMenu = ({ children }: Props) => {
  const pathname = usePathname();
  const menuPath = pathname.split('/').at(-1);
  return (
    <>
      <LayoutSideMenuHeader />
      <LayoutWrapper>
        <LayoutSideMenu />
        <LayoutMain
          className={clsx(
            'col-md-9 ms-sm-auto col-lg-10',
            menuPath && styles[menuPath]
          )}
        >
          {children}
        </LayoutMain>
      </LayoutWrapper>
    </>
  );
};
