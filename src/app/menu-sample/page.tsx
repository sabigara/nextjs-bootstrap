'use client';

import { useEffect } from 'react';

export default function LayoutSample() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <></>;
}
