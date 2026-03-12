import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import BottomNav from '../../components/common/BottomNav';
import TopBar from '../../components/common/TopBar';
import './CustomerHome.css';

const CUSTOMER_NAV = [
  { icon: '🏠', label: 'Home' },
  { icon: '➕', label: 'Book Now' },
  { icon: '📋', label: 'Bookings' },
  { icon: '👤', label: 'Profile' },
];

const CATEGORIES = [
  { icon: '🔧', label: 'Plumbing', bg: '#FFF0E6', active: true },
  { icon: '⚡', label: 'Electrician', bg: '#FFFBEB' },
  { icon: '🧱', label: 'Mason', bg: '#F0FDF4' },
  { icon: '🪚', label: 'Carpenter', bg: '#EEF5FF' },
  { icon: '🌞', label: 'Solar', bg: '#FDF2F8' },
  { icon: '🎨', label: 'Painter', bg: '#F0FFF4' },
];

export default function CustomerHome() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleNav = (i, item) => {
    if (item.label === 'Book Now') navigate('/customer/booking');
    else if (item.label === 'Bookings') showToast('My Bookings — 2 active');
    else if (item.label === 'Profile') showToast('Profile Settings');
  };

  return (
    <div className="screen active" id="customer-home">
      {/* TopBar */}
      <TopBar
        title="DakshBharat"
        showBack
        backTo="/role-select"
        leftContent={<div style={{ fontSize: 22, marginRight: 4 }}>🌾</div>}
        rightContent={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="topbar-notif" onClick={() => showToast('2 new offers!')}>
              🔔<div className="notif-dot"></div>
            </div>
            <div className="topbar-avatar">SV</div>
          </div>
        }
      />

      <div className="scroll-content">
        {/* Hero */}
        <div className="cust-hero">
          <div className="r-container">
            <div style={{ fontSize: 'var(--fs-body)', color: 'rgba(255,255,255,0.85)' }}>📍 Vijayanagar, Mysuru</div>
            <div style={{ fontSize: 'var(--fs-page-title)', fontWeight: 800, color: 'white', marginTop: 4 }}>What do you need today?</div>
          </div>
        </div>

        <div className="r-container" style={{ paddingBottom: '32px' }}>
          {/* Search */}
          <div className="search-bar">
            <div className="search-icon">🔍</div>
            <input type="text" placeholder="Search plumber, electrician..." readOnly onClick={() => navigate('/customer/booking')} />
            <div className="search-mic" onClick={() => showToast('🎤 Voice search — speak now')}>🎤</div>
          </div>

          {/* Categories */}
          <div className="section-title">Browse by Service</div>
          <div className="category-scroll">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className={`cat-btn ${cat.active ? 'active' : ''}`} onClick={() => navigate('/customer/booking')}>
                <div className="cat-circle" style={{ background: cat.bg }}>{cat.icon}</div>
                <div className="cat-label">{cat.label}</div>
              </div>
            ))}
          </div>

          <div className="divider" style={{ margin: '16px 0' }}></div>

          {/* Pricing Banner */}
          <div className="pricing-banner" style={{ background: 'linear-gradient(135deg,#138808,#1A73E8)', borderRadius: 'var(--radius-card)', padding: 'var(--sp-card)', color: 'white' }}>
            <h4 style={{ fontSize: 'var(--fs-card-title)' }}>💧 Plumbing demand HIGH today</h4>
            <p style={{ fontSize: 'var(--fs-small)', opacity: 0.85 }}>Book now before rates increase further. 8 workers available in your area.</p>
            <div className="pricing-row" style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
              <div className="pricing-chip" style={{ flex: 1, minWidth: '80px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px 8px', textAlign: 'center' }}>
                <div className="pv" style={{ fontSize: 'var(--fs-card-title)', fontWeight: 800 }}>8</div><div className="pl" style={{ fontSize: 'var(--fs-caption)', opacity: 0.8 }}>Workers Near</div>
              </div>
              <div className="pricing-chip" style={{ flex: 1, minWidth: '80px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px 8px', textAlign: 'center' }}>
                <div className="pv" style={{ fontSize: 'var(--fs-card-title)', fontWeight: 800 }}>~25min</div><div className="pl" style={{ fontSize: 'var(--fs-caption)', opacity: 0.8 }}>Avg Arrival</div>
              </div>
              <div className="pricing-chip" style={{ flex: 1, minWidth: '80px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px 8px', textAlign: 'center' }}>
                <div className="pv" style={{ fontSize: 'var(--fs-card-title)', fontWeight: 800 }}>₹480+</div><div className="pl" style={{ fontSize: 'var(--fs-caption)', opacity: 0.8 }}>Starting Rate</div>
              </div>
            </div>
          </div>

          {/* Top Rated Nearby */}
          <div className="section-title" style={{ marginTop: '24px' }}>🌟 Top Rated Nearby</div>

          <div className="grid-auto">
            <div className="worker-match" onClick={() => navigate('/customer/worker-detail')}>
              <div className="wm-avatar">👷</div>
              <div className="wm-info">
                <div className="wm-name">Ramesh Kumar</div>
                <div className="wm-skills">🔧 Plumbing · ⚡ Solar · 127 jobs</div>
                <div className="wm-verified">🛡️ KYC Verified · 4.8⭐ (94 reviews)</div>
              </div>
              <div className="wm-right">
                <div className="wm-price">₹680/hr</div>
                <div className="wm-eta">📍 1.2 km</div>
              </div>
            </div>

            <div className="worker-match" onClick={() => navigate('/customer/worker-detail')}>
              <div className="wm-avatar">👩‍🔧</div>
              <div className="wm-info">
                <div className="wm-name">Lakshmi Devi</div>
                <div className="wm-skills">🔧 Plumbing · 🚿 Sanitation · 83 jobs</div>
                <div className="wm-verified">🛡️ KYC Verified · 4.9⭐ (71 reviews)</div>
              </div>
              <div className="wm-right">
                <div className="wm-price">₹620/hr</div>
                <div className="wm-eta">📍 2.1 km</div>
              </div>
            </div>

            <div className="worker-match" onClick={() => navigate('/customer/worker-detail')}>
              <div className="wm-avatar">👨‍🔧</div>
              <div className="wm-info">
                <div className="wm-name">Murugan S.</div>
                <div className="wm-skills">⚡ Electrician · Solar · 201 jobs</div>
                <div className="wm-verified">🛡️ KYC Verified · 4.7⭐ (180 reviews)</div>
              </div>
              <div className="wm-right">
                <div className="wm-price">₹750/hr</div>
                <div className="wm-eta">📍 3.4 km</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button className="post-job-btn" onClick={() => navigate('/customer/booking')}>
              ➕ Post a New Job Request
            </button>
          </div>
        </div>
      </div>

      <BottomNav items={CUSTOMER_NAV} activeIndex={0} onItemClick={handleNav} />
    </div>
  );
}
