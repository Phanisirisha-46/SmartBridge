import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`cont ${isSignUp ? "sign-up-mode" : ""}`}>
      {/* Login Form */}
      <div className="form-container login">
        <h2>Login</h2>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <br/>
        <div className="forgot-pass">Forgot Password?</div><br/>
        <button className="submit">Login</button>
      </div>

      {/* Sign-Up Form */}
      <div className="form-container signup">
        <h2>Sign Up</h2>
        <label>
          Username
          <input type="text" placeholder="Enter your username" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <button className="submit">Sign Up</button>
      </div>

      {/* Right Section */}
      <div className="sub-cont">
        <div className="img__text">
          {isSignUp ? (
            <>
              <h3>Already have an account?</h3>
              <p>Login to continue exploring!</p>
            </>
          ) : (
            <>
              <h3>New here?</h3>
              <p>Sign up and join the community!</p>
            </>
          )}
          <button className="img__btn" onClick={toggleSignUp}>
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
