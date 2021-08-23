import React from 'react';
import './Experience.css'
import resume from '../Static/resume.jpg'
import resumepdf from '../Static/resume.pdf'

function Resume(props) {
    var textColor;
    if(props.theme === 'dark'){
        textColor = 'white'
    } else{
        textColor = 'black'
    }
    return (
        <> 
            <div id='resumeRef' className="container-fluid">
                <h1 className='d-flex justify-content-center' style={{ marginTop: '5%'}}><i className="bi bi-cloud-arrow-down-fill"> Resume</i></h1>
                <br></br>
                <div className="row d-flex justify-content-center">
                    <a style={{fontSize: '40px', color:textColor, textAlign: 'center'}} href={resumepdf}  target="_blank" rel="noopener noreferrer"><i className="bi bi-download"></i></a>
                    <div className="card ExperienceCard" style={{width: '80%'}}>
                        <img style={{width: '75%'}} className="card-img-top" alt='Resume' src={resume}></img>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Resume

