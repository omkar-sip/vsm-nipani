import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ToastProvider } from './contexts/ToastContext';
import Toast from './components/common/Toast';

// Pages
import SplashScreen from './pages/SplashScreen';
import RoleSelect from './pages/RoleSelect';
import WorkerHome from './pages/worker/WorkerHome';
import WorkerProfile from './pages/worker/WorkerProfile';
import CustomerHome from './pages/customer/CustomerHome';
import BookingFlow from './pages/customer/BookingFlow';
import WorkerMatches from './pages/customer/WorkerMatches';
import BookingConfirm from './pages/customer/BookingConfirm';
import ReviewScreen from './pages/customer/ReviewScreen';
import WorkerDetail from './pages/customer/WorkerDetail';
import EmployerHome from './pages/employer/EmployerHome';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <ToastProvider>
            <div className="app-shell">
              <Routes>
                {/* Entry */}
                <Route path="/" element={<SplashScreen />} />
                <Route path="/role-select" element={<RoleSelect />} />

                {/* Worker */}
                <Route path="/worker" element={<WorkerHome />} />
                <Route path="/worker/profile" element={<WorkerProfile />} />

                {/* Customer */}
                <Route path="/customer" element={<CustomerHome />} />
                <Route path="/customer/booking" element={<BookingFlow />} />
                <Route path="/customer/matches" element={<WorkerMatches />} />
                <Route path="/customer/booking-confirm" element={<BookingConfirm />} />
                <Route path="/customer/review" element={<ReviewScreen />} />
                <Route path="/customer/worker-detail" element={<WorkerDetail />} />

                {/* Employer */}
                <Route path="/employer" element={<EmployerHome />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Toast />
            </div>
          </ToastProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
