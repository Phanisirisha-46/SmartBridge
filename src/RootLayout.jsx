import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import './RootLayout.css';

function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle redirection to login page
  const handleLoginClick = () => {
    navigate('/login'); // Assuming '/login' is the route to your login page
  };

  // Don't display the login button if the user is on the Home, Features, or any other tab
  const showLoginButton = location.pathname === "/";  // Only show on root path

  return (
    <div>
        <Header />
        
        {/* Render login button only on the root page */}
        {showLoginButton && (
          <div className="center-container">
            <button 
                className="login-button" 
                onClick={handleLoginClick}>
                Login/SigUp
            </button>
          </div>
        )}

        <div style={{minHeight: "73.5vh"}} className="container"> 
            <Outlet />
        </div>
        
        <Footer />
    </div>
  );
}

export default RootLayout;
