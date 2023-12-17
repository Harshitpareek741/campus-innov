import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a separate CSS file
import logoimage from './images/logosih.png'

export default class Header extends Component {
  render() {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logoimage} alt="Custom Logo" className="custom-logo" /> 
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/business">
                    Emergency
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Text 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Text 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Text 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item about-link">
                  <Link className="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
