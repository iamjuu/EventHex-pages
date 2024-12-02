import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Index = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      
      {/* Links to the different pages */}
      <nav>
        <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/reset">Reset</Link></li>
          <li><Link to="/otp">OTP</Link></li>
          <li><Link to="/reset-password">Reset Password</Link></li>
          <li><Link to="/login-page">Login Page</Link></li>
          <li><Link to="/login-purchase">Login Purchase</Link></li>
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/payment-complete">Payment Complete</Link></li>
          <li><Link to="/purchase-complete">Purchase Complete</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
