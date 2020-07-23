import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import binImage from '../images/bin.png';
import returnImage from '../images/return.png';
import addImage from '../images/add.png';
import '../styles/Admin.css'

export default function Admin () {

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/projects/")
      .then((res) => res.data)
      .then((data) => {
        setAllProjects(data.data);
      });
  }, []);


  const handleDeleteProject = (id) => {
    console.log(id)
    if(window.confirm('Etes-vous sûre de vouloir supprimer ce projet ?')){
      axios.delete(`http://localhost:4000/projects/${id}`)
    }
  }
  

  return (
    <div className='dashboard'>
    <Link to='/' className='retour-acceuil' style={{backgroundImage:`url(${returnImage})`}} />

    <div className='admin-project-container'>
      <h1>Gestion des projets</h1>
      <div className='projects-list'>
        <ul>
        {allProjects && allProjects.map((project) => {
        return (
          <div className='project-line' key={project.id}>
          <li><Link to={`/project/${project.id}`}>{project.name}</Link></li>
          <span className='bin' style={{backgroundImage:`url(${binImage})`}} onClick={() => {handleDeleteProject(project.id)}}/>
          </div>
        )
      })}
        </ul>
      </div>
        <Link to='/dashboard/add-project' className='add-project-line'>
          <p>Ajouter un nouveau projet</p>
          <span className='add-project' style={{backgroundImage:`url(${addImage})`}}/>
        </Link>
    </div>
    </div>
  )
}