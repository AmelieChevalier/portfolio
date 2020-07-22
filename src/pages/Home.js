import React, { useEffect, useState } from 'react';
import arrowUp from '../images/arrow-up.png';
import arrowDown from '../images/arrow-down.png';
import '../styles/Home.css';

function Home() {

  const [presentationIsOpen, setPresentationIsOpen] = useState(false);
  const [projectIsOpen, setProjectIsOpen] = useState(false);

  return (
    <>
      <div className='presentation'>
        <h1>AMELIE CHEVALIER</h1>
        <h2>Developpeuse Web</h2>
        <h2>ReactJS | NodeJS</h2>
      </div>
      <div className='personnal-presentation'>
        <h1>Qui suis-je ?</h1>
        <span className='open-presentation' style={{ backgroundImage: !presentationIsOpen ? `url(${arrowDown})` :  `url(${arrowUp})` }} />
      </div>
      <div className='projects-presentation'>
        <h1>Mes projets</h1>
        <span className='open-project' style={{ backgroundImage: !projectIsOpen ? `url(${arrowDown})` :  `url(${arrowUp})` }} />
      </div>
    </>
  )
}

export default Home;
