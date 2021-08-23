import React from 'react'
import './Experience.css';
import gla from '../Static/gla.png'
import tedx from '../Static/tedxglau.png'

function Experience(props) {
    var textColor;
    if(props.theme === 'dark'){
        textColor = 'white'
    } else{
        textColor = 'black'
    }
    return (
        <>
            <div id='experienceRef' className="container-fluid">
                <h1 className='d-flex justify-content-center' style={{ marginTop: '5%'}}><i className="bi bi-stack"> My Experience</i></h1>
                <br></br>
                <div className="row d-flex justify-content-center">
                    <div className="card ExperienceCard" style={{width: '32rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src="https://www.accenture.com/t20190904T055750Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_GT_Dimensional_Purple_RGB_REV.svg" alt="Accenture Logo"/>
                        <div className="card-body ExperienceBody">
                            <p style={{margin: '0', color:textColor, fontSize: '25px', paddingLeft: '1rem'}} className="card-text">Accenture</p>
                            <p style={{margin: '0', color:textColor, fontSize: '20px', paddingLeft: '1rem'}} className="card-text">Full Stack Engineering Analyst</p>
                            <p style={{margin: '0', color:textColor, fontSize: '15px', paddingLeft: '1rem'}} className="card-text">September, 2020 - Present</p>
                        </div>
                    </div>
                    <div className="card ExperienceCard" style={{width: '32rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={gla} alt="GLA Logo"/>
                        <div className="card-body ExperienceBody">
                            <p style={{margin: '0', color:textColor, fontSize: '25px', paddingLeft: '1rem'}} className="card-text">GLA University</p>
                            <p style={{margin: '0', color:textColor, fontSize: '20px', paddingLeft: '1rem'}} className="card-text">Computer Science & Engineering</p>
                            <p style={{margin: '0', color:textColor, fontSize: '15px', paddingLeft: '1rem'}} className="card-text">2016 - 2020</p>
                        </div>
                    </div>
                    <div className="card ExperienceCard" style={{width: '32rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={tedx} alt="TEDxGLAU Logo"/>
                        <div className="card-body ExperienceBody">
                            <p style={{margin: '0', color:textColor, fontSize: '25px', paddingLeft: '1rem'}} className="card-text">TEDxGLAU</p>
                            <p style={{margin: '0', color:textColor, fontSize: '20px', paddingLeft: '1rem'}} className="card-text">Head of Publicity</p>
                            <p style={{margin: '0', color:textColor, fontSize: '15px', paddingLeft: '1rem'}} className="card-text">June, 2019 - Dec, 2019</p>
                        </div>
                    </div>
                    {/* <div className="card ExperienceCard" style={{width: '32rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src="https://www.accenture.com/t20190904T055750Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_GT_Dimensional_Purple_RGB_REV.svg" alt="Accenture Logo"/>
                        <div className="card-body ExperienceBody">
                            <p style={{margin: '0', color:textColor, fontSize: '25px', paddingLeft: '1rem'}} className="card-text">TedxGLAU</p>
                            <p style={{margin: '0', color:textColor, fontSize: '20px', paddingLeft: '1rem'}} className="card-text">Head of Publicity</p>
                            <p style={{margin: '0', color:textColor, fontSize: '15px', paddingLeft: '1rem'}} className="card-text">June, 2019 - Dec, 2019</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}


export default Experience

