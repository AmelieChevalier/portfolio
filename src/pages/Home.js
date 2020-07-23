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
              <p>Ingénieure chimiste de formation, je me suis reconvertie en developpment Web à la Wild Code School de Lyon.
              </p>
              <p>Après avoir obtenu mon diplôme d'ingénieur, j'ai travaillé quelques années dans le domaine pharmaceutique. Si le secteur me plaisait, mon métier ne m'épanouissait pas au quotidien. Le besoin de challenge m'a poussé à me reconvertir.</p>
              <p>Découvrir le développement web répond à ces besoins. Idéalement, j'aspire à combiner mes nouvelles compétences de developpeuse web et mon attrait pour le domaine de la santé.</p>
            </div>
            <div className='sub-section-presentation'>
            <h2>Compétences</h2>
            <h3>Hard skills</h3>
            <p>HTML - CSS - React.js - Node.js - mySQL - Git</p>
            <h3>Soft skills</h3>
            <p className='soft-skills'> Méthode Agile SCRUM - Rigueur - Détermination </p>
            <a href='https://www.linkedin.com/in/ameliechevalier/' target='_blank' rel='noopener noreferrer' className='linkedin'>Mon linkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
