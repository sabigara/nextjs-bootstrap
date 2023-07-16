import { ReactNode } from 'react';

type Props = {
  className: string;
  contents: ReactNode; // childrenではいけないのでしょうか？
};

// 単なるdiv以外の役割がないようですが、なんのためのコンポーネントでしょうか？
export const FormSet = ({ className, contents }: Props) => {
  return <div className={className}>{contents}</div>;
};
