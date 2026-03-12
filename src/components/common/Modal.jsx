import './Modal.css';

export default function Modal({ id, isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-handle"></div>
        {title && <div className="modal-title">{title}</div>}
        {children}
      </div>
    </div>
  );
}
