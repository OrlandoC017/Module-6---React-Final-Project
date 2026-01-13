import React, { useEffect, useState } from "react";
import MovieIcon from '../Components/Movie-Icon'
import './Results.css'
import axios from "axios";
import { SearchContext } from "../App";


export default function Results() {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2d9420f2&s=cars`);
    setMovies(data.Search || [])
  }

  useEffect(() => {
      fetchMovies();
      
    }, []);

  return (
    <section id="results">
        <h1 className="results__header">Search Results For: {SearchContext}</h1>

        <div className="results__wrapper">
          {movies
            .slice(0, 6)
            .map((movie) => <MovieIcon 
            key={movie.imdbID}
            year={movie.Year} 
            poster={movie.Poster ? movie.Poster : "https://orlandoc017.github.io/Module-4---API-Final-Project/assets/clapperboard-film-clip-art-dymo-cliparts-758df47cc87ec6092697f35ca8fe2546.png"} title={movie.Title} />)}
            
        </div>
        

    </section>
  )
}
