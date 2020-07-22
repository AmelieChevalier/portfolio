import React from 'react';
import adminImage from '../images/admin.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className='header-container'>
      <div className='contact'>
        <p>Me contacter</p>
      </div>
      <Link to='/dashboard' className='header'>
        <div className='picto-admin' style={{backgroundImage: `url(${adminImage})`}}/>
      </Link>
    </div>
  ) 
}