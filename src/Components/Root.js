import React from 'react'
import Contact from './Contact'
import Experience from './Experience'
import Certifications from './Certifications'
import Projects from './Projects'
import Resume from './Resume'
import Home from './Home'

function Root(props) {
    return (
        <>
            <Home theme={props.theme}></Home>
            <Resume theme={props.theme}></Resume>
            <Experience theme={props.theme}></Experience>
            <Certifications theme={props.theme}></Certifications>
            <Projects theme={props.theme}></Projects>
            <Contact theme={props.theme}></Contact><br></br>
            <br></br>
        </>
    )
}

export default Root

