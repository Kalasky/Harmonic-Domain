import React from 'react'
import glow from '../styles/glow.module.scss'
import '../styles/index.scss'

// components
import { GlowGrayPrimary, GlowGreenPrimary } from '../components/Buttons'

// assets
import mainHero from '../assets/main-hero.jpg'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div className="" style={{height: '75vh'}}>
      <div className="text-center m-auto  container">
        <div className="justify-center items-center h-full">
          <h1 className={`text-8xl decoration-none ${glow.neonBlue}`}>THE YULA EXPERIENCE</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
