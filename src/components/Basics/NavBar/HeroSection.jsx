import React, { useState } from 'react'
import NavBar from './NavBar'
import NavBarContent from './NavBarContent'

const HeroSection = () => {
    const[heroMovie , setheroMovie] = useState(NavBarContent)
  return (
    <div>
      <NavBar heroMovie={heroMovie} />
    </div>
  )
}

export default HeroSection
