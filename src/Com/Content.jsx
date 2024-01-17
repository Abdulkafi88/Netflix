import React from "react"
import Logo from "../assets/netflix-logo.jpg"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../Style/Content.css"
import img from "../assets/netflix-logo.jpg"
const Content = ({ type }) => {
  const [discover, setdiscover] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieResponse = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
        )
        const movieData = await movieResponse.json()

        const limitedMovies = movieData.results.slice(0, 9)

        setdiscover(limitedMovies)
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
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="info">
          <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
          />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            adipisci repellendus eum quasi illo, velit numquam, maxime tempora
            sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic
            repudiandae temporibus eum earum?
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
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <div className="container">
            {discover.map((movies, index) => (
              <img
                key={index}
                className="movies"
                src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                alt={movies.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Content

