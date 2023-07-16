import { LayoutMenu } from '@/layouts/Menu';

export default function WithMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutMenu>{children}</LayoutMenu>;
}
