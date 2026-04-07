import React from 'react';

const Company = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="section-title">会社情報</h1>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <h2>代表挨拶</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              私たちGlobal Corpは、「テクノロジーの力で、すべての人に豊かな未来を」というビジョンのもと、
              お客様により良いデジタル環境を提供してまいりました。
              急速に変化する現代において、柔軟な発想と確かな技術力は不可欠です。
            </p>
            <p>
              私たちは単なるシステム開発にとどまらず、お客様の強力なビジネスパートナーとして、
              共に課題に立ち向かい、成長していくことをお約束いたします。
              今後とも、変わらぬご支援とご愛顧を賜りますようお願い申し上げます。
            </p>
            <p style={{ textAlign: 'right', marginTop: '1rem', fontWeight: 'bold' }}>
              代表取締役　大室賢時
            </p>
          </div>

          <table className="company-table">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社 Global Corp (Global Corp Inc.)</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2026年 4月</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>5,000万円</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>代表取締役　大室賢時</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>東京都立川市幸町</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  - Webシステム・モバイルアプリの企画・開発<br />
                  - クラウドインフラ設計・構築<br />
                  - ITコンサルティング・DX支援
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Company;
