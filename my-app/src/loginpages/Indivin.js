import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './signin.css';
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function handleOnSubmit(e) {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:8000/indivisual", {
          email,
          password,
        });
  
        if (response.data.status === "exist") {
          localStorage.setItem("college",JSON.stringify(response));
          navigation("/home", { state: { id: email } });
        } else if (response.data.status === "notexist") {
          toast.error("Incorrect email or password", { position: toast.POSITION.TOP_CENTER });
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        // Handle the error, e.g., show an error message to the user
      }
    }
  
    return (
      <div className="something">
        <h1 className="college">Indivisual</h1>
        <div className="sign-in-container">
          <h2>Sign In</h2>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SignIn;
