// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="login-container">
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
      <div className="explore-container">
        {/* Convert the button to a Link */}
        <Link to="/explore" className="explore-button">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
