import React from 'react'
import './Experience.css';

function Home(props) {
    var textColor;
    if(props.theme === 'dark'){
        textColor = 'white'
    } else{
        textColor = 'black'
    }
    return (
        <>
            <div id='homeRef' className="container-fluid">
                <h1 className='d-flex justify-content-center' style={{ marginTop: '5%'}}><i className="bi bi-house-fill"> Home</i></h1>
                <br></br>
                <div className="row d-flex justify-content-center">
                    <div className="card ExperienceCard typewriter" style={{width: '100%', textAlign:'center'}}>
                        <div className="card-body ExperienceBody">
                            <p style={{margin: '0', color:textColor, fontSize: '100%'}} className="card-text"><p id="title">Hello Stranger, I'm Dhruv Baslas</p></p>
                            <p style={{margin: '0', color:textColor, fontSize: '90%'}} className="card-text">I'm going through every technology because I like to explore, I like to code, Netflix and Chill.</p>
                            <p style={{margin: '0', color:textColor, fontSize: '80%'}} className="card-text">I'm very good at keeping secrets!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home

