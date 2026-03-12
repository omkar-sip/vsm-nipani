import { useNavigate } from 'react-router-dom';
import './TopBar.css';

export default function TopBar({ title, showBack, backTo, rightContent, leftContent }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="topbar">
      {showBack && (
        <button className="topbar-back" onClick={handleBack} aria-label="Go back">
          ‹
        </button>
      )}
      {leftContent}
      <div className="topbar-title">{title}</div>
      {rightContent}
    </div>
  );
}
