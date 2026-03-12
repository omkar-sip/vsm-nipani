import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import BottomNav from '../../components/common/BottomNav';
import Modal from '../../components/common/Modal';
import TopBar from '../../components/common/TopBar';
import './EmployerHome.css';

const EMPLOYER_NAV = [
  { icon: '🏠', label: 'Home' },
  { icon: '➕', label: 'Post Job' },
  { icon: '👥', label: 'Workers' },
  { icon: '📊', label: 'Analytics' },
];

export default function EmployerHome() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [showPostJob, setShowPostJob] = useState(false);
  const [jobCategory, setJobCategory] = useState('🧱 Mason');
  const [workersNeeded, setWorkersNeeded] = useState('2–5');
  const [duration, setDuration] = useState('1 week');
  const [rateIdx, setRateIdx] = useState(1);

  const handleNav = (i, item) => {
    if (item.label === 'Post Job') setShowPostJob(true);
    else if (item.label === 'Workers') showToast('Applicant Tracking');
    else if (item.label === 'Analytics') showToast('Company Dashboard');
  };

  const postJob = () => {
    setShowPostJob(false);
    showToast('✅ Job posted! 12 workers notified');
  };

  const ChoiceBtn = ({ selected, value, onClick }) => (
    <button className={`qc-btn ${selected === value ? 'sel' : ''}`} onClick={() => onClick(value)}>{value}</button>
  );

  return (
    <div className="screen active" id="employer-home">
      {/* Top Bar */}
      <TopBar
        title="Employer Dashboard"
        showBack
        backTo="/role-select"
        leftContent={<div style={{ fontSize: 22, marginRight: 4 }}>🏢</div>}
        rightContent={
          <div className="topbar-notif" onClick={() => showToast('5 new applicants!')}>
            🔔<div className="notif-dot"></div>
          </div>
        }
      />

      {/* Emp Hero */}
      <div className="emp-hero">
        <div className="r-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2>Hello, Kumar Constructions</h2>
              <p>Find verified skilled workers across Karnataka</p>
            </div>
            <div className="topbar-avatar" style={{ background: 'rgba(255,255,255,0.2)' }}>KC</div>
          </div>
          <div className="emp-stats">
            <div className="emp-stat"><div className="v">12</div><div className="l">Active Posts</div></div>
            <div className="emp-stat"><div className="v">34</div><div className="l">Hired</div></div>
            <div className="emp-stat"><div className="v">4.6⭐</div><div className="l">As Employer</div></div>
          </div>
        </div>
      </div>

      <div className="scroll-content">
        <div className="r-container" style={{ paddingTop: '16px' }}>
          <button className="post-job-btn" style={{ margin: '0 0 24px 0', width: '100%', maxWidth: '400px' }} onClick={() => setShowPostJob(true)}>
            ➕ Post a New Job
          </button>

          <div className="section-title">
            <span>🔍 New Applicants for Your Post</span>
            <span className="see-all">All Posts</span>
          </div>

          <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '12px 16px', fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginBottom: '16px' }}>
            📋 <strong style={{ color: 'var(--text-main)' }}>Mason Work — Compound Wall</strong> · Bannimantap · ₹600/day
          </div>

          <div className="grid-auto">
            {/* Applicant 1 */}
            <div className="applicant-card">
              <div className="app-top">
                <div className="app-avatar">👷</div>
                <div className="app-info">
                  <div className="app-name">Ramesh Kumar</div>
                  <div className="app-loc">📍 1.2km · 🔧 Plumbing · 🧱 Masonry</div>
                  <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--sky)', marginTop: 4 }}>🛡️ KYC · MNREGA Verified · 127 jobs</div>
                </div>
                <div className="app-score">
                  <div className="score-val">87</div>
                  <div className="score-lab">Trust Score</div>
                </div>
              </div>
              <div className="app-actions">
                <button className="btn-hire" onClick={() => showToast('✅ Ramesh Kumar hired!')}>✅ Hire</button>
                <button className="btn-profile" onClick={() => navigate('/worker/profile')}>View Profile</button>
                <button className="btn-profile" style={{ fontSize: 16 }} onClick={() => showToast('💬 Chat opened')}>💬</button>
              </div>
            </div>

            {/* Applicant 2 */}
            <div className="applicant-card">
              <div className="app-top">
                <div className="app-avatar">👨‍🏭</div>
                <div className="app-info">
                  <div className="app-name">Venkatesh B.</div>
                  <div className="app-loc">📍 3.4km · 🧱 Expert Mason</div>
                  <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--sky)', marginTop: 4 }}>🛡️ KYC · PM Awas Certified · 89 jobs</div>
                </div>
                <div className="app-score">
                  <div className="score-val">79</div>
                  <div className="score-lab">Trust Score</div>
                </div>
              </div>
              <div className="app-actions">
                <button className="btn-hire" onClick={() => showToast('✅ Venkatesh B. hired!')}>✅ Hire</button>
                <button className="btn-profile" onClick={() => navigate('/worker/profile')}>View Profile</button>
                <button className="btn-profile" style={{ fontSize: 16 }} onClick={() => showToast('💬 Chat opened')}>💬</button>
              </div>
            </div>
          </div>

          <div className="divider" style={{ margin: '24px 0' }}></div>

          <div className="section-title">📊 Market Intelligence</div>
          <div className="pricing-banner" style={{ background: 'linear-gradient(135deg, #1A3A7A 0%, #1A73E8 100%)', borderRadius: 'var(--radius-card)', padding: 'var(--sp-card)', color: 'white' }}>
            <h4 style={{ fontSize: 'var(--fs-card-title)' }}>📈 Labour Market Today — Mysuru</h4>
            <p style={{ fontSize: 'var(--fs-small)', opacity: 0.85, marginTop: 4 }}>Live demand and pricing data to help you plan hiring</p>
            <div className="pricing-row" style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
              <div className="pricing-chip" style={{ flex: 1, minWidth: '90px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                <div className="pv" style={{ fontSize: 'var(--fs-card-title)', fontWeight: 800 }}>₹580</div><div className="pl" style={{ fontSize: 'var(--fs-caption)', opacity: 0.8 }}>Mason Avg/day</div>
              </div>
              <div className="pricing-chip" style={{ flex: 1, minWidth: '90px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                <div className="pv" style={{ fontSize: 'var(--fs-card-title)', fontWeight: 800 }}>+18%</div><div className="pl" style={{ fontSize: 'var(--fs-caption)', opacity: 0.8 }}>Demand vs last week</div>
              </div>
              <div className="pricing-chip" style={{ flex: 1, minWidth: '90px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                <div className="pv" style={{ fontSize: 'var(--fs-card-title)', fontWeight: 800 }}>247</div><div className="pl" style={{ fontSize: 'var(--fs-caption)', opacity: 0.8 }}>Workers Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav items={EMPLOYER_NAV} activeIndex={0} onItemClick={handleNav} />

      {/* Post Job Modal */}
      <Modal isOpen={showPostJob} onClose={() => setShowPostJob(false)} title="📋 Post a New Job">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>JOB CATEGORY</div>
            <div className="quick-choice">
              <ChoiceBtn selected={jobCategory} value="🧱 Mason" onClick={setJobCategory} />
              <ChoiceBtn selected={jobCategory} value="🔧 Plumber" onClick={setJobCategory} />
              <ChoiceBtn selected={jobCategory} value="⚡ Electrician" onClick={setJobCategory} />
              <ChoiceBtn selected={jobCategory} value="🪚 Carpenter" onClick={setJobCategory} />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>WORKERS NEEDED</div>
            <div className="quick-choice">
              <ChoiceBtn selected={workersNeeded} value="1" onClick={setWorkersNeeded} />
              <ChoiceBtn selected={workersNeeded} value="2–5" onClick={setWorkersNeeded} />
              <ChoiceBtn selected={workersNeeded} value="5–10" onClick={setWorkersNeeded} />
              <ChoiceBtn selected={workersNeeded} value="10+" onClick={setWorkersNeeded} />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>DURATION</div>
            <div className="quick-choice">
              <ChoiceBtn selected={duration} value="1 day" onClick={setDuration} />
              <ChoiceBtn selected={duration} value="1 week" onClick={setDuration} />
              <ChoiceBtn selected={duration} value="1 month" onClick={setDuration} />
              <ChoiceBtn selected={duration} value="Ongoing" onClick={setDuration} />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>DAILY RATE OFFERED</div>
            <div className="price-range">
              {[{ val: '₹400–600', lab: 'Budget' }, { val: '₹600–900', lab: 'Standard' }, { val: '₹900+', lab: 'Premium' }].map((opt, i) => (
                <div key={i} className={`price-opt ${rateIdx === i ? 'sel' : ''}`} onClick={() => setRateIdx(i)}>
                  <div className="po-val">{opt.val}</div>
                  <div className="po-lab">{opt.lab}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#FFF5EC', borderRadius: 12, padding: 12, fontSize: 13, color: 'var(--saffron)' }}>
            💡 Market rate for Masons in Mysuru: <strong>₹580–720/day</strong>. Workers prefer 1.15× boost.
          </div>
          <button className="submit-btn" onClick={postJob}>
            🚀 Post Job (Notify 247 Workers)
          </button>
        </div>
      </Modal>
    </div>
  );
}
