import { useNavigate, useLocation } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import './BottomNav.css';

export default function BottomNav({ items, activeIndex, onItemClick }) {
  const { isAboveTablet } = useMediaQuery();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (i, item) => {
    if (onItemClick) onItemClick(i, item);
  };

  // At laptop+ render as sidebar
  if (isAboveTablet) {
    return (
      <nav className="sidebar-nav" aria-label="Main navigation">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">🌾</span>
          <span className="sidebar-brand-text">DakshBharat</span>
        </div>
        <div className="sidebar-items">
          {items.map((item, i) => (
            <div
              key={i}
              className={`sidebar-item ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleClick(i, item)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-item" onClick={() => navigate('/role-select')}>
            <span className="sidebar-icon">↩️</span>
            <span className="sidebar-label">Switch Role</span>
          </div>
        </div>
      </nav>
    );
  }

  // Mobile/Tablet: bottom nav
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {items.map((item, i) => (
        <div
          key={i}
          className={`nav-item ${i === activeIndex ? 'active' : ''}`}
          onClick={() => handleClick(i, item)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
