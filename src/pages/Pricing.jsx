import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div>
      <section className="section section-bg">
        <div className="container">
          <h1 className="section-title">料金・プラン</h1>
          <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}>
            ビジネスの規模やニーズに合わせて、最適なプランをお選びいただけます。
          </p>

          <div className="pricing-grid">
            {/* Basic Plan */}
            <div className="pricing-card">
              <h3>ベーシックプラン</h3>
              <div className="price">¥50,000<span>/月</span></div>
              <p style={{ color: 'var(--text-muted)' }}>スモールビジネス向け。必要最小限の機能を抑えたプラン。</p>
              <ul className="pricing-features">
                <li><Check size={20} color="var(--primary-light)" /> 基本的なWebサポート</li>
                <li><Check size={20} color="var(--primary-light)" /> サーバー維持管理</li>
                <li><Check size={20} color="var(--primary-light)" /> 月1回の定期レポート</li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>お問い合わせ</Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card featured">
              <div className="pricing-badge">人気</div>
              <h3 style={{ color: 'var(--primary-light)' }}>プロフェッショナルプラン</h3>
              <div className="price">¥150,000<span>/月</span></div>
              <p style={{ color: 'var(--text-muted)' }}>本格的な運用を目指す企業様へ。手厚いサポート付き。</p>
              <ul className="pricing-features">
                <li><Check size={20} color="var(--primary-light)" /> ベーシックプランの全機能</li>
                <li><Check size={20} color="var(--primary-light)" /> SEO対策・コンサルティング</li>
                <li><Check size={20} color="var(--primary-light)" /> 専任ディレクターによる月2回のMTG</li>
                <li><Check size={20} color="var(--primary-light)" /> 追加修正（月3回まで無料）</li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>お問い合わせ</Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <h3>エンタープライズプラン</h3>
              <div className="price">要相談</div>
              <p style={{ color: 'var(--text-muted)' }}>大規模システムや独自要件に応じたフルカスタマイズプラン。</p>
              <ul className="pricing-features">
                <li><Check size={20} color="var(--primary-light)" /> プロフェッショナルプランの全機能</li>
                <li><Check size={20} color="var(--primary-light)" /> 24時間365日の監視・保守</li>
                <li><Check size={20} color="var(--primary-light)" /> 高セキュリティオプション</li>
                <li><Check size={20} color="var(--primary-light)" /> 完全なシステムカスタマイズ対応</li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>お問い合わせ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
