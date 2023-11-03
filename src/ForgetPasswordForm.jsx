import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleForgetPassword = async () => {
    try {
      // Replace with your actual API call
      const response = await fetch('http://localhost:8000/api/forget-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        navigate('/login'); // Navigate back to login on success
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="container">
      {error && <div className="error-popup">{error}</div>}
      <div className="login-container"> {/* Assuming login-container has the styles you want */}
      <h1 className='heading' style={{ fontSize: '24.97px', textAlign: 'center', paddingBottom: '1rem' }}>Forget Password</h1>
        <form>
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              className="form-control" // Use form-control if this is the class you use for inputs
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="email" className="form-label">Email</label>
          </div>
          <div className="text-center">
            <button type="button" className="btn-primary" onClick={handleForgetPassword}>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;