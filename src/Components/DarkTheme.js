import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import {Link} from 'react-scroll'

function DarkTheme(props) {
    const [theme, setTheme] = useState(props.theme);
    const [bulbColor, setBulbColor] = useState('yellow');
    const [textColor, setTextColor] = useState('white');
    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        setBulbColor('yellow')
        setTextColor('white')
        props.themeType('dark')
        } else {
        setTheme('light');
        setBulbColor('black')
        setTextColor('black')
        props.themeType('light')
        }
    }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
          <nav className="navbar navbar-expand-lg bg-transperent">
              <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <a style={{color:textColor}}><i className="bi bi-three-dots-vertical"></i></a>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <h5><Link activeClass="active" to="homeRef" spy={true} smooth={true}  style={{color:textColor}} className="nav-link" aria-current="page" href="#"><i className="bi bi-house-fill"></i> Home</Link></h5>
                    <h5><Link activeClass="active" to="resumeRef" spy={true} smooth={true}  style={{color:textColor}} className="nav-link" href="#"><i className="bi bi-cloud-arrow-down-fill"></i> Resume</Link></h5>
                    <h5><Link activeClass="active" to="experienceRef" spy={true} smooth={true}  style={{color:textColor}} className="nav-link" href="#"><i className="bi bi-stack"></i> Experience</Link></h5>
                    <h5><Link activeClass="active" to="certificationsRef" spy={true} smooth={true}  style={{color:textColor}} className="nav-link" href="#"><i className="bi bi-patch-check-fill"></i> Certifications</Link></h5>
                    <h5><Link activeClass="active" to="projectsRef" spy={true} smooth={true} style={{color:textColor}} className="nav-link" href="#"><i className="bi bi-bookmark"></i> Projects</Link></h5>
                    <h5><Link activeClass="active" to="contactRef" spy={true} smooth={true}  style={{color:textColor}} className="nav-link" href="#"><i width="30" height="30"><i className="bi bi-person-lines-fill"></i></i> Contact</Link></h5>
                    </div>
                    </div>
                  <a className="navbar-brand" href='#'>
                  <i onClick={toggleTheme} width="30" height="30" style={{color:bulbColor}} className="bi bi-lightbulb-fill"></i>
                  </a>
              </div>
          </nav>
      </>
    </ThemeProvider>
    )
}

export default DarkTheme