import { ReactNode } from 'react';
import { clsx } from 'clsx';
import './index.css';

type Props = {
  className?: string;
  contents: ReactNode;
};

export const LayoutMain = ({ className, contents }: Props) => {
  return <main className={clsx(className, 'show-page')}>{contents}</main>;
};
