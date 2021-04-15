import React from 'react'
import styled from 'styled-components'
import {motion, AnimateSharedLayout} from 'framer-motion'
import Toggle from '../file/Toggle'
const H = styled.h1`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

text-align: center;

span{
color:blue;
}
`

const Container = styled.div`
padding:2%;
background-color:rgb(252 255 214);


`
const Main = styled.div`
padding:2%;
background-color:rgb(254 255 240);
@media screen and (max-width:570px)
{
margin-top: 23%;
}
`


const HH = styled.div`
font-size: 3rem;
text-align: center;
  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

` 

const Answer = styled.div`
padding:2%;
p{
    text-align: center;
    padding:2%;

}
`


function Project(){
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
        duration:.75,
      }
          }
        
        }



return(
<motion.div exit='exit' variants={PageAnimation} initial='hidden' animate='show'>

<Main>
    <H>Any <span>Question</span></H>
<Container>
    <AnimateSharedLayout>
    <Toggle title="1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.">

<Answer>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?</p>
</Answer>

</Toggle>
<Toggle title='2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'>

<Answer>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?</p>
</Answer>

</Toggle>
<Toggle title='3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'>

<Answer>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?</p>
</Answer>

</Toggle>
<Toggle title='4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'>

<Answer>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?</p>
</Answer>

</Toggle>
<Toggle title='5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'>

<Answer>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?</p>
</Answer>
</Toggle>
</AnimateSharedLayout>
</Container>
</Main>

</motion.div>
)



}
export default Project