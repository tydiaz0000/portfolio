import React  from "react";
import {motion} from "framer-motion"

import unityLogo from "../src/assets/logo-unity.png"
import robloxLogo from "../src/assets/logo-roblox-studio.png"
import outsystemsLogo from "../src/assets/logo-outsystems.webp"
import reactLogo from '../src/assets/react.svg'
import viteLogo from '/vite.svg'
import csLogo from '../src/assets/logo-cs.png'

export default function Carousel () {
    const images = [unityLogo, robloxLogo, outsystemsLogo, reactLogo, viteLogo, csLogo]
    const allImages = images.map((img, i) => 
        <motion.div className="image"  key = {i}>
            <img src={img} className="image-all" />
        </motion.div>
        )
    
    return (

        <motion.div className="carousel">
            <h1>asdasd</h1>
            <motion.div className="inner-carousel">
                {allImages}
                
            </motion.div>
        </motion.div>



    )
}