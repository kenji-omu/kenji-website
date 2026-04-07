import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <Building2 size={28} />
          <span>Global Corp</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={isActive('/')}>ホーム</Link>
          <Link to="/services" className={isActive('/services')}>サービス紹介</Link>
          <Link to="/pricing" className={isActive('/pricing')}>料金・プラン</Link>
          <Link to="/company" className={isActive('/company')}>会社情報</Link>
          <Link to="/contact" className={isActive('/contact')}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
