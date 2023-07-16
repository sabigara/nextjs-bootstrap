import { LayoutDefault } from '@/layouts/Default';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'フォームサンプル | nextjs-bootstrap',
  description: '',
};

export default function AccordionSample({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutDefault>{children}</LayoutDefault>;
}
