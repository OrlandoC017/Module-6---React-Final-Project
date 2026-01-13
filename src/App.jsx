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
import React, { useEffect, useState, useContext, createContext } from "react";
//npm start on terminal to run

export const SearchContext = createContext();

function App() {
  const [keyword, setKeyword] = useState('');
  return (
    <SearchContext.Provider value = {setKeyword}>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:id" element={<Movie_Profile />} />
            <Route path="/results/:id" element={<Results />} />
          </Routes>
          <Footer />
        </>
      </Router>
   </SearchContext.Provider>
  );
}

export default App;
