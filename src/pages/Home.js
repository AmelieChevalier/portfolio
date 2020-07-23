import React, { useEffect, useState } from "react";
import ProjectContent from '../components/ProjectContent';
import Header from '../components/Header';
import axios from "axios";
import backGroundImage from '../images/fond.jpg'
import "../styles/Home.css";

function Home() {

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/projects/")
      .then((res) => res.data)
      .then((data) => {
        setAllProjects(data.data);
      });
  }, []);

  return (
    <>
      <div className='home-header' style={{backgroundImage: `url(${backGroundImage})`}}>
      <Header />
      <div className="presentation">
        <h1>AMELIE CHEVALIER</h1>
        <h2>Developpeuse Web</h2>
        <h2>React JS | Node JS</h2>
      </div>
      </div>
      <div className="sections-container">
        <div className="projects-presentation">
          <div className="project-title">
            <h1>MES PROJETS</h1>
          </div>
          <div className='project-details'>
            {allProjects.length > 0 &&
              allProjects.map((project) => {
                return (
                <div key={project.id} >
                  <ProjectContent {...project}/>
                </div>
                )
              })}
          </div>
        </div>
        <div className="personnal-presentation">
          <div className="presentation-title">
            <h1>QUI SUIS-JE ?</h1>
          </div>
          <div className='presentation-details'>
            <div className='sub-section-presentation'>
              <h2 >Formation</h2>
              <p>Ingénieure chimiste de formation, je me suis reconvertie en developpment Web à la Wild Code School de Lyon</p>
            </div>
            <div className='sub-section-presentation'>
            <h2>Compétences</h2>
            <p>React.js | Node.js | mySQL | Git | Méthode Agile SCRUM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
