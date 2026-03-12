import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import TopBar from '../../components/common/TopBar';

export default function WorkerDetail() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="screen active" id="worker-detail">
      <TopBar title="Worker Profile" showBack backTo="/customer"
        rightContent={<div style={{ fontSize: 20, cursor: 'pointer' }} onClick={() => showToast('❤️ Saved to favourites')}>🤍</div>}
      />
      <div className="scroll-content">
        {/* Profile Hero */}
        <div className="profile-hero">
          <div className="profile-avatar-row">
            <div className="profile-avatar">RK<div className="kyc-badge">✓ KYC</div></div>
            <div className="profile-meta">
              <h2>Ramesh Kumar</h2>
              <p>🔧 Expert Plumber · ⚡ Solar Tech</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>📍 1.2 km away · Available Now</p>
            </div>
          </div>
          <div className="profile-rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="rating-val">4.8</div>
            <div className="rating-count">(94 reviews)</div>
            <div style={{ marginLeft: 10, background: 'rgba(19,136,8,0.2)', borderRadius: 8, padding: '3px 8px', fontSize: 12, color: '#4AFF6B', fontWeight: 700 }}>● Online</div>
          </div>
          <div className="profile-stats">
            <div className="pstat"><div className="v">127</div><div className="l">Jobs</div></div>
            <div className="pstat"><div className="v">98%</div><div className="l">Done</div></div>
            <div className="pstat"><div className="v">87</div><div className="l">Trust</div></div>
            <div className="pstat"><div className="v">₹680/hr</div><div className="l">Rate</div></div>
          </div>
        </div>

        {/* About */}
        <div className="profile-section">
          <h3>About</h3>
          <div style={{ background: 'white', borderRadius: 14, padding: 14, border: '1.5px solid var(--border)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-main)' }}>
            Experienced plumber with 8+ years in residential and commercial work. Specialized in solar panel installation and water systems. MNREGA certified, PM Surya Ghar trained. Available across Mysuru district.
          </div>
        </div>

        {/* Reviews */}
        <div className="profile-section">
          <h3>Recent Reviews</h3>
          <div className="work-card">
            <div className="testimonial" style={{ background: 'white' }}>
              <div className="quote">"Fixed our bathroom pipe in 2 hours. Very clean and professional. Would definitely call Ramesh again!"</div>
              <div className="by">— Priya Sharma · ⭐⭐⭐⭐⭐ · Mar 2024</div>
            </div>
          </div>
          <div className="work-card">
            <div className="testimonial" style={{ background: 'white' }}>
              <div className="quote">"Installed 8 solar panels. Excellent technical knowledge. Job completed ahead of schedule."</div>
              <div className="by">— Arvind Nair · ⭐⭐⭐⭐⭐ · Jan 2024</div>
            </div>
          </div>
        </div>

        {/* Hire CTA */}
        <div style={{ padding: 16, position: 'sticky', bottom: 0, background: 'white', borderTop: '1.5px solid var(--border)' }}>
          <button className="submit-btn" style={{ marginTop: 0 }} onClick={() => navigate('/customer/booking-confirm')}>
            📞 Hire Ramesh — ₹680/hr
          </button>
        </div>
      </div>
    </div>
  );
}
