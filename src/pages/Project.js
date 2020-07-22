import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Project.css';

export default function Project (props) {

const [currentProject, setCurrentProject] = useState({})

const id = props.match.params.id

console.log(currentProject.client)

useEffect(() => {
  axios.get(`http://localhost:4000/projects/${id}`)
  .then(res => res.data)
  .then(data => {
    console.log(data.data)
    setCurrentProject(data.data)
  })
}, []) // eslint-disable-line

return (
  <div className='project-page'>
  <Link to='/' className='retour'>Retour</Link>
  {(currentProject && currentProject.client) && (
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
        <p>Nom : {currentProject.client.name}</p>
        <p>Entreprise: {currentProject.client.company}</p>
        <a href={`${currentProject.client.website}`} target='_blank' rel='noopener noreferrer'>Site internet</a>
      </div>
    </div>
  </div>
  )}
  </div>
)
}