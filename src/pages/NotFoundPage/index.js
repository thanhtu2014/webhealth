import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImage from '@/assets/images/not-found.svg';
import './index.scss';


function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="container">
        <img src={notFoundImage} alt="Not found" className="image" />
        <p>Oops! The page you are looking for does not exist.</p>
          <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
