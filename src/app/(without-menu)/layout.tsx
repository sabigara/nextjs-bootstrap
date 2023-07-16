import { LayoutDefault } from '@/layouts/Default';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccordionSample({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutDefault>{children}</LayoutDefault>;
}
