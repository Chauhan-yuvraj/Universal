import './App.css'
import './App.scss'
import Seasons4 from './components/Basics/Seasons4'
import HeroSection from './components/Basics/NavBar/HeroSection';
import UpcomingMovie from './components/Basics/UpComingMovies/UpcomingMovie';
const App = () => {
  return (
    <>
    <HeroSection/>
      <Seasons4 />
      <UpcomingMovie />
    </>
  )
}

export default App;