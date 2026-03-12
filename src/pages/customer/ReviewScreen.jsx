import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import TopBar from '../../components/common/TopBar';
import './ReviewScreen.css';

export default function ReviewScreen() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [rating, setRating] = useState(4);
  const [selectedTags, setSelectedTags] = useState({ '👍 Quality Work': true, '⏰ On Time': true });

  const toggleTag = (tag) => {
    setSelectedTags(prev => ({ ...prev, [tag]: !prev[tag] }));
  };

  const submitReview = () => {
    showToast("⭐ Review submitted! Ramesh's score updated.");
    setTimeout(() => navigate('/customer'), 1200);
  };

  const tags = ['👍 Quality Work', '⏰ On Time', '💰 Fair Price', '🧹 Clean Work', '🤝 Professional', '🔄 Hire Again'];

  return (
    <div className="screen active" id="review-screen">
      <TopBar title="Rate & Review" showBack backTo="/customer/booking-confirm" />
      <div className="scroll-content">
        <div className="r-container">
          <div style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, background: '#FFF5EC', fontSize: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '3px solid var(--saffron)' }}>👷</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>Rate Ramesh Kumar</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Pipe Leakage Repair · ₹680</div>
          </div>

          <div className="review-section">
            <div style={{ textAlign: 'center', fontSize: 15, fontWeight: 700 }}>How was the service?</div>
            <div className="star-row">
              {[1,2,3,4,5].map(s => (
                <div key={s} className={`star-btn ${s <= rating ? 'lit' : ''}`} onClick={() => setRating(s)}>★</div>
              ))}
            </div>
            <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--saffron)', fontWeight: 700, minHeight: 20 }}>
              {rating === 5 && 'Excellent! 🏆'}
              {rating === 4 && 'Very Good 🙂'}
              {rating === 3 && 'Average 😐'}
              {rating === 2 && 'Poor 😟'}
              {rating === 1 && 'Terrible 😠'}
            </div>
          </div>

          <div className="review-section">
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Detailed Feedback (Optional)</div>
            <textarea 
              className="review-textarea" 
              placeholder="What did you like or dislike? (e.g., Arrived on time, cleaned up after work...)"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            
            <button className="add-photos-btn" onClick={() => showToast('📸 Opening camera...')}>
              📷 Add Photos / Voice Note
            </button>
          </div>

          <div className="review-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Add to Favorites</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Quick hire him next time</div>
            </div>
            <div style={{ fontSize: 24, color: 'var(--red)', cursor: 'pointer' }} onClick={() => showToast('❤️ Added to favorites!')}>
              🤍
            </div>
          </div>

          <button className="submit-btn" style={{ marginBottom: 24 }} onClick={handleSubmit}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
