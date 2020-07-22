import React, { useEffect, useState } from 'react';
import arrowUp from '../images/arrow-up.png';
import '../styles/Home.css';

function Home() {

  const [projectIsOpen, setProjectIsOpen] = useState(false);
  const [presentationIsOpen, setPresentationIsOpen] = useState(false);

  const handleOpenPresentation = () => {
    setPresentationIsOpen(!presentationIsOpen)
  }

  const handleOpenProject = () => {
    setProjectIsOpen(!projectIsOpen)
  }

  return (
    <>
      <div className='presentation'>
        <h1>AMELIE CHEVALIER</h1>
        <h2>Developpeuse Web</h2>
        <h2>ReactJS | NodeJS</h2>
      </div>
      <div className='projects-presentation' onClick={handleOpenProject}>
        <h1>Mes projets</h1>
        <span className={projectIsOpen ? 'project-arrow open-project' : 'project-arrow'} style={{ backgroundImage: `url(${arrowUp})` }} />
      </div>
      <div className='personnal-presentation' onClick={handleOpenPresentation}>
        <h1>Qui suis-je ?</h1>
        <span className={presentationIsOpen ? 'presentation-arrow open-presentation' : 'presentation-arrow'} style={{ backgroundImage: `url(${arrowUp})` }} />
      </div>
    </>
  )
}

export default Home;
