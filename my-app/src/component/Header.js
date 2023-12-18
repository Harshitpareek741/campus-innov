import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logoimage from './images/logosih.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    toast.success('Successfully logged out!', { position: toast.POSITION.TOP_CENTER });
    localStorage.clear();
    navigate('/college');
    setAuth(false);
  };

  const localStorageAuth = localStorage.getItem('college');
  const [auth, setAuth] = React.useState(localStorageAuth ? true : false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" data-bs-theme="light">
        <div className="container-fluid">
      
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
            <ul className="navbar-nav ml-auto"> {/* This is added for the login button */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              {auth && (
                <li className="nav-item">
                  <Link className="nav-link" onClick={logout} to="/login">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
