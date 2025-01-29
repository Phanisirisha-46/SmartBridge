import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import { MdContactPhone } from "react-icons/md";
import { FaQuestionCircle } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='d-flex flex-wrap justify-content-around foot'>
      <ul className='footer nav fs-5 p-3'>
        <li className='footer nav-item'>
          <Link to="tel:+1234567890" className='nav-link text-white'>
            <MdContactPhone className='fs-4 text-black' /> Contact
          </Link>
        </li>

        <li className='footer nav-item'>
          <Link to="/faq" className='footer nav-link text-white'>
            <FaQuestionCircle className='fs-4 text-black' /> FAQ
          </Link>
        </li>

        <li className='footer nav-item'>
          <Link to="https://www.instagram.com/yourusername/" className=' footer nav-link text-white' target="_blank">
            <FaInstagram className='fs-4 text-black' /> Instagram
          </Link>
        </li>

        <li className='footer nav-item'>
          <Link to="https://www.linkedin.com/in/yourusername/" className=' footer nav-link text-white' target="_blank">
            <FaLinkedin className='fs-4 text-black' /> LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer;
