import React from 'react';
// import { useDispatch } from 'react-redux';

// import { useAuth } from '@/hooks';
// import { logout } from '@/store/auth/authSlice';

function HomePage() {
  // const dispatch = useDispatch();
  // const { isAuth } = useAuth();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="home-page">
      <div className="container">
      <p className="intro__title">
            Home
          </p>
          <p className="intro__description">
            Home
          </p>
      </div>
    </div>
  );
}

export default HomePage;
