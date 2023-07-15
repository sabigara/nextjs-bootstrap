import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="container-fluid">
      <div className="row">{children}</div>
    </div>
  );
};
