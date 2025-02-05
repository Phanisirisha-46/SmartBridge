import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome } from "react-icons/fa";
import { TiHome } from 'react-icons/ti'; 
import { FaQuestionCircle } from 'react-icons/fa'; // About Us icon
import { IoMdBook } from 'react-icons/io'; // Steps icon
import { FaUserTie } from 'react-icons/fa'; // Mentors icon
import { FaUserAlt } from 'react-icons/fa'; // Profile icon
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="logo" className="logo-image" />
      <h1 className='text-white'><strong>SmartBridge</strong></h1> 
      <ul className='nav fs-5 p-3'>
      <li>
          <Link to="/home" className='nav-link text-white'>
            <FaHome className='fs-5 text-dark' />  Home
          </Link>
        </li>
        <li>
  <a 
    href="#features" 
    className='nav-link text-white' 
    onClick={(e) => {
      e.preventDefault(); // Prevent default jump behavior
      document.getElementById("features").scrollIntoView({ behavior: "smooth" });
    }}
  >
    <TiHome className='fs-5 text-dark' /> Features
  </a>
</li>

        <li className='nav-item'>
          <Link to="/aboutus" className='nav-link text-white' >
            <FaQuestionCircle className='fs-4 text-black' /> AboutUs
          </Link>
        </li>
        <li>
  <a 
    href="#steps" 
    className='nav-link text-white' 
    onClick={(e) => {
      e.preventDefault(); // Prevent default jump behavior
      document.getElementById("steps").scrollIntoView({ behavior: "smooth" });
    }}
  >
    <IoMdBook className='fs-5 text-dark' /> Steps
  </a>
</li>

        <li className='nav-item'>
          <Link to="/mentors" className='nav-link text-white'>
            <FaUserTie className='fs-4 text-black' /> Mentors
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/profile" className='nav-link text-white'>
            <FaUserAlt className='fs-5 text-black' /> Profile
          </Link>
        </li>
      </ul>
      <div className="login-btn-container">
      </div>
    </div>
  );
}

export default Header;
