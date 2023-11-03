import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Your email validation logic here
    return email.includes("@");
  };

  const validatePassword = (password) => {
    // Your password validation logic here
    return password.length >= 8;
  };

  const handleRegister = async () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      setError('Invalid email or password');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/register/', { username, email, password });
      const data = response.data;
  
      if (data.status === 'success') {
        navigate('/login');  // Navigate to login page
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error("Error:", error);
  
      if (error.response) {
        if (error.response.status === 400) {
          setError('Bad request. Please check the form fields.');
        } else if (error.response.status === 405) {
          setError('Method not allowed. Please check the API endpoint.');
        } else {
          setError(`An error occurred: ${error.response.statusText}`);
        }
      } else if (error.request) {
        setError('No response received. Please check the server.');
      } else {
        setError(`An error occurred: ${error.message}`);
      }
    }
  };
  
  

  return (
    <div className="abc">
      {error && <div className="error-popup">{error}</div>}
      <div className="container">
        <div className="register-container">
          <h1 className='heading' style={{ fontSize: '35px', textAlign: 'center', paddingBottom: '1rem' }}>Register</h1>
          <form>
          <div className="form-group">
              <input 
                type="text" 
                id="username" 
                className="form-control" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <label htmlFor="username" className="form-label">Username</label>
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <label htmlFor="email" className="form-label">Email</label>
            </div>
            <div className="form-group">
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <label htmlFor="password" className="form-label">Password</label>
            </div>
            <div className="text-center" style={{ fontSize: '40px', textAlign: 'center', paddingBottom: '1rem' , paddingTop: '1rem'}} >
              <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleRegister}>Register</button>
            </div>
            <div className="text-center">
              <p className="small-text">Already a member? <a href=" " onClick={() => navigate('/')}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
