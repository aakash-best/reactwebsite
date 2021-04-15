import React from 'react'
import styled from 'styled-components'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const H = styled.h1`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

text-align: center;
margin-top:12%;
span{
color:blue;
}
`

const Container = styled(motion.div)`
padding:2%;
background-color:rgb(252 255 214);
justify-content:space-between;
display: flex;
flex-wrap:wrap;
`

const Main = styled(motion.div)`
padding:2%;
background-color:rgb(254 255 240);
overflow-x: hidden;
min-width:100vw;
`

const Box =styled.div`
flex-basis:15rem;
background-color:#f9f7c2;
min-height:50px;
cursor:pointer;
flex-grow:1;
margin: 4%;
padding:3%;
:hover{
    opacity:0.6;
}



p{
    text-align: center;
}



`
const HH = styled.div`
font-size: 3rem;
text-align: center;
  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

` 

function Middle(){
    const anime ={
        hidden:{
          scale:0.5,
            opacity:0
        },
        show:{
            scale:1,
            opacity:1,
            Transition:{
                duration:1
            }
        }
        
        
        
        }
         
      
        const [element , view] = useInView({threshold:0.5});
        const control = useAnimation();
        console.log(view);
        if(view){
            control.start('show')
        }else{
            control.start('hidden')
        }
    
return(
<>
<Main variants={anime} animate={control} initial='hidden' ref={element} >
  <H>Why <span>Us</span></H>
<Container >
<Box>
    <HH>Time</HH>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
</Box>
<Box>
    <HH>Cost</HH>
    <p>Lorem, ipsum dolor sit amet consectume.</p>
</Box>
<Box>
    <HH>Experience</HH>
    <p>Lorem ipsum, vita ducimus nobis veniam a!</p>
</Box>
<Box>
    <HH>Team Work</HH>
    <p>Lorem ipsum, vita ducimus nobis veniam a!</p>
</Box>
<Box>
    <HH>Trust</HH>
    <p>Lorem ipsum, vita ducimus nobis veniam a!</p>
</Box>
</Container>
</Main>
</>




)



}


export default Middle