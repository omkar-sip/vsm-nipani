import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/common/TopBar';

export default function WorkerMatches() {
  const navigate = useNavigate();

  return (
    <div className="screen active" id="worker-matches">
      <TopBar title="Workers Available" showBack backTo="/customer/booking"
        rightContent={<div style={{ fontSize: 13, color: 'var(--green)', fontWeight: 700 }}>8 nearby</div>}
      />
      <div className="scroll-content">
        <div style={{ padding: '12px 16px', background: '#F0FDF4', borderBottom: '1.5px solid #BBF7D0', fontSize: 13, color: 'var(--green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
          ✅ Your request was sent to 8 workers. Waiting for accepts...
        </div>

        <div style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-muted)' }}>Sorted by: ⭐ Rating + 📍 Distance</div>

        {/* Accepted Worker */}
        <div className="worker-match" style={{ position: 'relative' }} onClick={() => navigate('/customer/worker-detail')}>
          <div style={{ position: 'absolute', top: -1, left: -1, right: -1, background: 'var(--green)', borderRadius: '18px 18px 0 0', padding: '4px 12px', fontSize: 11, fontWeight: 700, color: 'white' }}>✅ ACCEPTED YOUR REQUEST</div>
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
            <div className="wm-avatar">👷</div>
            <div className="wm-info">
              <div className="wm-name">Ramesh Kumar</div>
              <div className="wm-skills">🔧 Plumbing · ⚡ Solar</div>
              <div className="wm-verified">🛡️ KYC · 4.8⭐ · 127 jobs done</div>
            </div>
            <div className="wm-right">
              <div className="wm-price">₹680/hr</div>
              <div className="wm-eta">25 min</div>
            </div>
          </div>
          <button className="btn-hire" style={{ width: '100%', marginTop: 12 }} onClick={(e) => { e.stopPropagation(); navigate('/customer/booking-confirm'); }}>Hire Ramesh →</button>
        </div>

        {/* Worker 2 */}
        <div className="worker-match" onClick={() => navigate('/customer/worker-detail')}>
          <div className="wm-avatar">👩‍🔧</div>
          <div className="wm-info">
            <div className="wm-name">Lakshmi Devi</div>
            <div className="wm-skills">🔧 Plumbing · 🚿 Sanitation</div>
            <div className="wm-verified">🛡️ KYC · 4.9⭐ · 83 jobs done</div>
          </div>
          <div className="wm-right">
            <div className="wm-price">₹620/hr</div>
            <div className="wm-eta">31 min</div>
          </div>
        </div>

        {/* Worker 3 - Pending */}
        <div className="worker-match" style={{ opacity: 0.7 }}>
          <div className="wm-avatar">👨‍🔧</div>
          <div className="wm-info">
            <div className="wm-name">Ajay Patil</div>
            <div className="wm-skills">🔧 Plumbing</div>
            <div className="wm-verified">🛡️ KYC · 4.5⭐ · 56 jobs done</div>
          </div>
          <div className="wm-right">
            <div className="wm-price">₹540/hr</div>
            <div className="wm-eta" style={{ color: 'var(--text-muted)' }}>Pending...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
