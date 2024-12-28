import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function GuestLayout() {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Provide this context to child components
  const requireAuth = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };
  
  return (
    <div className="guest-layout">
      <Header />
      <div className='h-screen'>
      <Outlet />
      </div>
    </div>
  );
}

export default GuestLayout;
