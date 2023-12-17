// UserTypeSelection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserTypeSelection.css';

const UserTypeSelection = () => {
  return (
    <div className="user-type-container">
      <h1>Select Your User Type</h1>
      <div className="options-container">
        <Link to="/college" className="user-type-option college-button">
          College/University
        </Link>
        <Link to="/individualup" className="user-type-option individual-button">
          Individual
        </Link>
        <Link to="/company" className="user-type-option company-button">
          Company
        </Link>
      </div>
    </div>
  );
};

export default UserTypeSelection;
