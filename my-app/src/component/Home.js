// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
  
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="explore-container">
        <Link to="/explore" className="explore-button">
          Explore
        </Link>
      </div>
      <br /><br /><br /><br /><br />
      {/* Fake Review Cards */}
      <div className="fake-reviews-container">
        <div className="fake-review-card">
          <h3>Review 1</h3>
          <p>This is a fake review. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="fake-review-card">
          <h3>Review 2</h3>
          <p>Another fake review. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="fake-review-card">
          <h3>Review 3</h3>
          <p>Yet another fake review. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        <div className="fake-review-card">
          <h3>Review 4</h3>
          <p>One more fake review. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="fake-review-card">
          <h3>Review 5</h3>
          <p>The last fake review. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
