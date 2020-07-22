import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    axios.delete(`http://localhost:4000/projects/${id}`)
  }
  

  return (
    <>
    <Link to='/' className='retour'>Retour</Link>

    <div className='project-container'>
    <div className='projectss-list'>
      <ul>
      {allProjects && allProjects.map((project) => {
      return (
        <li key={project.id}>{project.name}<span onClick={() => {handleDeleteProject(project.id)}}>Supprimer</span></li>  
      )
    })}
      </ul>
    </div>
    </div>
    </>
  )
}