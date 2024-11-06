import React from 'react';
import './Login.css'; // Create a CSS file for styling

function Login() {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo"></div>
        <h1>BASE</h1>
        <div className="social-icons">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-discord"></i></a>
        </div>
      </div>
      <div className="right-panel">
       <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="button-container">
          <button className="google-sign-in">Sign in with Google</button>
          <button className="apple-sign-in">Sign in with Apple</button>
        </div>
        <form>
          <label>Email address</label>
          <input type="email" placeholder="johndoe@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button  className="sign-in-button"><a href='/dashboard'> Sign In </a></button>
        </form>
        <p className="register-text">Don't have an account? <a href="/signup">Register here</a></p>
      </div>
    </div>
  );
}

export default Login;
