import React from 'react'
import "./Movie-Icon.css";

export default function MovieIcon() {
  return (
    <button className="movie__icon click">
        <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" alt="" className="movie__icon--poster" />
        <span className="movie__name">Avengers: Infinity War (2018)</span>
    </button> 
  )
}

