import React from 'react'
import "./Movie-Icon.css";
import { Link } from 'react-router-dom';

export default function MovieIcon({ key, poster, title, year}) {
  return (
    
        
    
    <Link to={`/profile/${key}`} className='movie__icon click'>
    <img src={poster} alt="" className="movie__icon--poster" />
        <span className="movie__name">{title} ({year})</span>

    </Link> 
  )
}

