import React, { useState } from 'react'
import Movie from './MovieApi'
import MovieCard from './MovieCard'
import './MovieList.scss'

const MovieList = () => {
  const [movieData, setMovieData] = useState(Movie)
  return (
    <div>
      <div className="movie-list">
        <div className="movie-list-heading">Latest Distributions ...... </div>
        <div className="movie-card-container">
          <MovieCard movieData={movieData} className="movie-card" />
        </div>

      </div>
    </div>
  )
}

export default MovieList
