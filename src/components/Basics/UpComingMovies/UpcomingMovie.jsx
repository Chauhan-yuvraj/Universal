import OtherMovieCard from './otherMovieCard'
// import './upcomingMovies.scss'
import React from 'react'

const UpcomingMovie = () => {
    return (
        <>
            <div className="main-card">
                <div className="ucmovie">
                    <div className="mainMovie">
                        <img src="https://c4.wallpaperflare.com/wallpaper/760/990/467/kung-fu-panda-wallpaper-preview.jpg" alt="" />
                        <div className="movie-details">
                            <div className="movie-title"></div>
                            <div className="movie-desc"></div>
                        </div>
                    </div>
                    <div className="otherMovie">
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingMovie
