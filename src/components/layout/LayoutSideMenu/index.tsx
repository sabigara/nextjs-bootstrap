'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import './index.css';

const sideMenuItem: {
  id: string;
  menuText: string;
  url: string;
}[] = [
  {
    id: '1',
    menuText: 'メニュー１',
    url: '/menu-sample/menu-1',
  },
  {
    id: '2',
    menuText: 'メニュー2',
    url: '/menu-sample/menu-2',
  },

  {
    id: '3',
    menuText: 'メニュー3',
    url: '/menu-sample/menu-3',
  },
];

export const LayoutSideMenu = () => {
  // 現在のPathを取得
  const curretPath = usePathname();

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {sideMenuItem.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                href={item.url}
                className={clsx(
                  item.url === curretPath && 'active',
                  'nav-link'
                )}
              >
                {item.menuText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
