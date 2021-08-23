import React from 'react';

function Contact(props) {
    var textColor;
    if(props.theme === 'dark'){
        textColor = 'white'
    } else{
        textColor = 'black'
    }

    return (
        <>
            <div id='contactRef' className="container-fluid">
                <h1 className='d-flex justify-content-center' style={{ marginTop: '5%', paddingBottom: '15px'}}><i className="bi bi-person-lines-fill"> Let's Connect</i></h1>
                <br></br>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-1 d-flex justify-content-center">
                    <h1><a style={{color:textColor}} href="mailto:dhruvbaslas@gmail.com"><i width="30" height="30" className="bi bi-envelope-fill"></i></a></h1>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center">
                    <h1><a style={{color:textColor}} href="https://www.linkedin.com/in/dhruvbaslas/" target="_blank" rel="noopener noreferrer"><i width="30" height="30" className="bi bi-linkedin"></i></a></h1>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center">
                    <h1><a style={{color:textColor}} href="https://github.com/dhruvbaslas" target="_blank" rel="noopener noreferrer"><i width="30" height="30" className="bi bi-github"></i></a></h1>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center">
                    <h1><a style={{color:textColor}} href="https://twitter.com/dhruvbaslas" target="_blank" rel="noopener noreferrer"><i width="30" height="30" className="bi bi-twitter"></i></a></h1>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center">
                    <h1><a style={{color:textColor}} href="https://www.instagram.com/dhruvbaslas/?hl=en" target="_blank" rel="noopener noreferrer"><i width="30" height="30" className="bi bi-instagram"></i></a></h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Contact

