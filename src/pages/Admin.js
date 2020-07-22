import React from 'react';
import { Link } from 'react-router-dom'

export default function Admin () {
  return (
    <>
    <Link to='/' className='retour'>Retour</Link>
    <div className='project-container'>
      <div className='add-projec'>
        <button>Ajouter un projet</button>
      </div>
    </div>
    </>
  )
}