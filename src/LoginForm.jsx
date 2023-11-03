// import React from 'react';
import './LoginForm.css';
// import { Link } from 'react-router-dom';
// import ForgetPassword from './ForgetPassword';

// const LoginForm = () => {
//   return (
//     <div className='abc'>
//     <div className="container">
//       <div className="login-container">
//         <h1 className='heading'>Login</h1>
//         <form>
//         <div className="form-group">
//             <input type="text" id="employeeid" className="form-control" required />
//             <label htmlFor="employeeid" className="form-label">Employee Id</label>
//           </div>
//           <div className="form-group">
//             <input type="password" id="password" className="form-control" required />
//             <label htmlFor="password" className="form-label">Password</label>
//           </div>
//           <div className="row mb-4">
//             <div className="col d-flex justify-content-center">
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="form2Example31" defaultChecked />
//                 <label className="form-check-label" htmlFor="form2Example31">Remember me</label>
//               </div>
//             </div>
//             <div className="col">
//             <a href="#!">ForgetPassword</a>
//             </div>
//           </div>
//           <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
//           <div className="text-center">
//             <p>Not a member? <a href="#!">Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId, password }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        navigate('/home');
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
        <div className="login-container">
        <h1 className='heading'>Login</h1>

          <form>
            <div className="form-group">
              <input 
                type="text" 
                id="employeeid" 
                className="form-control" 
                required 
                value={employeeId} 
                onChange={(e) => setEmployeeId(e.target.value)} 
              />
              <label htmlFor="employeeid" className="form-label">Employee Id</label>
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
            <div className="row mb-4">
            <div className="col d-flex justify-content-start">  {/* Aligned to start */}
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="form2Example31" 
                  defaultChecked 
                />
                <label className="form-check-label small-text" htmlFor="form2Example31">Remember me</label>
              </div>
            </div>
            <div className="col d-flex justify-content-end">  {/* Aligned to end */}
              <a className="small-text" href=" " onClick={() => navigate('/forget-password')}>Forget Password</a>
            </div>
          </div>

            <div class="text-center">
            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin} >Sign in</button>
            </div>
            <div className="text-center">
            <p className="small-text">Not a member? <a href=" " onClick={() => navigate('/registerForm')}>Register</a></p>
          </div>

          </form>
        </div>
      </div>
    </div>
  );
  };  
export default LoginForm;
