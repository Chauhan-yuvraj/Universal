import React, { useState } from 'react'
import UpcomingMovieCard from './UpcomingMovieCard'
import './upcomingMovies.scss'
import UpComingMoviesAPI from './UpcomingMovieApi'
const UpcomingMovie = () => {
    const [UpcomingMovieData , setUpcomingMovieData] = useState(UpComingMoviesAPI)
    return (
        <>
            <div className="omain-card">
                <div className="ucmovie">
                    <div className="omainMovie">
                        <div className="omovie-details">
                            <div className="omovie-title">Kung Fu Panda 4</div>
                            <div className="omovie-desc">After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm... <span>Animation</span> </div>
                        </div>
                    </div>
                    <div className="otherMovie">
                     <UpcomingMovieCard UpcomingMovieData={UpcomingMovieData}/>
                     {/* <UpcomingMovieCard/>
                     <UpcomingMovieCard/> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpcomingMovie
