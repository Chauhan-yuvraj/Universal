import React from 'react'
import './MovieCard.scss'


const MovieCard = ({movieData}) => {
    // console.log(movieData);

  return (
    <>
        {movieData.map((curElem)=>{
            return (
                <>
                <div className="movie-card" key={curElem.id}>
                <div className="movie-img">
                    <img src={curElem.image} alt={curElem.name} />
                </div>
                <div className="movie-discription">
                    <div className="movie-name">{curElem.name}</div>
                    <div className="movie-details">
                    <div className="movie-duration">{curElem.duration}</div>
                    <div className="movie-category">{curElem.category}</div>
                    </div>
                </div>
              </div>
              </>
            )
        })}
    </>
  )
}

export default MovieCard
