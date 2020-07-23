import React from 'react';
import adminImage from '../images/admin.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className='header-container'>
      <div className='contact'>
        <Link to='/contact'><p>Me contacter</p></Link>
      </div>
      <Link to='/dashboard' className='header'>
        <div className='picto-admin' style={{backgroundImage: `url(${adminImage})`}}/>
      </Link>
    </div>
  ) 
}