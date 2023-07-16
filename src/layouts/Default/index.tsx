import { ReactNode } from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { LayoutHeader } from '@/components/layout/LayoutHeader';
import { LayoutMain } from '@/components/layout/LayoutMain';

type Props = {
  children: ReactNode;
};

export const LayoutDefault = ({ children }: Props) => {
  return (
    <>
      <LayoutHeader />
      <LayoutWrapper>
        <LayoutMain>{children}</LayoutMain>
      </LayoutWrapper>
    </>
  );
};
