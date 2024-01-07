import React from 'react'
import Logo from '../assets/netflix-logo.jpg'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Content.css'
const Content = () => {
  const [popular,setPopular] = useState([])
  useEffect(()=>{
    const fetchMovies = async ()=>{
      const movie = await fetch ( " https://api.themoviedb.org/3/movie/popular?api_key=b23286c3a57cc65c9dbb4161cbf89f13 ")
      const res = await movie.json()
    
        setPopular(res.results)
      
      console.log(res.results )
    } 
    fetchMovies()
  },[])
  return (
  <>
   <div className="wrapper">
      {/* HEADER */}
      <header className='con' >
        <div className="netflixLogo">
          <a id="logo" href="#home">
            <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" />
          </a>
        </div>
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#tvShows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#originals">Originals</a>
          <a href="#">Recently Added</a>
          <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>
        </nav>
        <nav className="sub-nav">
          <a href="#"><i className="fas fa-search sub-nav-logo"></i></a>
          <a href="#"><i className="fas fa-bell sub-nav-logo"></i></a>
          <a href="#">Account</a>
        </nav>
      </header>
      {/* END OF HEADER */}

      {/* MAIN CONTAINER */}
  
        {/* Content sections for popular, trending, TV shows, movies, originals */}
        {/* Each section contains a set of images */}
        {/* {popular.map((movie,index)=>(
        
         
            <div className="location" id='home'>
              <h1 id='home'></h1>
              <div className="box">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/300x450"
                  alt={movie.title}
                />
              )}
              </div>
            </div>

         
        ))} */}
        
      
   
          {popular.map((movie,index)=>(
                 <section class="main-container" >
               <div class="location" id="home">
               <h1 id="home">Popular on Netflix</h1>
               <div className="box">
                <img src={Logo} alt="" />
               {/* <Link>{movie.poster_path ? (  <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />): (<img
                  src="https://via.placeholder.com/300x450"
                  alt={movie.title}
                />)}</Link> */}
               </div>
               </div></section>
          ))}
       
   
    

   
      <section className="link">
        <div className="logos">
          {/* Social media icons */}
          <a href="#"><i className="fab fa-facebook-square fa-2x logo"></i></a>
          <a href="#"><i className="fab fa-instagram fa-2x logo"></i></a>
          <a href="#"><i className="fab fa-twitter fa-2x logo"></i></a>
          <a href="#"><i className="fab fa-youtube fa-2x logo"></i></a>
        </div>
        <div className="sub-links">
          {/* List of sub-links */}
          <ul>
            <li><a href="#">Audio and Subtitles</a></li>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </section>
    </div>
  </>
  )
}

export default Content
