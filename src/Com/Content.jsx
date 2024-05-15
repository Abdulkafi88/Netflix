import React from "react"
import {auth} from '../Firebase'
import { signOut } from "firebase/auth"
import Logo from "../assets/netflix-logo.jpg"
import { useState, useEffect } from "react"
import { Link , useNavigate } from "react-router-dom"
import "../Style/Content.css"
import img from "../assets/netflix-logo.jpg"
import Model from "./Model"
import SignUp from "./SignUp"
const Content = ({ Model, setuser, user }) => {
  const [discover, setdiscover] = useState([])
  const [mainimgs, setmainimgs] = useState([])
  const [movieTitle, setMovieTitle] = useState([])
  const [overview, setoverview] = useState([])
  const [trandingMovies, setTrandingMovies] = useState([])
  const [Toprating, setToprating] = useState([])
  const [isModelOpen, setisModelOpen] = useState(false)
  const navigate = useNavigate()
  const handlModel = () => {
    setisModelOpen(!isModelOpen)
  }

  const handlSignOut =  async() => {
    try{
      await signOut(auth)
      setuser('')
      navigate('/Sign')
    }catch(err){
      console.error(err)
    }
  }
  

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
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }

  const trandingMoviesFetch = async () => {
    try {
      const movieDatas = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045"
      )
      const data = await movieDatas.json()
      console.log(data.results)
      setTrandingMovies(data.results)
    } catch (error) {
      console.error("Error fetching trending movies:", error)
    }
  }

  const TopratingFetch = async () => {
    try {
      const movieDatas = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
      )
      const data = await movieDatas.json()
      setToprating(data.results)
    } catch (error) {
      console.error("Error fetching top-rated movies:", error)
    }
  }

  const fetchMovieTrailer = async (id) => {
    try {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
      )
      const data = await movieData.json()
      if (data.results.length > 0) {
        setTrailerKey(data.results[0].key)
      } else {
        setTrailerKey("")
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovies()
      await trandingMoviesFetch()
      await TopratingFetch()
    }

    fetchData()
  }, [])

  return (
    <div style={{ backgroundColor: "black" }}>
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
            <span> {user}</span>
            <img
              className="userimg"
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />

            {user ? (
              <>
                <Link className="btn" onClick={handlSignOut}>
                  Logou out{" "}
                </Link>
              </>
            ) : (
              ""
            )}

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
            key={index}
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
        {isModelOpen && <Model />}
        <div class="original__header">
          <h2 style={{ margin: "10px" }}>NETFLIX ORIGINALS</h2>
        </div>
        <div class="original__movies">
          {discover.map((movies, index) => (
            <img
              onClick={() => {
                fetchMovieTrailer(movies.id)
                handlModel(!isModelOpen)
              }}
              key={index}
              src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
      <div class="movies">
        <div class="movies__header">
          <h2>Trending Now</h2>
        </div>
        <div id="trending" class="movies__container">
          {trandingMovies.map((movies, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
              alt=""
            />
          ))}
        </div>
        <div class="movies__header">
          <h2>Top Rated</h2>
        </div>
        <div id="top_rated" class="movies__container">
          {Toprating.map((movies, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
