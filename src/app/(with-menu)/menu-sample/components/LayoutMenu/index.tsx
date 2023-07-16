import { LayoutMain } from '@/components/layout/LayoutMain';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  className?: string;
  contents: ReactNode;
};

export const LayoutMenu = ({ className, contents }: Props) => {
  return (
    <LayoutMain
      className={clsx(className, 'col-md-9 ms-sm-auto col-lg-10 px-md-4')}
      contents={contents}
    />
  );
};
