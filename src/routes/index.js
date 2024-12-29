import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout, GuestLayout } from '@/components/Layouts';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { ROUTES } from '@/constants';
import HomePage from '@/pages/HomePage';
import MyRecord from '@/pages/MyRecord';
import MyColumn from '@/pages/Column';

function Routing() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path={ROUTES.ROOT_PATH} element={<HomePage />} />
        <Route path={ROUTES.LOGIN_PATH} element={<LoginPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.DASHBOARD_PATH} element={<HomePage />} />
        <Route path={ROUTES.RECORD_PATH} element={<MyRecord />} />
        <Route path={ROUTES.COLUMN_PATH} element={<MyColumn />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
