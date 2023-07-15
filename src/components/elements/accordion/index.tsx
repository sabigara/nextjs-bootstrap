'use client';

import { ReactNode } from 'react';

type Accordion = {
  isBorderNone?: boolean;
  accordionId: string;
  header: string;
  contents: ReactNode;
};

export const Accordion = ({
  isBorderNone = true,
  accordionId,
  header,
  contents,
}: Accordion) => {
  return (
    <div className={`accordion ${isBorderNone ? 'accordion-flush' : ''}`}>
      <h2 className="accordion-header" id={`flush-heading${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${accordionId}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${accordionId}`}
        >
          {header}
        </button>
      </h2>
      <div
        id={`flush-collapse${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading$s{eventName}`}
      >
        <div className="accordion-body">{contents}</div>
      </div>
    </div>
  );
};
