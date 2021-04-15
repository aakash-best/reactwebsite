
import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Main = styled.div`
padding:2%;
background-color:rgb(254 255 240);
@media screen and (max-width:570px)
{
margin-top: 23%;
}
`
const Container = styled.div`
padding:2%;
background-color:rgb(252 255 214);
display:flex;
height:88vh;
@media screen and (max-width:570px){
  height:100vh;
  display: block;
  
}
`
const H = styled.h1`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

text-align: center;

span{
color:blue;
}
`
const HH = styled.div`
font-size: 3rem;
text-align: center;
  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

` 
const HHH = styled.div`
font-size: 1rem;
text-align: center;
  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


` 
const Box = styled(motion.div)`
width:50%;
@media screen and (max-width:570px){
  width:100%;
}
text-align: center;
`
const Data = styled.div`
display:flex;
flex-direction:column;
width:60%;
input{
    background:transparent;
    border:none;
    border-bottom:2px solid white;
    padding:30px;
    color:blue;
    
}
input:hover{
    background-color:rgb(255 246 189);
    
    }


button{
    margin-top:20px;
    height:40px;
    width:120px;
    color:gray;
    background:rgb(255 234 105);
    border:none;
    cursor:pointer;
    border:6px solid rgb(255 246 189);
    }

    @media screen and (max-width:570px){
      width:100%;
      input{

        text-align: center;
      
      }



    }


`


function Contact(){



  const PageAnimation = {
    hidden:{
        opacity:0,
        y:300
    
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:1
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
      const zoom = {
hidden:{
opacity:0,
scale:0
},
show:{
  opacity:1,
  scale:1,
  when:"beforeChildren",
  transition:{
    duration:2
  }
}



      } 



return(
<motion.div exit='exit' variants={PageAnimation} initial='hidden' animate='show' >

<Main>
    <H>Contact <span>US</span></H>
<Container>
<Box variants={zoom} initial='hidden' animate='show' >
<div class="main_header">
<HH>Login</HH>
</div>
<Data>
<input type="text" placeholder="Name"></input>

<input type="password" placeholder="Password"></input>
<div class="button_part">
<button>Submit</button>
</div>
</Data>

</Box>
<hr/>
<Box variants={zoom} initial='hidden' animate='show'>

<div class="main_header">
<HH>Register</HH>
</div>
<Data>
<input type="text" placeholder="Name"></input>
<input type="email"  placeholder="Email"></input>
<input type="number" placeholder="Phone Number" ></input>
<div class="button_part">
<button>Submit</button>
</div>
</Data>
</Box>


</Container>
</Main>
</motion.div>
)



}
export default Contact