import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Mobilenavbar = styled.div`
background-color:rgb(255 234 105);
display:none;
height:10vh;
width:100vw;

justify-content:space-between;
align-items:center;
position: fixed;
font-size:2rem;
top:0;
left:0;
@media screen and (max-width:570px)
{
    margin-bottom:12%;
display:flex;

}


`





function Mobile(){
const [slider, setslider]  = useState(false);
    return (
       <>
            <Mobilenavbar>
                <FaIcons.FaBars onClick={()=> setslider(!slider)} className="icon"/>
                
                <div className="mobilelogo">FRONTVIEW</div>
            </Mobilenavbar>
            
            <div className={slider ? 'nav-menus' :' nav-menu'} onClick={()=> setslider(!slider)}  >

                    <ul>
                           <li >
                            
                           <AiIcons.AiOutlineClose className="icons"/>

                           </li>
                           <li><NavLink to="/" >HOME</NavLink></li>
                  <li><NavLink to="/project">ABOUT</NavLink></li>
                  <li><NavLink to="/contact">CONTACT</NavLink></li>
                    </ul>




            </div>
            
       </>
    )
}







//......................................................................................
const Navbar = styled.div`
background-color: black;
color:white;
display:flex;
justify-content:space-between;
padding:1%;
width:100%;
`
const Way = styled.ul`
display:flex;
justify-content:space-around;
`

const Logo = styled.div`
color: white;
    font-family: ;
    min-width: 100%;
    text-align: center;
    font-family: cursive;
    font-size: 2rem;
`



function Nav(){





return(
<>

<div class="navbar">
            <div class="logo">
            FrontView
           </div>
            <div class="link">
                  <ul>
                  <li><NavLink to="/" >HOME</NavLink></li>
                  <li><NavLink to="/project">ABOUT</NavLink></li>
                  <li><NavLink to="/contact">CONTACT</NavLink></li>
                  </ul>
            </div>


  </div>

<Mobile/>


</>




)


}
export default Nav