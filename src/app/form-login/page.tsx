'use client';

import { useEffect } from 'react';
import { Index } from './components';
import { BaseButton } from '@/components/elements/buttons/BaseButton';

export default function AccordionSample() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Index />
      <div className="position-absolute bottom-0 end-0 m-5">
        <BaseButton
          url="/"
          className="btn-primary btn-sm"
          title="トップに戻る"
        />
      </div>
    </>
  );
}
