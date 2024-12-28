import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginContainer from '@/container/Login';
import { signIn } from '@/services/authService';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/constants';

function LoginPage() {
  const { isAuth } = useAuth();
  const [loading, setLoading] = useState(false);

  if (isAuth) {
    return (<Navigate
      to={{
        pathname: ROUTES.DASHBOARD_PATH,
      }}
    />);
  };

  const onSubmit = async value => {
    setLoading(true);
    const { success } = await signIn(value);
    if (success) {
      window.location.href = ROUTES.DASHBOARD_PATH;
    }
    setLoading(false);
  };

  return (
    <LoginContainer
      onSubmit={onSubmit}
      isLoading={loading}
    />
  );
}

export default LoginPage;
