import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountSetupPage from './pages/AccountSetupPage';
import HomeFeedPage from './pages/HomeFeedPage';
import UserProfilePage from './pages/UserProfilePage';
import MessagesPage from './pages/MessagesPage';
import PaymentsPage from './pages/PaymentsPage';
import CartAndOrdersPage from './pages/CartAndOrdersPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/account-setup" element={<AccountSetupPage />} />
          <Route path="/home" element={<HomeFeedPage />} />
          <Route path="/profile/:username" element={<UserProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/cart" element={<CartAndOrdersPage />} />
        </Routes>
      </div>
    </Router>
  );
}