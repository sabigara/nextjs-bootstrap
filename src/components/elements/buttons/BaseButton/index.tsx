'use client';

import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset';
  title?: string;
  url?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const BaseButton = ({
  className,
  buttonType = 'button',
  title,
  url,
  onClick,
}: Props) => {
  return url ? (
    <Link href={url} className={clsx('btn', className)}>
      {title}
    </Link>
  ) : (
    <button
      className={clsx('btn', className)}
      type={buttonType}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
