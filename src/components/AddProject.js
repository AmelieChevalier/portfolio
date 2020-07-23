import React, { useState, useeffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddProject.css';
import returnImage from '../images/return.png';
import axios from 'axios';

export default function AddProject() {

  const [newProject, setNewProject] = useState({
    name: 'test publication',
    image :'',
    link: '',
    duration: '',
    presentation : '',
    client_name : '',
    logo: '',
    content : '',
    client_website : '',
    client_company: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/projects', (newProject))
      .then(res => console.log('projet posté'))
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className='new-project-page'>
      <Link to='/dashboard' className='retour-acceuil' style={{backgroundImage:`url(${returnImage})`}} />
    <h1>Nouveau projet</h1>
    <form className='new-project-form' onSubmit={(e) => handleSubmit(e)}>
    <button type='submit' className='btn publish'>Publier</button>
    </form>
    </div>
  )
}