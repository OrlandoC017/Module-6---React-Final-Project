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
  const [loading, setLoading] = useState(false)

  async function fetchMovies(query) {
    setLoading(true)
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2d9420f2&s=${encodeURIComponent(query)}`);
    setMovies(data.Search || [])
    setLoading(false)
  }

  function filterMovies(filter) {
    console.log(filter)
    if (filter === 'NEWEST_FIRST') {
      setMovies(movies.slice(0, 6).sort((a, b) => (b.Year) - (a.Year)))  
    }
    if (filter === 'OLDEST_FIRST') {
      setMovies(movies.slice(0, 6).sort((a, b) => (a.Year) - (b.Year)))  
    }

    if (filter === 'A_TO_Z') {
      setMovies(movies.slice(0, 6). sort((a, b) => (a.Title || '').localeCompare(b.Title || ''))); 
    }
    if (filter === 'Z_TO_A') {
      setMovies(movies.slice(0, 6). sort((a, b) => (b.Title || '').localeCompare(a.Title || ''))); 
    }
  }

    


  useEffect(() => {
    const query = id || keyword;
    if (query && query.trim()) {

      setTimeout(() => {
      fetchMovies(query);
      console.log(movies);
      }, 500)


      
    }
  }, [id, keyword])

  if (loading) {
    return (
      <section id="results">
        <h1 className="results__header">Fetching results for "{id || keyword}"</h1>
      </section>
    );
  }

  if (movies.length !== 0) {
    return (
    <section id="results">

      <div className="filter__row">
        <select name="" id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="NEWEST_FIRST">Newest First</option>
                <option value="OLDEST_FIRST">Oldest</option>
                
                <option value="A_TO_Z">Alphabetical</option>
                <option value="Z_TO_A">Reverse Alphabetical</option>
              </select>
      </div>
      
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
    );
  } else {
    return (
      <section id="results">
        <h1 className="results__header">Can't find search results for "{id || keyword}"</h1>
        <img src="https://cdn.dribbble.com/userupload/2905341/file/original-e40e0ef8b2d32a9aaf5fcf21679966b4.png?resize=1024x768&vertical=center" alt="" className="no-results" />
      </section>
    );
  }
}
