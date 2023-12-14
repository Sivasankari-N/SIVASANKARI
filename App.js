import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password, 'Remember Me:', rememberMe);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-forgot-container">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <div className="forgot-password" onClick={handleForgotPassword}>
              <span>Forgot Password?</span>
            </div>
          </div>

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default App