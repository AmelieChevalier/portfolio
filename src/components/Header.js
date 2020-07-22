import React from 'react';
import adminImage from '../images/admin.png';
import '../styles/Header.css';

export default function Header () {
  return (
    <div className='header'>
      <div className='picto-admin' style={{backgroundImage: `url(${adminImage})`}}/>
    </div>
  ) 
}