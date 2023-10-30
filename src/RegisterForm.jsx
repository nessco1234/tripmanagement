import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        navigate('/login');  // Navigate to login page
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="abc">
      {error && <div className="error-popup">{error}</div>}
      <div className="container">
        <div className="register-container">
          <h1 className='heading'>Register</h1>
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
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleRegister}>Register</button>
            </div>

            <div className="text-center">
            <p>Already a member? <a href="#!" onClick={() => navigate('/')}>Login</a></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
