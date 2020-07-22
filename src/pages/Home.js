import React, { useEffect, useState } from 'react';
import arrowDown from '../images/arrow-down.png';
import axios from 'axios';
import '../styles/Home.css';

function Home() {

  const [projectIsOpen, setProjectIsOpen] = useState(false);
  const [presentationIsOpen, setPresentationIsOpen] = useState(false);
  const [allProjects, setAllProjects] = useState([])

  const handleOpenPresentation = () => {
    setPresentationIsOpen(!presentationIsOpen)
  }

  const handleOpenProject = () => {
    setProjectIsOpen(!projectIsOpen)
  }

  useEffect (() => {
    axios.get('http://localhost:4000/projects/')
    .then(res => res.data)
    .then(data => {
      console.log(data)
      setAllProjects(data)
    })
  }, [])


  return (
    <>
      <div className='presentation'>
        <h1>AMELIE CHEVALIER</h1>
        <h2>Developpeuse Web</h2>
        <h2>ReactJS | NodeJS</h2>
      </div>
      <div className='projects-presentation' onClick={handleOpenProject}>
        <h1>Mes projets</h1>
        <span className={projectIsOpen ? 'project-arrow open-project' : 'project-arrow'} style={{ backgroundImage: `url(${arrowDown})` }} />
      </div>
      <div className='personnal-presentation' onClick={handleOpenPresentation}>
        <div className='presentation-title'>
          <h1>Qui suis-je ?</h1>
          <span className={presentationIsOpen ? 'presentation-arrow open-presentation' : 'presentation-arrow'} style={{ backgroundImage: `url(${arrowDown})` }} />
        </div>
        <div className={presentationIsOpen ? 'presentation-details shown' : 'presentation-details hidden'}>
          <h2>Ingénieure chimiste de formation</h2>
        </div>
      </div>
    </>
  )
}

export default Home;
