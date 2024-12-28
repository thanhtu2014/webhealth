import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function GuestLayout() {
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
