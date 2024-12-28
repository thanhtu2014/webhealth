import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks';

import { ROUTES } from '@/constants';

function AuthLayout() {
  const { isAuth } = useAuth();

  return (
    <div className="auth-layout">
      {!isAuth &&
        <Navigate
          to={{
            pathname: ROUTES.LOGIN_PATH,
          }}
        />}
      {isAuth &&
        <div className="auth-layout">
          <div className="auth-layout__content">
            <div className="main-content">
            <Outlet />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default AuthLayout;
