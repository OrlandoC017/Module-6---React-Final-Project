import React, { useEffect, useState, useContext } from "react";
import MovieIcon from '../Components/Movie-Icon'
import './Results.css'
import axios from "axios";
import { SearchContext } from "../App";
import { Link, useParams } from "react-router-dom";


export default function Results() {
  const { id } = useParams();
  const { keyword } = useContext(SearchContext)
  const [movies, setMovies] = useState([])

  async function fetchMovies(query) {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2d9420f2&s=${encodeURIComponent(query)}`);
    setMovies(data.Search || [])
  }

  useEffect(() => {
    const query = id || keyword;
    if (query && query.trim()) {
      fetchMovies(query);
      console.log(movies)
    }
  },[id, keyword])

  if (movies.length !== 0) 
  {return (
    <section id="results">
        <h1 className="results__header">Search Results For: {id || keyword}</h1>

        <div className="results__wrapper">
          {movies
            .slice(0, 6)
            .map((movie) => <MovieIcon
            id={movie.imdbID} 
            key={movie.imdbID}
            year={movie.Year} 
            poster={movie.Poster === "N/A"
            ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
            : movie.Poster} 
            title={movie.Title} />)}
            
        </div>
        

    </section>
  )}
  else {
    return (
      <section id="results">
        <h1 className="results__header">Can't find search results for "{id || keyword}"</h1>
        <img src="https://cdn.dribbble.com/userupload/2905341/file/original-e40e0ef8b2d32a9aaf5fcf21679966b4.png?resize=1024x768&vertical=center" alt="" className="no-results" />
      </section>
    )
  }
}
