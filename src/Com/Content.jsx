import React from "react";
import Logo from "../assets/netflix-logo.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Content.css";
import img from '../assets/netflix-logo.jpg'
const Content = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movie = await fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
      );
      const res = await movie.json();

      setPopular(res.results);

      console.log(res.results);
    };
    fetchMovies();
  }, []);
  return (
    <>
      <header className="nav-content">
        <div className="netflixLogo">
          <a id="logo" href="#home">
            <img
              src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
              alt=""
            />
          </a>
        </div>
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#tvShows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#originals">Originals</a>
          <a href="#">Recently Added</a>
          <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">
            Portfolio
          </a>
        </nav>
        <nav className="sub-nav">
          <a href="#">
            <i className="fas fa-search sub-nav-logo"></i>
          </a>
          <a href="#">
            <i className="fas fa-bell sub-nav-logo"></i>
          </a>
          <a href="#">Account</a>
        </nav>
      </header>
      
         
         
    <div className="movies">
    <div id="trending" class="movies__container">
      {popular.map((movie,index)=>(
        <img src={img}></img>
      
      ))}
        </div>

    </div>


    
    </>
  );
};

export default Content;

{
  /* <Link key={index} href=""><img   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}  alt="" /></Link> */
}
// movie.poster_path ? (
//   <Link key={index} href=""><img   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}  alt="" /></Link> 
// ) : (
//   <Link key={index} href=""><img   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}  alt="" /></Link> 
// )

