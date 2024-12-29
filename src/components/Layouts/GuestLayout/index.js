import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Footer from '@/components/Footer';

function GuestLayout() {
  // const [showLoginModal, setShowLoginModal] = React.useState(false);
  // const isAuthenticated = useSelector((state) => state.reducer);

  // // Provide this context to child components
  // const requireAuth = () => {
  //   if (!isAuthenticated) {
  //     setShowLoginModal(true);
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default GuestLayout;
