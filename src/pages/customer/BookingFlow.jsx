import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import TopBar from '../../components/common/TopBar';
import './BookingFlow.css';

export default function BookingFlow() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [selections, setSelections] = useState({
    service: '🔧 Plumbing',
    issue: '🚽 Toilet / Drain Blocked',
    urgency: '🔴 Right Now! (ASAP)',
    budget: '₹500–1500',
  });

  const selectChoice = (group, value) => {
    setSelections(prev => ({ ...prev, [group]: value }));
  };

  const Choice = ({ group, value }) => (
    <button
      className={`qc-btn ${selections[group] === value ? 'sel' : ''}`}
      onClick={() => selectChoice(group, value)}
    >{value}</button>
  );

  const [selectedBudget, setSelectedBudget] = useState(1);

  return (
    <div className="screen active" id="booking-flow">
      <TopBar title="Book a Worker" showBack backTo="/customer" />
      <div className="scroll-content">
        {/* Step 1 */}
        <div className="booking-card">
          <h3>1️⃣ What service do you need?</h3>
          <div className="quick-choice">
            <Choice group="service" value="🔧 Plumbing" />
            <Choice group="service" value="⚡ Electrical" />
            <Choice group="service" value="🧱 Mason Work" />
            <Choice group="service" value="🪚 Carpentry" />
            <Choice group="service" value="🌞 Solar" />
            <Choice group="service" value="🎨 Painting" />
            <Choice group="service" value="🚿 Sanitation" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="booking-card">
          <h3>2️⃣ What is the issue?</h3>
          <div className="quick-choice">
            <Choice group="issue" value="💧 Leakage / Pipe Burst" />
            <Choice group="issue" value="🚽 Toilet / Drain Blocked" />
            <Choice group="issue" value="🚿 Tap / Faucet Repair" />
            <Choice group="issue" value="🏗️ New Installation" />
            <Choice group="issue" value="🔍 Inspection only" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="booking-card">
          <h3>3️⃣ How urgent is it?</h3>
          <div className="quick-choice">
            <Choice group="urgency" value="🔴 Right Now! (ASAP)" />
            <Choice group="urgency" value="🟡 Today" />
            <Choice group="urgency" value="🟢 This Week" />
            <Choice group="urgency" value="📅 Schedule" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="booking-card">
          <h3>4️⃣ What's your budget?</h3>
          <div className="price-range">
            {[{ val: '₹200–500', lab: 'Small Fix' }, { val: '₹500–1500', lab: 'Medium Job' }, { val: '₹1500+', lab: 'Big Project' }].map((opt, i) => (
              <div key={i} className={`price-opt ${selectedBudget === i ? 'sel' : ''}`} onClick={() => setSelectedBudget(i)}>
                <div className="po-val">{opt.val}</div>
                <div className="po-lab">{opt.lab}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: 'var(--text-muted)' }}>
            💡 Current market rate for Plumbing in Mysuru: <strong style={{ color: 'var(--saffron)' }}>₹480–750/hr</strong>
          </div>
        </div>

        {/* Step 5 */}
        <div className="booking-card">
          <h3>5️⃣ Your location</h3>
          <div className="location-detect" onClick={() => showToast('📍 Location detected: Vijayanagar, Mysuru')}>
            <div style={{ fontSize: 28 }}>📍</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Vijayanagar, Mysuru</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Tap to change location</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--sky)', fontWeight: 700 }}>Change</div>
          </div>
        </div>

        {/* Dynamic Price */}
        <div className="dynamic-price-card">
          <div style={{ fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Estimated Cost</span>
            <span style={{ color: 'var(--saffron)' }}>₹850 – ₹1,200</span>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>Based on demand · Medium urgency · 2–3 hrs work</div>
          <div className="price-demand-hint">
            🔥 Demand is high right now. Price may change in next 12 mins.
          </div>
        </div>

        <button className="submit-btn" style={{ margin: '0 16px', width: 'calc(100% - 32px)' }} onClick={() => navigate('/customer/matches')}>
          🔍 Find Matching Workers →
        </button>
        <div style={{ height: 16 }}></div>
      </div>
    </div>
  );
}
