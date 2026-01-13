import "./App.css";
import NavBar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Searchbar from "./Components/Searchbar";
import Footer from "./Components/Footer";
import Movie_Profile from "./Pages/Movie_Profile";
import Results from "./Pages/Results";
import React, { useEffect, useState, useContext } from "react";
import { SearchProvider } from "./SearchContext";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
//npm start on terminal to run

function App() {
  return (
    <SearchProvider>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/results/1" element={<Movie_Profile />} />
            <Route path="/results" element={<Results />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </SearchProvider>
  );
}

export default App;
