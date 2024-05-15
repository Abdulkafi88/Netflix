import React from "react"
import "../Style/Model.css"

const Model = ({ trailerKey, onClose, movieTitle }) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerKey}`

  return (
    <>
      <div id="popup" style={{ display: "block" }}>
        <div className="popup-container">
          <div className="popup">
            <div className="close-popup" id="closeBtn" onClick={onClose}>
              <a href="#">X</a>
            </div>
            <h2>{movieTitle}</h2>
            <div className="movie">
              <iframe
                title="movie-trailer"
                src={youtubeEmbedUrl}
                frameborder="0"
              ></iframe>
            </div>
            <a href="#" className="popup-btn">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Model
