import React from 'react'
import "./Movie-Icon.css";
import { Link } from 'react-router-dom';

export default function MovieIcon({ key, poster, title }) {
  return (
    
        
    
    <Link to='/profile' className='movie__icon click'>
    <img src={poster} alt="" className="movie__icon--poster" />
        <span className="movie__name">{title} (2018)</span>

    </Link> 
  )
}

