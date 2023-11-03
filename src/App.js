import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Overview from './overview';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';
import ForgetPasswordForm from './ForgetPasswordForm';  // Import the new component
import CreateTripExpenses from './CreateTripExpenses';
import EditTripExpenses from './EditTripExpenses';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/edittripexpenses" element={<EditTripExpenses />} />
        <Route path="/createtripexpenses" element={<CreateTripExpenses />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />  {/* Add the new route */}
      </Routes>
    </Router>
  );
};

export default App;
