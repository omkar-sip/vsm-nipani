import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './RoleSelect.css';

export default function RoleSelect() {
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const goRole = (role) => {
    setRole(role);
    if (role === 'worker') navigate('/worker');
    else if (role === 'employer') navigate('/employer');
    else navigate('/customer');
  };

  return (
    <div className="screen active" id="role-select">
      <div className="role-gradient-header">
        <div className="role-gradient-title">Who are you?</div>
        <div className="role-gradient-sub">आप कौन हैं? / ನೀವು ಯಾರು?</div>
      </div>
      <div className="role-cards grid-auto">
        <div className="role-card worker" onClick={() => goRole('worker')}>
          <div className="role-icon">👷</div>
          <div className="role-info">
            <h3>I am a Worker</h3>
            <p>Plumber, Mason, Electrician, Carpenter &amp; more — Find gigs near you</p>
          </div>
          <div className="role-arrow">›</div>
        </div>
        <div className="role-card employer" onClick={() => goRole('employer')}>
          <div className="role-icon">🏢</div>
          <div className="role-info">
            <h3>I am an Employer / Firm</h3>
            <p>Construction, factories, NGOs — Search verified skilled labour</p>
          </div>
          <div className="role-arrow">›</div>
        </div>
        <div className="role-card customer" onClick={() => goRole('customer')}>
          <div className="role-icon">🏠</div>
          <div className="role-info">
            <h3>I need a Service</h3>
            <p>Home repair, plumbing, wiring — Book a trusted worker now</p>
          </div>
          <div className="role-arrow">›</div>
        </div>
      </div>
      <div className="role-footer">
        🔒 KYC Verified · All India Coverage · 3 Languages
      </div>
    </div>
  );
}
