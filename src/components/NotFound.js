import React from 'react';
import './NotFound.css'; 

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found.</p>
        <p className="not-found-description">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button className="not-found-button" onClick={() => window.location.href = '/'}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
