import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks';

import { ROUTES } from '@/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function AuthLayout() {
  const { isAuth } = useAuth();

  return (
    <div className="auth-layout">
      {!isAuth && (
        <Navigate
          to={{
            pathname: ROUTES.LOGIN_PATH,
          }}
        />
      )}
      {isAuth && (
        <div className="min-h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AuthLayout;
