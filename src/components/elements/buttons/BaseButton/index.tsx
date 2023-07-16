'use client';

import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset';
  title?: string; // childrenを使うべきです。
  url?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

// 無理にbuttonとaタグを統合しないほうがいいと思います。
// それぞれの要素の役割は全く異なっており、似ているのは見た目だけです。
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
