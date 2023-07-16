import { ReactNode } from 'react';
import { clsx } from 'clsx';
import './index.css';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const LayoutMain = ({ className, children }: Props) => {
  return <main className={clsx(className, 'show-page')}>{children}</main>;
};
