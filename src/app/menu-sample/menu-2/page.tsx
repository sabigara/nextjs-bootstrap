'use client';

import { useEffect } from 'react';
import { Index } from './components';

export default function AccordionSample() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Index />
    </>
  );
}
