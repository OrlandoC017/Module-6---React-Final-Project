import React from 'react'
import "./Movie-Icon.css";
import { Link } from 'react-router-dom';

export default function MovieIcon({ id, poster, title, year}) {
  return (
    
        
    
    <Link to={`/profile/${id}`} className='movie__icon click'>
    <img 
    src={poster} 
    alt={title} 
    className="movie__icon--poster"
    onError= {(e) => {
      e.currentTarget.onerror=null;
      e.currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
    } />
        <span className="movie__name">{title} ({year})</span>

    </Link> 
  )
}

