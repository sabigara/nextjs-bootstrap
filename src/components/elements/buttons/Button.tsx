import React from 'react';
import clsx from 'clsx';

type Props = JSX.IntrinsicElements['button'];

// <button> のデフォルトの挙動・Propsを保持したままBootstrapのクラス名だけを当てています。
// BaseButtonはonClickをPropとして定義していますが、例えばonMouseOverを使いたくなったときは
// 型定義を逐一変更する必要があります。
// 単にクラス名を当てて見た目を変更したいだけであり、独自の挙動を加える必要がないのであれば
// このような実装が望ましいと思います。
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <button
        className={clsx('btn', className)}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
