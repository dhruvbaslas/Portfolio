import React from 'react'
import './Projects.css';
import angular from '../Static/angular.png'
import watson from '../Static/watson.png'
import openstack from '../Static/openstack.png'
import abc from '../Static/abc.png'
import logo from '../logo.svg'

function Projects(props) {
    var textColor;
    if(props.theme === 'dark'){
        textColor = 'white'
    } else{
        textColor = 'black'
    }
    return (
        <>
            <div id='projectsRef' className="container-fluid">
                <h1 className='d-flex justify-content-center' style={{ marginTop: '5%'}}><i className="bi bi-bookmark"> My Projects</i></h1>
                <br></br>
                <div className="row d-flex justify-content-center">
                    <div className="card ProjectCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={logo} alt="React Logo"/>
                        <div className="card-body ProjectBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">Portfolio</p>
                            <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://dhruvbaslas.github.io' target="_blank" rel="noopener noreferrer">Personal Portfolio</a></p>
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">ReactJS website for my personal Portfolio which has all data about My Work, Certifications, Contacts and Projects.</p>
                        </div>
                    </div>
                    <div className="card ProjectCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={abc} alt="ABC Logo"/>
                        <div className="card-body ProjectBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">ABC Optical Showcase Website</p>
                            <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://abcopticals.in' target="_blank" rel="noopener noreferrer">ABC Opricals</a></p>
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">Developed ABC Optical Online Portal a eye-wear showcase website powered by Firebase</p>
                        </div>
                    </div>
                    
                    <div className="card ProjectCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={angular} alt="IBM Badge Logo"/>
                        <div className="card-body ProjectBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">Micro-service Based Angular Website</p>
                            {/* <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://www.credly.com/badges/2378c8bd-d48e-4489-a213-7b5c4b3904ac/public_url' target="_blank" rel="noopener noreferrer">Issued by IBM</a></p> */}
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">Created Angular website which fetches data from API created via Express JS which used nodeJS micro-services to query MongoDB for data (MEAN STACK).
</p>
                        </div>
                    </div>
                    <div className="card ProjectCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={openstack} alt="IBM Badge Logo"/>
                        <div className="card-body ProjectBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">Private Cloud and Storage Deployment</p>
                            {/* <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://www.credly.com/badges/2378c8bd-d48e-4489-a213-7b5c4b3904ac/public_url' target="_blank" rel="noopener noreferrer">Issued by IBM</a></p> */}
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">
                            <li>Using Open-Stack to configure Private Cloud.</li>
                            <li>Deploying NextCloud for Virtual Cloud Storage.</li>
                            <li>Deploying MiniSat OpenSource tool for VM's'.</li>
                            </p>
                        </div>
                    </div>
                    <div className="card ProjectCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={watson} alt="IBM Badge Logo"/>
                        <div className="card-body ProjectBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">IBM Watson Chatbot</p>
                            {/* <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://www.credly.com/badges/2378c8bd-d48e-4489-a213-7b5c4b3904ac/public_url' target="_blank" rel="noopener noreferrer">Issued by IBM</a></p> */}
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">Chatbot for Social Media Page using IBM Watson</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Projects

