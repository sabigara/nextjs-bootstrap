import { ReactNode } from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { LayoutSideMenuHeader } from '@/components/layout/LayoutMenuHeader';
import { LayoutSideMenu } from '@/components/layout/LayoutSideMenu';

type Props = {
  children: ReactNode;
};

export const LayoutMenu = ({ children }: Props) => {
  return (
    <>
      <LayoutSideMenuHeader />
      <LayoutWrapper>
        <LayoutSideMenu />
        {children}
      </LayoutWrapper>
    </>
  );
};
