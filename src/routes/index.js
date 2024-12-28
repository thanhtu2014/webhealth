import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout, GuestLayout } from '@/components/Layouts';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { ROUTES } from '@/constants';
import HomePage from '@/pages/HomePage';

function Routing() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route
          path={ROUTES.ROOT_PATH}
          element={<Navigate to={ROUTES.DASHBOARD_PATH} />}
        />
        <Route path={ROUTES.LOGIN_PATH} element={<LoginPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.DASHBOARD_PATH} element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
