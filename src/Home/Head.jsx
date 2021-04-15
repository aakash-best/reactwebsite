import React from 'react'
import Image from '../image/13.jpg'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Container = styled.div`
padding:2%;
background-color:rgb(252 255 214);
height: 100vh;
display: flex;

@media screen and (max-width:570px)
{
    margin-top: 23%;
display:block;

}
button{
margin:2% 0%;
height:50px;
width:100px;
background-color:yellow;
cursor:pointer;
border: none;
}
button:hover{
color:white;

}

`
const Line = styled.div`
flex-direction: column;
flex-basis:50% ;
display:flex;
justify-content:center;
align-items: center;

`
const Imagee = styled.div`
flex-basis:50% ;
text-align: center;
img{
width:100%;
height:90%;

}




`
const Headline = styled.div`
@media screen and (min-width:570px){
width:100%;
}
`
const H = styled(motion.h1)`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
@media screen and (max-width:570px){
   text-align: center;
    }

span{
color:blue;

}




`

function Head(){
const Tittleanime = {
hidden:{
    y:200,
    opacity:0,
},
show:{
    y:0,
    opacity:1,
    transition:{
        duration:1
    }
}

}

const Imgs = {
hidden:{
    scale:1.2,
    opacity:0
},
show:{
    scale:1,
    opacity:1,
    transition:{
        duration:1
    }
}


}


return(
<>
<Container>
<Line>
    <Headline>
<H variants={Tittleanime}>Are you looking for<br/> <span>FrontEnd Developer</span></H>

    </Headline>

    <motion.p variants={Tittleanime} >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus a magnam suscipit minus? Ab nesciunt fugit quidem dolore sunt eligendi dolorem repellendus distinctio voluptatem quaerat, impedit vitae ipsam minima sapiente.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ipsum ea in commodi iste totam facere nihil officia cum. Autem voluptatum ex corrupti totam, ut soluta est saepe assumenda molestias?
   </motion.p>
   <Headline>
<motion.button variants={Tittleanime} >Contact Us</motion.button>
</Headline>
</Line>
<Imagee>
<motion.img variants={Imgs} src={Image} alt="image"/>
    
</Imagee>


</Container>


</>


)


}
export default Head