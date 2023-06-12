import { useState } from 'react'


import Header from "../components/Header"
import PhotoCard from "../components/PhotoCard"
import './App.css'

import unityLogo from "../src/assets/logo-unity.png"
import robloxLogo from "../src/assets/logo-roblox-studio.png"
import outsystemsLogo from "../src/assets/logo-outsystems.webp"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Wedding from '../components/Wedding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      

      <div className='app-body'>
        <h2 className='section-title'>Game Development</h2>
        <div className='cards-container'>
          
          <PhotoCard 
            title="Unity" 
            image={unityLogo}
            description="Experienced in creating 2D and 3D games with multiplayer capabilities on mobile and desktop platforms."/> 
          <PhotoCard 
            title="Roblox Studio" 
            image={robloxLogo}
            description="Developed two Roblox games for two luxury resorts."/> 

        </div>


        <h2 className='section-title'>Web Development</h2>
        <div className='cards-container'>
          <PhotoCard 
            title="Outsystems" 
            image={outsystemsLogo}
            description="Currently leading the development of a portal for the Philippine Bar Examination and Bar Application Management Systems"/> 
          <PhotoCard 
            title="React" 
            image={reactLogo}
            description=""/> 
        </div>


        <h1>About Me</h1>
        <p>About MeAbout MeAbout MeAbout MeAbout MeAbout MeAbout MeAbout MeAbout Me</p>
        
      </div>

      <Wedding/>




    </>
  )
}

export default App
