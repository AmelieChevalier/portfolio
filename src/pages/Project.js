import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Project.css';

export default function Project (props) {

const [currentProject, setCurrentProject] = useState({})

const id = props.match.params.id

useEffect(() => {
  axios.get(`http://localhost:4000/projects/${id}`)
  .then(res => res.data)
  .then(data => {
    console.log(data)
    setCurrentProject(data.data)
  })
}, []) // eslint-disable-line

return (
  <div className='project-page'>
  <Link to='/' className='retour'>Retour</Link>
  {currentProject && (
  <div className='full-project-container'> 
    <h1>{currentProject.name}</h1>
    <img src={currentProject.image} alt="project-illustration" className="full-project-image" />
    <p>{currentProject.content}</p>
    <p>Durée : {currentProject.duration}</p>
    </div>
  )}
  </div>
)
}