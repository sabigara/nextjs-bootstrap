import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'nextjs-bootstrap',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="/bootstrap.min.js" />
      <html lang="ja">
        <body>{children}</body>
      </html>
    </>
  );
}
