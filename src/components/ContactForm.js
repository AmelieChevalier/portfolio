import React, { useState } from "react";
import { Link } from "react-router-dom";
import returnImage from "../images/return.png";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert("Votre message a bien été envoyé !");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-page">
      <Link
        to="/"
        className="retour-acceuil"
        style={{ backgroundImage: `url(${returnImage})` }}
      />
      <div className="contact-form-container">
        <h1>Me contacter</h1>
        <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-line">
            <label className="label" htmlFor="name">
              Votre nom :
            </label>
            <input
              className="form-input"
              type="text"
              name="name"
              minLength="3"
              maxLength="45"
              value={formData.name}
              placeholder="Entrez votre nom"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="input-line">
            <label className="label" htmlFor="email">
              Votre email :
            </label>
            <input
              className="form-input"
              type="text"
              name="email"
              minLength="3"
              maxLength="45"
              value={formData.email}
              placeholder="Entrez votre email"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="input-line">
            <label className="label" htmlFor="message">
              Votre nom :
            </label>
            <textarea
              className="form-input"
              type="text"
              name="message"
              minLength="3"
              maxLength="1000"
              value={formData.message}
              placeholder="Votre message..."
              onChange={(e) => handleChange(e)}
              required
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
