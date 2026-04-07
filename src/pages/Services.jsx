import React from 'react';
import { Settings, Cloud, Smartphone, Database } from 'lucide-react';

const Services = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="section-title">サービス紹介</h1>
          <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}>
            お客様の多種多様なビジネス課題に対し、最適なソリューションを提供します。
          </p>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon"><Settings size={40} /></div>
              <h3>システムインテグレーション</h3>
              <p>
                基幹システムの構築から運用保守まで、一貫したサービスを提供します。
                最新技術を取り入れつつ、安定性の高いシステム環境を実現します。
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Cloud size={40} /></div>
              <h3>クラウド導入支援</h3>
              <p>
                AWS, Azure, Google Cloud等の各種クラウドサービスへの移行支援、
                最適化、サーバーレスアーキテクチャの構築を行います。
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Smartphone size={40} /></div>
              <h3>モバイルアプリ開発</h3>
              <p>
                iOS/Android双方に対応した使いやすいスマートフォンアプリを開発。
                ユーザー体験（UX）を重視し、ビジネスの接点を拡大します。
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Database size={40} /></div>
              <h3>データ基盤構築</h3>
              <p>
                散在するデータを一元管理するデータウェアハウスやデータレイクの構築。
                AI・機械学習を用いた高度な分析基盤をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
