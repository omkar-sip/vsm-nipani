import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import TopBar from '../../components/common/TopBar';
import './BookingConfirm.css';

export default function BookingConfirm() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="screen active" id="booking-confirm">
      <TopBar title="Booking Status" showBack backTo="/customer/home" rightContent={<div style={{ fontSize: 20 }}>🆘</div>} />
      
      <div className="scroll-content" style={{ padding: '0 var(--sp-page)' }}>
        <div className="r-container">
          <div className="confirm-animation">
            <div className="confirm-circle">✓</div>
            <div className="confirm-title">Request Sent</div>
            <div className="confirm-sub">Connecting with nearby workers...</div>
          </div>

          <div className="tracking-card">
            <div className="section-title" style={{ padding: 0 }}>Live Tracking</div>
            <div style={{ display: 'flex', marginTop: 24, padding: '0 10px' }}>
              <div className="tracking-step">
                <div className="tracking-dot done">✓</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)' }}>Matched</div>
              </div>
              <div className="tracking-line done"></div>
              <div className="tracking-step">
                <div className="tracking-dot current">⚡</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--saffron)' }}>En Route</div>
              </div>
              <div className="tracking-line pending"></div>
              <div className="tracking-step">
                <div className="tracking-dot pending">📍</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)' }}>Arrived</div>
              </div>
            </div>

            <div style={{ background: '#FFF5EC', border: '1px solid var(--saffron)', borderRadius: 12, padding: 14, marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 24 }}>👷</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Ramesh Kumar accepted</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Arriving in <strong style={{ color: 'var(--saffron)' }}>15 mins</strong></div>
              </div>
              <button style={{ background: 'var(--green)', color: 'white', border: 'none', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }} onClick={() => showToast('📞 Calling Ramesh...')}>📞 Call</button>
            </div>
          </div>

          <div className="booking-info-card" style={{ marginTop: 16 }}>
            <div className="section-title" style={{ padding: 0, marginBottom: 16 }}>Booking Details</div>
            
            <div className="summary-row">
              <span style={{ color: 'var(--text-muted)' }}>Service</span>
              <span style={{ fontWeight: 600 }}>Plumbing</span>
            </div>
            <div className="summary-row">
              <span style={{ color: 'var(--text-muted)' }}>Est. Total</span>
              <span style={{ fontWeight: 600 }}>₹680 + parts</span>
            </div>
            <div className="summary-row">
              <span style={{ color: 'var(--text-muted)' }}>Payment Mode</span>
              <span style={{ fontWeight: 600, color: 'var(--sky)' }}>UPI / Cash on Delivery</span>
            </div>
            
            <div className="divider" style={{ margin: '12px 0' }}></div>
            
            <div className="summary-row">
              <span style={{ color: 'var(--text-muted)' }}>Location</span>
              <span style={{ fontWeight: 600, textAlign: 'right' }}>12, 4th Cross, Vijayanagar<br/>Mysuru</span>
            </div>
          </div>

          <button className="submit-btn" style={{ background: 'white', color: 'var(--red)', border: '2px solid var(--red)', marginTop: 24, marginBottom: 24 }} onClick={() => navigate('/customer/review')}>
            Simulate Job Done &amp; Rate →
          </button>
        </div>
      </div>
    </div>
  );
}
