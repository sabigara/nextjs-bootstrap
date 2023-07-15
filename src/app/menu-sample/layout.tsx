import { LayoutMenu } from '@/layouts/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'nextjs-bootstrap',
  description: '',
};

export default function MenuSample({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutMenu>{children}</LayoutMenu>
    </>
  );
}
