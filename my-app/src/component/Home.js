// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './home.css';


const Home = () => {
   
  return (
    <div className="home-container" >
      <div className="login-container">
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
      <div className="explore-container">
        <button className="explore-button">Explore</button>
      </div>
    </div>
  );
};

export default Home;
