import { ReactNode } from 'react';

type Props = {
  className: string;
  contents: ReactNode;
};

export const FormSet = ({ className, contents }: Props) => {
  return <div className={className}>{contents}</div>;
};
