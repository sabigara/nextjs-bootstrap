import Link from 'next/link';

export const LayoutHeader = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-info flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
        ロゴ
      </Link>
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
