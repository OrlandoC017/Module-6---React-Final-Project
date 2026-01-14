import React from "react";
import Logo from "../Assets/Movie_Database-Cropped.png"

export default function About() {
  return (
      <section id="home">

      <img src={Logo} alt="" className="homeLogo" />
      <h2 className="about__para">
        Movie Database is a modern, user-friendly web application built with React that lets you explore the world of movies in one place. Movie Database allows users to browse films, discover detailed information such as ratings, genres, and cast, and stay up to date with popular and trending titles. The goal of Movie Database is to provide a clean, fast, and intuitive experience for movie lovers who want quick access to reliable film information and an easy way to discover what to watch next.
      </h2>

    </section>
  );
}
