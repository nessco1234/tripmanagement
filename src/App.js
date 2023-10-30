import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
// import Overview from './overview';
import RegisterForm from './RegisterForm';
import ForgotPassword from './ForgotPassword';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Overview />} /> */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registerform" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
