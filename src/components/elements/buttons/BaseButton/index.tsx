'use client'

import Link from 'next/link';

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
    <Link href={url} className={`btn ${className || ''}`}>
      {title}
    </Link>
  ) : (
    <button
      className={`btn ${className || ''}`}
      type={buttonType}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
