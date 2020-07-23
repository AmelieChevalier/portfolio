import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AddProject.css";
import returnImage from "../images/return.png";
import axios from "axios";

export default function AddProject() {
  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
    link: "",
    duration: "",
    presentation: "",
    client_name: "",
    logo: "",
    content: "",
    client_website: "",
    client_company: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/projects", newProject)
      .then((res) => {
        console.log(res);
        alert("Le projet a bien été posté");
      })
      .catch((err) => {
        alert("Projet non publié : le nom existe déjà !");
        console.warn(err);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewProject({ ...newProject, [name]: value });
  };

  return (
    <div className="new-project-page">
      <Link
        to="/dashboard"
        className="retour-acceuil"
        style={{ backgroundImage: `url(${returnImage})` }}
      />
      <div className='new-project-form-container'>
      <h1>Nouveau projet</h1>
      <form className="new-project-form" onSubmit={(e) => handleSubmit(e)}>
        <div className='input-line'>
          <label className="label" htmlFor="name">
            Nom du projet* : 
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            minLength="3"
            maxLength="45"
            value={newProject.name}
            placeholder="Ajouter un nom de projet"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="presentation">
            Courte présentation : 
          </label>
          <textarea
            className="form-input"
            type="text"
            name="presentation"
            maxLength="300"
            value={newProject.presentation}
            placeholder="Ajouter une courte présentation"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="duration">
            Durée : 
          </label>
          <input
            className="form-input"
            type="text"
            name="duration"
            maxLength="45"
            value={newProject.duration}
            placeholder="Ajouter la durée"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="logo">
            Logo : 
          </label>
          <input
            className="form-input"
            type="text"
            name="logo"
            maxLength="500"
            value={newProject.logo}
            placeholder="Ajouter un lien vers le logo"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="image">
            Image : 
          </label>
          <input
            className="form-input"
            type="text"
            name="image"
            maxLength="500"
            value={newProject.image}
            placeholder="Ajouter le lien vers une image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="content">
            Contenu détaillé : 
          </label>
          <textarea
            className="form-input"
            type="text"
            name="content"
            maxLength="1000"
            value={newProject.content}
            placeholder="Ajouter le détail"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="link">
            Lien vers le projet : 
          </label>
          <input
            className="form-input"
            type="text"
            name="link"
            maxLength="500"
            value={newProject.link}
            placeholder="Ajouter le lien vers le projet déployé"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="client_name">
            Nom du client : 
          </label>
          <input
            className="form-input"
            type="text"
            name="client_name"
            maxLength="45"
            value={newProject.client_name}
            placeholder="Ajouter le nom du client"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="client_company">
            Entreprise du client : 
          </label>
          <input
            className="form-input"
            type="text"
            name="client_company"
            maxLength="45"
            value={newProject.client_company}
            placeholder="Ajouter l'entreprise du client"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-line'>
          <label className="label" htmlFor="client_website">
            Lien vers son site web : 
          </label>
          <input
            className="form-input"
            type="text"
            name="client_website"
            maxLength="45"
            value={newProject.client_website}
            placeholder="Ajouter le lien vers le site web du client"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p>* champ obligatoire</p>
        <button type="submit" className="btn publish">
          Publier
        </button>
      </form>
      </div>
    </div>
  );
}
