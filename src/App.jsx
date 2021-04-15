import React from "react";
import styled from 'styled-components'
import {motion}  from 'framer-motion'
import Nav from './file/Nav'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Test from './pages/Test'
import {Route, Switch , useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
function App (){
const location = useLocation();

	return(
		<>
<Nav/>
<AnimatePresence exitBeforeEnter>
<Switch location={location} key={location.pathname}>
<Route path="/" exact>
	<Home/>
</Route>
<Route path="/project">
	<Project/>
</Route>
<Route path="/contact">
	<Contact/>
</Route>
<Route path="/test">
	<Test/>
</Route>


</Switch>
</AnimatePresence>

		</>
	)
	};
const Head = styled.h1`

color:red;
`
const Dead = styled.div`

over-flow:hidden;
`






 export default App

