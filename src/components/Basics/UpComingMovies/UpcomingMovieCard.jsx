import React from 'react'

const UpcomingMovieCard = ({ UpcomingMovieData }) => {
    return (
        <>
            {UpcomingMovieData.map((CurEle) => {
                return (
                    <>
                        <div className="oMovieCard" key={CurEle.id}>
                            <div className="otherMovieDec" style={{backgroundImage : `url('${CurEle.image}')`}}>
                                <div className="otherMovieContent">
                                    <div className="othermovieTitle">{CurEle.movieTitle}</div>
                                    <div className="othermovieStats">
                                        <div className="othermovieDuration">{CurEle.movieDur}</div>
                                        <div className="othermovieCategory">{CurEle.movieCat}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default UpcomingMovieCard
