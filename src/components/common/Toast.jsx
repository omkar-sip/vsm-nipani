import { useToast } from '../../contexts/ToastContext';
import './Toast.css';

export default function Toast() {
  const { toast } = useToast();

  return (
    <div className={`toast ${toast.visible ? 'show' : ''}`}>
      {toast.message}
    </div>
  );
}
