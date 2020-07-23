import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import adminImageBlack from '../images/adminBlack.png';
import axios from 'axios';
import '../styles/Project.css';

export default function Project (props) {

const [currentProject, setCurrentProject] = useState({})

const id = props.match.params.id


useEffect(() => {
  axios.get(`http://localhost:4000/projects/${id}`)
  .then(res => res.data)
  .then(data => {
    setCurrentProject(data.data)
  })
}, []) // eslint-disable-line

return (
  <div className='project-page'>
      <div className='header-container-project'>
      <div className='contact-project'>
        <p>Me contacter</p>
      </div>
      <Link to='/dashboard' className='header-project'>
        <div className='picto-admin' style={{backgroundImage: `url(${adminImageBlack})`}}/>
      </Link>
    </div>
  <Link to='/' className='retour'>Retour</Link>
  {(currentProject ) && (
  <div className='full-project-container'> 
    <h1>{currentProject.name}</h1>
    <img src={currentProject.image} alt="project-illustration" className="full-project-image" />
    <div className='sections-project'>
      <div className='full-presentation sub-section-project'>
        <h2>Présentation du projet</h2>
        <p>{currentProject.content}</p>
        <p>Durée : {currentProject.duration}</p>
        <a href={`${currentProject.link}`} target='_blank' rel='noopener noreferrer'>Lien</a>
      </div>
      <div className='client-details sub-section-project'>
        <h2>Client</h2>
        <p>Nom : {currentProject.client_name}</p>
        <p>Entreprise: {currentProject.client_company}</p>
        <a href={`${currentProject.client_website}`} target='_blank' rel='noopener noreferrer'>Site internet</a>
      </div>
    </div>
  </div>
  )}
  </div>
)
}