import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = ({ heroMovie }) => {
    const [curSlide, setCurSlide] = useState(0);

    const nextSlide = () => {
        setCurSlide((prevSlide) => (prevSlide === heroMovie.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurSlide((prevSlide) => (prevSlide === 0 ? heroMovie.length - 1 : prevSlide - 1));
    };

    return (
        <div className="NavHero" style={{backgroundImage: `url('${heroMovie[curSlide].bgimage}')`}}>
            <div className="Navbar">
                <div className="FirstHalf">
                    <div className="logo">
                        <img
                            src="https://imgs.search.brave.com/VMDPUofzzx749SbnIigXCod-1FqoArkWmmPgLhE9ZIg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/Y2I3ODIzNGE3Yzc3/NTViZjAwNGMxNDEu/cG5n"
                            alt="DreamWork logo"
                        />
                    </div>
                </div>
                <div className="SecondHalf">
                    <ul>
                        <li>Home</li>
                        <li>Distributions</li>
                        <li>Production</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div className="heroSection">
                <div className="left-slider" onClick={prevSlide}>
                    Previous
                </div>
                <section className="slider" >
                    <div className="content">
                        <div className="movie-title">{heroMovie[curSlide].name}</div>
                        <ul className="movie-stats">
                            <li className="pg">{heroMovie[curSlide].pg}</li>
                            <li className="duration">{heroMovie[curSlide].duration}</li>
                            <li className="imbd">
                                <div className="imbd-logo"></div>
                                <div className="imbd-score">{heroMovie[curSlide].imbd}</div>
                            </li>
                            <li className="year">{heroMovie[curSlide].date}</li>
                        </ul>
                        <div className="dic-movie">{heroMovie[curSlide].discription}</div>
                        <div className="movie-btn">Watch Now</div>
                    </div>
                    <div className="movie-tailer" style={{ backgroundImage: `url('${heroMovie[curSlide].image}')` }}>
                        <img src={heroMovie[curSlide].image} alt="movie-trailer" className='movie-img' />
                    </div>
                </section>
                <div className="right-slider" onClick={nextSlide}>
                    Next
                </div>
            </div>
        </div>
    );
};

export default NavBar;
