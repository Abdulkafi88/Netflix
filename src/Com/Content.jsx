import React from "react"
import Logo from "../assets/netflix-logo.jpg"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../Style/Content.css"
import img from "../assets/netflix-logo.jpg"
const Content = ({ type }) => {
  const [discover, setdiscover] = useState([])
  const [mainimgs ,setmainimgs] = useState([])
  const [movieTitle,setMovieTitle]= useState([])
  const[overview,setoverview] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieResponse = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
        )
        const movieData = await movieResponse.json()
          const mainImg = movieData.results.slice(0, 1)
          const movieTitle = movieData.results[0].name
          const overview = movieData.results[0].overview
            setoverview(overview)
            setMovieTitle(movieTitle)
        const limitedMovies = movieData.results.slice(0, 4)
          setmainimgs(mainImg)
        setdiscover(limitedMovies)
        console.log(movieData.results)
      } catch (error) {
        console.error("Error fetching movies:", error)
      }
    }
    fetchMovies()
  }, [])

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <span>KID</span>

            <img
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="profile">
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        {/* <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> */}
        {mainimgs.map((mainimgsMovies, index) => (
          <img
            src={`https://image.tmdb.org/t/p/original${mainimgsMovies?.backdrop_path}`}
            alt=""
          />
        ))}
        <div className="info">
          {/* <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
          /> */}
          <h1>{movieTitle}</h1>
          <span className="desc">
           <p>{overview}</p>
          </span>
          <div className="buttons">
            <button className="play">
              <i class="fa-solid fa-play"></i>
              <span className="p">Play</span>
            </button>
            <button className="more">
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
      <div class="netflixOriginals">
        <div class="original__header">
          <h2>NETFLIX ORIGINALS</h2>
        </div>
        <div class="original__movies">
          {discover.map((movies, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Content

