import Link from 'next/link';
import './index.css';
import { NavBarToggleButton } from '@/components/elements/NavbarToggleButton';

export const LayoutSideMenuHeader = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="./">
        ロゴ
      </a>
      <NavBarToggleButton
        targetId="sidebarMenu"
        className="position-absolute d-md-none collapsed"
      />
      <div className="w-100"></div>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <Link className="nav-link px-3" href="#">
            ログアウト
          </Link>
        </div>
      </div>
    </header>
  );
};
