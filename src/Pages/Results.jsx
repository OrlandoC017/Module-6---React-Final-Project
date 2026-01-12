import React, { useEffect, useState } from "react";
import MovieIcon from '../Components/Movie-Icon'
import './Results.css'
import axios from "axios";


export default function Results() {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const { data } = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=2d9420f2&s=CARS");
    setMovies(data)
  }

  useEffect(() => {
      fetchMovies();
    }, []);

  return (
    <section id="results">
        <h1 className="results__header">Search Results For: (Inquiry)</h1>

        <div className="results__wrapper">
          {movies
            .slice(0.6)
            .map((movies) => (<MovieIcon/>))}
            
        </div>
        

    </section>
  )
}
