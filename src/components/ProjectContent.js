import React from "react";
import "../styles/ProjectContent.css";
import { Link } from 'react-router-dom';

export default function ProjecContent({ name, id, logo, presentation }) {
  console.log(name)
  console.log(logo)
  return (
    <div className="project-container">
      <h2>{name}</h2>
      <div className='image-container'>
        <img src={logo} alt="project-illustration" className="project-image" />
      </div>
      <p className="project-presentation">{presentation}</p>
      <Link to={`/project/${id}`} className='see-details'>Voir les détails du projet</Link>
    </div>
  );
}
