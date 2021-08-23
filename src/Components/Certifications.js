import React from 'react'
import './Certification.css';
import ibmbadge from '../Static/ibmbadge.png'
import az900 from '../Static/az900.png'

function Certifications(props) {
    var textColor;
    if(props.theme === 'dark'){
        textColor = 'white'
    } else{
        textColor = 'black'
    }
    return (
        <>
            <div id='certificationsRef' className="container-fluid">
                <h1 className='d-flex justify-content-center' style={{ marginTop: '5%'}}><i className="bi bi-patch-check-fill"> My Certifications</i></h1>
                <br></br>
                <div className="row d-flex justify-content-center">
                    <div className="card CertificationCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={az900} alt="Azure900 Logo"/>
                        <div className="card-body CertificationBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">Microsoft Certified: Azure Fundamentals</p>
                            <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://www.credly.com/badges/29034a28-a2cb-498c-875f-070d6c900938/public_url' target="_blank" rel="noopener noreferrer">Issued by Microsoft</a></p>
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">January, 2021</p>
                        </div>
                    </div>
                    <div className="card CertificationCard" style={{width: '35rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src={ibmbadge} alt="IBM Badge Logo"/>
                        <div className="card-body CertificationBody">
                            <p style={{margin: '0', color:textColor, fontSize: '18px', paddingLeft: '1rem'}} className="card-text">Cloud Computing & Virtualization Graduate</p>
                            <p style={{margin: '0', color:textColor, fontSize: '17px', paddingLeft: '1rem'}} className="card-text"><a style={{color:textColor}} href='https://www.credly.com/badges/2378c8bd-d48e-4489-a213-7b5c4b3904ac/public_url' target="_blank" rel="noopener noreferrer">Issued by IBM</a></p>
                            <p style={{margin: '0', color:textColor, fontSize: '16px', paddingLeft: '1rem'}} className="card-text">May, 2020</p>
                        </div>
                    </div>
                    {/* <div className="card ExperienceCard" style={{width: '32rem', paddingLeft: '5%'}}>
                        <img style={{width: '4rem'}} className="card-img-top" src="https://www.accenture.com/t20190904T055750Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_GT_Dimensional_Purple_RGB_REV.svg" alt="Accenture Logo"/>
                        <div className="card-body ExperienceBody">
                            <p style={{margin: '0', color:textColor, fontSize: '25px', paddingLeft: '1rem'}} className="card-text">Accenture</p>
                            <p style={{margin: '0', color:textColor, fontSize: '20px', paddingLeft: '1rem'}} className="card-text">Full Stack Engineering Analyst</p>
                            <p style={{margin: '0', color:textColor, fontSize: '15px', paddingLeft: '1rem'}} className="card-text">September, 2020 - Present</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}


export default Certifications

