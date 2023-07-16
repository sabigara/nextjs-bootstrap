'use client';

import { ReactNode, useId } from 'react';

type Props = {
  isBorderNone?: boolean;
  button: ReactNode; // クラス名がaccordion-buttonなので
  body: ReactNode; // クラス名がaccordion-bodyなので
};

export const Accordion = ({
  isBorderNone = true,
  button: header,
  body: contents,
}: Props) => {
  const id = useId(); // idを手動で設定したい理由が特にないのであれば
  return (
    <div className={`accordion ${isBorderNone ? 'accordion-flush' : ''}`}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {header}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading$s{eventName}`}
      >
        <div className="accordion-body">{contents}</div>
      </div>
    </div>
  );
};
