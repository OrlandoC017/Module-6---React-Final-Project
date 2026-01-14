import React, { useEffect, useState, useContext } from "react";
import "./Movie_Profile.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import arrow from "../Assets/Arrow Back.svg"

export default function Movie_Profile() {
    const { id } = useParams();
    const [movie, setMovie] = useState([])
    const navigate = useNavigate();

  async function fetchMovie() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=2d9420f2&i=${id}`);
    setMovie(data)
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <section id="movie__profile">

      <button className="Nav__Link Back__btn" onClick={() => navigate(-1)}>
      <img src={arrow} alt="" className="Back__arrow--img" />
                  Back
                </button>
      
      <div className="profile__container">
        <h1 className="Movie__Title">{movie.Title}</h1>
    

      <div className="Movie__Wrapper">
        <div className="poster__wrapper">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie__poster"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
            }}
          />
        </div>

        <hr className="solid" />

        <div className="movie__info">
          <p>
            <b className="blue">Theatrical Release:</b> {movie.Released}
          </p>
          <p>
            <b className="blue">Rating:</b> {movie.Rated}
          </p>
          <p>
            <b className="blue">Runtime:</b> {movie.Runtime}
          </p>
          <p>
            <b className="blue">Genre:</b> {movie.Genre}
          </p>
          <p>
            <b className="blue">Director:</b> {movie.Director}
          </p>
          <p>
            <b className="blue">Actors:</b> {movie.Actors}
          </p>
         
          <p>
            <b className="blue">IMDB Rating:</b> {movie.imdbRating}
          </p>
          <p>
            <b className="blue">Plot:</b>{" "}
            <i>
              {movie.Plot}
            </i>
          </p>
        </div>
      </div>
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        className="Nav__Link IMDB__button"
        target="_blank"
      >
        IMDB
      </a>
    
      </div>
     </section> 
  );
}
