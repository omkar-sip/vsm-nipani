import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import BottomNav from '../../components/common/BottomNav';
import TopBar from '../../components/common/TopBar';
import './WorkerHome.css';

const WORKER_NAV = [
  { icon: '🏠', label: 'Home' },
  { icon: '👤', label: 'Profile' },
  { icon: '📋', label: 'My Jobs' },
  { icon: '💰', label: 'Earnings' },
];

export default function WorkerHome() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isOnline, setIsOnline] = useState(true);
  const [acceptedGigs, setAcceptedGigs] = useState({});

  const toggleStatus = () => {
    setIsOnline(!isOnline);
    showToast(isOnline ? '🔴 Status: Offline' : '🟢 Status: Online — visible to employers');
  };

  const acceptGig = (gigId) => {
    setAcceptedGigs(prev => ({ ...prev, [gigId]: true }));
    showToast('🎉 Gig accepted! Customer notified.');
  };

  const handleNav = (i, item) => {
    if (item.label === 'Profile') navigate('/worker/profile');
    else if (item.label === 'My Jobs') showToast('My Jobs — 3 active');
    else if (item.label === 'Earnings') showToast('Earnings: ₹12,400 this week');
  };

  return (
    <div className="screen active" id="worker-home">
      {/* Top Bar */}
      <TopBar
        title="Worker Dashboard"
        showBack
        backTo="/role-select"
        leftContent={<div style={{ fontSize: 22, marginRight: 4 }}>🌾</div>}
        rightContent={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="topbar-notif" onClick={() => showToast('3 new gig alerts!')}>
              🔔<div className="notif-dot"></div>
            </div>
          </div>
        }
      />

      {/* Hero Band */}
      <div className="hero-band">
        <div className="flex-row" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="hero-greeting">Namaste 🙏</div>
            <div className="hero-name">Ramesh Kumar</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="topbar-avatar" style={{ width: 44, height: 44, fontSize: 18, cursor: 'pointer' }} onClick={() => navigate('/worker/profile')}>RK</div>
          </div>
        </div>
        <div className="hero-status-row">
          <div className="status-toggle" onClick={toggleStatus}>
            <div className="status-dot" style={{ background: isOnline ? '#4AFF6B' : '#888' }}></div>
            <span>{isOnline ? 'Online — Ready for work' : 'Offline — Not available'}</span>
          </div>
          <div className="hero-earnings">
            <div className="amt">₹2,840</div>
            <div className="lbl">Today's earnings</div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-chip"><div className="num">4.8⭐</div><div className="lab">Rating</div></div>
        <div className="stat-chip"><div className="num">127</div><div className="lab">Jobs Done</div></div>
        <div className="stat-chip"><div className="num">3</div><div className="lab">Active Gigs</div></div>
        <div className="stat-chip"><div className="num">KYC✓</div><div className="lab">Verified</div></div>
      </div>

      <div className="scroll-content">
        <div className="r-container" style={{ paddingTop: '16px' }}>
          {/* Pricing Demand Banner */}
          <div className="pricing-banner">
            <h4>📈 High Demand Alert!</h4>
            <p>Plumbing requests are surging in Mysuru today. Prices boosted by 1.4×</p>
            <div className="pricing-row">
              <div className="pricing-chip"><div className="pv">1.4×</div><div className="pl">Your Rate</div></div>
              <div className="pricing-chip"><div className="pv">+12</div><div className="pl">Open Gigs</div></div>
              <div className="pricing-chip"><div className="pv">₹680</div><div className="pl">Avg Rate/hr</div></div>
            </div>
          </div>

          <div className="section-title">
            <span>🔔 New Gigs Near You</span>
            <span className="see-all">See All</span>
          </div>

          <div className="grid-auto" style={{ marginBottom: '16px' }}>
            {/* GIG 1 */}
            <div className={`gig-card ${acceptedGigs['gig1'] ? 'accepted' : ''}`}>
              <div className="gig-top">
                <div className="gig-icon-wrap" style={{ background: '#FFF0E6' }}>🔧</div>
                <div className="gig-info">
                  <div className="gig-title">Pipe Leakage Repair</div>
                  <div className="gig-loc">📍 Vijayanagar, Mysuru — 1.2 km away</div>
                  <div className="gig-loc" style={{ marginTop: 2 }}>👤 Suresh Hegde (⭐4.7 employer)</div>
                </div>
              </div>
              <div className="gig-badges">
                <span className="badge urgent">🔴 Urgent</span>
                <span className="badge price">₹850–₹1,200</span>
                <span className="badge time">⏱ 2–3 hrs</span>
                <span className="demand-badge demand-high">🔥 High Demand</span>
              </div>
              <div style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginTop: 12 }}>
                "Bathroom pipe burst, water leaking — need someone ASAP. Materials available on site."
              </div>
              <div className="gig-actions">
                <button className="btn-accept" onClick={() => acceptGig('gig1')} disabled={acceptedGigs['gig1']}>
                  {acceptedGigs['gig1'] ? '✅ Accepted!' : '✅ Accept Gig'}
                </button>
                <button className="btn-decline">✗ Skip</button>
              </div>
            </div>

            {/* GIG 2 */}
            <div className={`gig-card ${acceptedGigs['gig2'] ? 'accepted' : ''}`}>
              <div className="gig-top">
                <div className="gig-icon-wrap" style={{ background: '#EEF9FF' }}>⚡</div>
                <div className="gig-info">
                  <div className="gig-title">Solar Panel Installation</div>
                  <div className="gig-loc">📍 Hebbal, Mysuru — 3.8 km away</div>
                  <div className="gig-loc" style={{ marginTop: 2 }}>👤 GreenTech Solar Pvt Ltd</div>
                </div>
              </div>
              <div className="gig-badges">
                <span className="badge price">₹2,000/day</span>
                <span className="badge time">⏱ 3 days</span>
                <span className="badge cat">Solar Tech</span>
                <span className="demand-badge demand-medium">📊 Medium Demand</span>
              </div>
              <div style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginTop: 12 }}>
                "Rooftop solar for residential complex. 3 installers needed, MNREGA + certified only."
              </div>
              <div className="gig-actions">
                <button className="btn-accept" onClick={() => acceptGig('gig2')} disabled={acceptedGigs['gig2']}>
                  {acceptedGigs['gig2'] ? '✅ Accepted!' : '✅ Accept Gig'}
                </button>
                <button className="btn-decline">✗ Skip</button>
              </div>
            </div>

            {/* GIG 3 */}
            <div className={`gig-card ${acceptedGigs['gig3'] ? 'accepted' : ''}`}>
              <div className="gig-top">
                <div className="gig-icon-wrap" style={{ background: '#F0FDF4' }}>🧱</div>
                <div className="gig-info">
                  <div className="gig-title">Compound Wall Construction</div>
                  <div className="gig-loc">📍 Bannimantap, Mysuru — 5.1 km away</div>
                  <div className="gig-loc" style={{ marginTop: 2 }}>👤 Kumar Constructions</div>
                </div>
              </div>
              <div className="gig-badges">
                <span className="badge price">₹600/day</span>
                <span className="badge time">⏱ 10 days</span>
                <span className="badge cat">Mason</span>
                <span className="demand-badge demand-low">🟢 Low Demand</span>
              </div>
              <div className="gig-actions">
                <button className="btn-accept" onClick={() => acceptGig('gig3')} disabled={acceptedGigs['gig3']}>
                  {acceptedGigs['gig3'] ? '✅ Accepted!' : '✅ Accept Gig'}
                </button>
                <button className="btn-decline">✗ Skip</button>
              </div>
            </div>
          </div>

          <div className="divider" style={{ margin: '16px 0' }}></div>
          
          <div className="section-title">📊 This Week</div>
          <div className="weekly-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 'var(--fs-page-title)', fontWeight: 800, color: 'var(--green)' }}>₹12,400</div><div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>Earned</div></div>
              <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 'var(--fs-page-title)', fontWeight: 800, color: 'var(--sky)' }}>7</div><div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>Gigs Done</div></div>
              <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 'var(--fs-page-title)', fontWeight: 800, color: 'var(--gold)' }}>4.9⭐</div><div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>Avg Rating</div></div>
            </div>
            <div className="top-performer-badge">
              🏆 <strong>Top Performer</strong> in Mysuru District this week! Keep it up!
            </div>
          </div>
        </div>
      </div>

      <BottomNav items={WORKER_NAV} activeIndex={0} onItemClick={handleNav} />
    </div>
  );
}
