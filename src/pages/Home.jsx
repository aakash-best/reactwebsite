import React from 'react'
import Head from '../Home/Head.jsx'
import Middle from '../Home/Middle.jsx'
import Bottom from '../Home/Bottom.jsx'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'


function Home(){



  const PageAnimation = {
    hidden:{
        opacity:0,
        y:300
    
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            when:"beforeChildren",
            staggerChildren:0.25,

        }
    },
     exit:{
      opacity:0,
      y:300,
transition:{
  duration:0.75,
}
    }
    
    }
 
  
  
return(
  <motion.div exit='exit' variants={PageAnimation} initial='hidden' animate='show'>
  <Head/>
  <Middle/>
<Bottom/>
</motion.div>


)



}
export default Home