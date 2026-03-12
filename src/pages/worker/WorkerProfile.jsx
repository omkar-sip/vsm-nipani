import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import TopBar from '../../components/common/TopBar';
import BottomNav from '../../components/common/BottomNav';
import './WorkerProfile.css';

const WORKER_NAV = [
  { icon: '🏠', label: 'Home' },
  { icon: '👤', label: 'Profile' },
  { icon: '📋', label: 'My Jobs' },
  { icon: '💰', label: 'Earnings' },
];

export default function WorkerProfile() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleNav = (i, item) => {
    if (item.label === 'Home') navigate('/worker/home');
    else if (item.label === 'My Jobs') showToast('My Jobs — 3 active');
    else if (item.label === 'Earnings') showToast('Earnings: ₹12,400 this week');
  };

  return (
    <div className="screen active" id="worker-profile">
      <TopBar 
        title="My Profile" 
        showBack 
        backTo="/worker/home"
        rightContent={<div style={{ fontSize: 20, cursor: 'pointer' }} onClick={() => showToast('⚙️ Settings opened')}>⚙️</div>}
      />
      
      <div className="scroll-content">
        <div className="profile-hero">
          <div className="r-container">
            <div className="profile-avatar-row">
              <div className="profile-avatar">
                RK
                <div className="kyc-badge">🛡️ KYC</div>
              </div>
              <div className="profile-meta">
                <h2>Ramesh Kumar</h2>
                <p>Mysuru, Karnataka · 42 yrs</p>
                <div className="profile-rating">
                  <div className="stars">★★★★★</div>
                  <div className="rating-val">4.8</div>
                  <div className="rating-count">(94 reviews)</div>
                </div>
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="pstat"><div className="v">127</div><div className="l">Jobs Done</div></div>
              <div className="pstat"><div className="v">5 Yrs</div><div className="l">Experience</div></div>
              <div className="pstat"><div className="v">100%</div><div className="l">Completion</div></div>
            </div>
          </div>
        </div>

        <div className="r-container" style={{ paddingBottom: '32px' }}>
          {/* Trust Score */}
          <div className="profile-section">
            <h3>Trust &amp; Verification Score</h3>
            <div className="trust-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontSize: 'var(--fs-page-title)', fontWeight: 800, color: 'var(--green)' }}>87<span style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>/100</span></div>
                <div style={{ fontSize: 'var(--fs-body)', fontWeight: 700, color: 'var(--green)' }}>Excellent 🏆</div>
              </div>
              <div className="trust-bars">
                <div>
                  <div className="trust-bar-row">
                    <span>Identity verified via Aadhar</span><span>25/25</span>
                  </div>
                  <div className="trust-bar-track"><div className="trust-bar-fill" style={{ width: '100%', background: 'var(--green)' }}></div></div>
                </div>
                <div>
                  <div className="trust-bar-row">
                    <span>Skills certified by PMKVY</span><span>20/20</span>
                  </div>
                  <div className="trust-bar-track"><div className="trust-bar-fill" style={{ width: '100%', background: 'var(--green)' }}></div></div>
                </div>
                <div>
                  <div className="trust-bar-row">
                    <span>Platform behavior (0 drops)</span><span>42/55</span>
                  </div>
                  <div className="trust-bar-track"><div className="trust-bar-fill" style={{ width: '76%', background: '#D97706' }}></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-auto">
            {/* Government Schemes / Verification */}
            <div className="profile-section">
              <h3>Verified Credentials</h3>
              <div className="scheme-chip">
                <div className="si">🇮🇳</div>
                <div><div className="sn">PMKVY Certified</div><div className="sd">Level 3 Plumber</div></div>
                <div className="sv">Verified ✓</div>
              </div>
              <div className="scheme-chip">
                <div className="si">👷</div>
                <div><div className="sn">E-Shram Registered</div><div className="sd">UAN: 4892 **** ****</div></div>
                <div className="sv">Verified ✓</div>
              </div>
            </div>

            {/* Skills */}
            <div className="profile-section" style={{ minWidth: 'min-content' }}>
              <h3>Specializations</h3>
              <div className="skill-chips">
                <div className="skill-chip">🔧 Plumbing <span className="level">Expert</span></div>
                <div className="skill-chip">💧 Sanitation <span className="level">Expert</span></div>
                <div className="skill-chip">🧱 Basic Masonry <span className="level">Intermediate</span></div>
                <div className="skill-chip">⚡ Solar Water Heaters <span className="level">Beginner</span></div>
              </div>
            </div>
          </div>

          {/* Work Portfolio & Reviews */}
          <div className="profile-section">
            <h3 style={{ marginTop: '16px' }}>Recent Work &amp; Reviews</h3>
            <div className="grid-auto">
              <div className="work-card">
                <div className="work-card-top">
                  <div>
                    <h4>Commercial Bathroom Fitting</h4>
                    <div className="employer">For: TechSpark Offices</div>
                  </div>
                  <div className="date">Oct 2023</div>
                </div>
                <div className="work-media">
                  <div className="media-thumb">🚿</div>
                  <div className="media-thumb">🚰</div>
                  <div className="media-thumb">📸</div>
                </div>
                <div className="testimonial">
                  <div className="quote">"Fast, clean work on 4 bathrooms. No leakage, very professional approach."</div>
                  <div className="by">— Santosh K. (Project Manager)</div>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-top">
                  <div>
                    <h4>Water Tank Repair (Residential)</h4>
                    <div className="employer">For: Homeowner (Verified)</div>
                  </div>
                  <div className="date">Sep 2023</div>
                </div>
                <div className="testimonial">
                  <div className="quote">"Came exactly on time and fixed the overhead tank leakage within 2 hours. Reasonable price."</div>
                  <div className="by">— Anita R. (Mysuru)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav items={WORKER_NAV} activeIndex={1} onItemClick={handleNav} />
    </div>
  );
}
