import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const H = styled.h1`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

text-align: center;

span{
color:blue;
}
`

const Container = styled.div`
background-color:rgb(252 255 214);
height:88vh;
display:flex;
justify-content:center;
align-items: center;

button{
width: 120px;
margin:2%;
height:60Px;
cursor:pointer;
border:none;
background-color: rgb(247, 245, 150);
color:blue;
font-size:1rem;
}
`
const Main = styled.div`

background-color:rgb(254 255 240);
`


const HH = styled.div`
font-size: 3rem;

  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

` 
 const Topper = styled.div`
 positon:fixed;
 top:0;
 left:0;
 min-width:100%;
 min-height:87vh;
 background-color: rgb(252 255 214);
transition:3;
overflow:hidden;
display: flex;
justify-content:center;
align-items:center;
transition:2;

`
 const Second = styled.div`
 width:50%;
 height:50%;
background-color:rgb(255 234 105);
border-radius:20px;
padding:2%;
display: inline;
box-shadow: 2px 2px 30px 5px black;
transition:2;
 `

 const Data = styled.div`
 display:flex;
 flex-direction:column;
 input{
     background:transparent;
     border:none;
     border-bottom:2px solid white;
     padding:30px;
     color:blue;
     text-align: center;
 }
 input:hover{
     background-color:rgb(255 246 189);
     
     }
     text-align: center;
 
 button{
     margin-top:20px;
     height:40px;
     width:120px;
     color:gray;
     background:rgb(255 234 105);
     border:none;
     cursor:pointer;
     border:6px solid rgb(255 246 189);
    border-radius:10px; 
    }
 
 
 
 
 `
const Mainheader = styled.div`
display: flex;
justify-content: space-between;
width:100%;

button{
width:60px;
height:30px;
cursor:pointer;
border:none;
border-radius:10px; 
background-color:rgb(255 234 105);
border:6px solid rgb(255 246 189);
color:blue;
}

`



function Test(){
const Change = {
hidden:{
scale:0.3,
opacity:0,

},
show:{
scale:1,
opacity:1,
Transition:{
    duration:2
}


}


}



    const [toplogin , settoplogin] = useState(false);
    const [topregister , settopregister] = useState(false);
    console.log(toplogin);
    console.log(topregister);

    return(
        <>
        <Main >


         { 
        toplogin &&
<Topper>
    <Second  >
    
<Mainheader>
<HH>Login</HH>
<button onClick={()=> settoplogin(!toplogin)}>EXIT</button>
</Mainheader>
<Data>
<input type="text" placeholder="Name"></input>

<input type="password" placeholder="Password"></input>
<div class="button_part">
<button>Submit</button>
</div>
</Data>

</Second >
</Topper>

        }
{ 
        topregister &&
<Topper>
<Second>

<Mainheader>
<HH>Register</HH>
<button onClick={()=> settopregister(!topregister)}>EXIT</button>
</Mainheader>
<Data>
<input type="text" placeholder="Name"></input>
<input type="email"  placeholder="Email"></input>
<input type="number" placeholder="Phone Number" ></input>
<div class="button_part">
<button>Submit</button>
</div>
</Data>

</Second>
</Topper>

        }

{ (!topregister && !toplogin) && 



     <Container> 
   

               <button onClick={()=> settoplogin(!toplogin)}>Login</button>
               <button onClick={()=> settopregister(!topregister)}>Register</button>
            </Container>

}
        </Main>

         </>
    )
}

export default Test