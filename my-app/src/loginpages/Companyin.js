import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './signin.css';
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Company = () => {
  const navigation = useNavigate();
  const [Tin_no, setTin_no] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8000/company", {
        Tin_no,
        password,
      });

      if (response.data.status === "exist") {
        localStorage.setItem("college",JSON.stringify(response));
        navigation("/home", { state: { id: Tin_no } });
      } else if (response.data.status === "notexist") {
        toast.error("Incorrect Tin_no or password", { position: toast.POSITION.TOP_CENTER });
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("An error occurred during sign-in", { position: toast.POSITION.TOP_CENTER });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="something">
      <h1 className="college">Company</h1>
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="Tin_no">Tin no</label>
            <input
              type="text"
              id="Tin_no"
              name="Tin_no"
              value={Tin_no}
              onChange={(e) => setTin_no(e.target.value)}
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
          <button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <div className="social-icons">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Company;
