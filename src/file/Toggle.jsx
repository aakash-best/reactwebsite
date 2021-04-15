import React,{useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Question = styled(motion.div)`
margin:2%;
cursor:pointer;
padding:2%;
h4{
font-size:2rem;
}
`
const H = styled(motion.h4)`
text-align: center;
padding:2%;

`



function Toggle({children, title}){
const [togglee, settogglee] = useState(false);
return(
<Question layout onClick={()=> settogglee(!togglee)}>
<H layout>{title}</H>
{ togglee ? children : ''}
<hr/>
</Question>
)
}

export default Toggle