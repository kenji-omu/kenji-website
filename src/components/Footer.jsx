import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/" className="footer-link">ホーム</Link>
          <Link to="/services" className="footer-link">サービス</Link>
          <Link to="/company" className="footer-link">会社概要</Link>
          <Link to="/contact" className="footer-link">お問い合わせ</Link>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Global Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
