import React from 'react'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Movie(props) {
    return (
        <div className="movie-container">
            <img src={`${IMG_BASE_URL}${props.movieData.poster_path}`} alt="영화 포스터" />
            <div className='movie-info'>
                <h4>{props.movieData.title}</h4>
                <span>{props.movieData.vote_average}</span>
            </div>

            <div className="overview">
                <h4>{props.movieData.title}</h4>
                <p>{props.movieData.overview}</p>
            </div>
        </div>
    );
  }
  
  export default Movie;