import React, { useEffect, useState } from "react";
import ProjectContent from '../components/ProjectContent';
import axios from "axios";
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
      <div className="presentation">
        <h1>AMELIE CHEVALIER</h1>
        <h2>Developpeuse Web</h2>
        <h2>ReactJS | NodeJS</h2>
      </div>
      <div className="sections-container">
        <div className="projects-presentation">
          <div className="project-title">
            <h1>Mes projets</h1>
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
            <h1>Qui suis-je ?</h1>
          </div>
          <div className='presentation-details'>
            <h2>Ingénieure chimiste de formation</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
