import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './RoleSelect.css';

export default function RoleSelect() {
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const goRole = (role) => {
    setRole(role);
    if (role === 'worker') navigate('/worker/home');
    else if (role === 'employer') navigate('/employer/home');
    else navigate('/customer/home');
  };

  return (
    <div className="screen active" id="role-select">
      <div className="rs-desktop-bg"></div>
      <div className="rs-content-wrapper">
        <div className="role-header">
          <div className="role-brand">🌾 DakshBharat</div>
          <h1 className="role-title">Who are you?</h1>
          <p className="role-sub">आप कौन हैं? / ನೀವು ಯಾರು?</p>
          <div className="role-prompt">Select your profile to continue to your customized workspace.</div>
        </div>
        
        <div className="role-cards grid-auto">
          <div className="role-card worker" onClick={() => goRole('worker')}>
            <div className="role-icon">👷</div>
            <div className="role-info">
              <h3>I am a Worker</h3>
              <p>Plumber, Mason, Electrician, Carpenter &amp; more — Find jobs near you and track local demand.</p>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card employer" onClick={() => goRole('employer')}>
            <div className="role-icon">🏢</div>
            <div className="role-info">
              <h3>I am an Employer / Firm</h3>
              <p>Construction, factories, contractors — Find and hire verified skilled labour in bulk.</p>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card customer" onClick={() => goRole('customer')}>
            <div className="role-icon">🏠</div>
            <div className="role-info">
              <h3>I need a Service</h3>
              <p>Home repair, plumbing, wiring, cleaning — Book a trusted local worker immediately.</p>
            </div>
            <div className="role-arrow">→</div>
          </div>
        </div>

        <div className="role-footer">
          🔒 Govt. KYC Verified Workers · All India Coverage · Multilingual Support
        </div>
      </div>
    </div>
  );
}
