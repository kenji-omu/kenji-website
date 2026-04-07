import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="section section-bg">
        <div className="container">
          <h1 className="section-title">お問い合わせ</h1>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            サービスに関するご質問、お見積もりのご依頼など、お気軽にお問い合わせください。
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">お名前 <span style={{ color: 'red' }}>*</span></label>
              <input type="text" id="name" className="form-input" placeholder="山田 太郎" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">メールアドレス <span style={{ color: 'red' }}>*</span></label>
              <input type="email" id="email" className="form-input" placeholder="example@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">件名</label>
              <input type="text" id="subject" className="form-input" placeholder="システム開発に関するお問い合わせ" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">お問い合わせ内容 <span style={{ color: 'red' }}>*</span></label>
              <textarea id="message" className="form-textarea" placeholder="詳細をご記入ください。" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit">送信する</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
