import React from 'react'

const UpcomingMovieCard = ({ UpcomingMovieData }) => {
    return (
        <>
            {UpcomingMovieData.map((CurEle) => {
                return (
                    <>
                        <div className="oMovieCard" key={CurEle.id}>
                            <div className="otherMovieDec">
                                <div className="otherMovieContent">
                                    <div className="othermovieTitle">The Lord Of the Rings</div>
                                    <div className="othermovieStats">
                                        <div className="othermovieDuration">2hr 10min</div>
                                        <div className="othermovieCategory">Action</div>
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
