import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>ビジネスの未来を共に創る</h1>
          <p>
            最先端のテクノロジーと確かな実績で、お客様のビジネス課題を解決し、
            持続可能な成長をサポートします。
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem 2rem', fontSize: '1.125rem' }}>
            お問い合わせはこちら <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">サービス紹介</h2>
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon"><Globe size={48} /></div>
              <h3>Webシステム開発</h3>
              <p>モダンなアーキテクチャを用いた、拡張性が高く安全なWebアプリケーションを開発します。お客様のニーズに柔軟に対応します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><BarChart3 size={48} /></div>
              <h3>データ分析・DX推進</h3>
              <p>社内に眠るデータを可視化・分析し、データドリブンな経営意思決定を支援。デジタルトランスフォーメーションを推進します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield size={48} /></div>
              <h3>セキュリティコンサル</h3>
              <p>高度化するサイバー脅威から企業の資産を守るため、セキュリティ体制の構築と継続的なモニタリングを提供します。</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">会社情報</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Global Corpは、テクノロジーを通じて社会に貢献する企業です。
            革新的なアイデアと確かな実装力で、新しい価値を創造し続けています。
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/company" className="btn btn-outline">
              会社概要を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
