import { LayoutMain } from '@/components/layout/LayoutMain';
import Link from 'next/link';

export default function Home() {
  return (
    <LayoutMain
      contents={
        <div className="m-5 d-flex justify-content-center align-items-center">
          <div>
            <h1 className="h3">サンプル一覧</h1>
            <ul>
              <li>
                <Link href="/accordion-sample">アコーディオン</Link>
              </li>
              <li>
                <Link href="/menu-sample/menu-1">サイドメニュー</Link>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
