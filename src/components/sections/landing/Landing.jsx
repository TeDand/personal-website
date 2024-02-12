import React from 'react'
// import dataVideo from '../../../assets/landing/data.mp4'
import DocumentEmoji from '../../../emojis/DocumentEmoji'
import CameraEmoji from '../../../emojis/CameraEmoji'
import myPdf from '../../../assets/landing/cv_Tejas_Dandawate.pdf'
import '../Section.css'
import './Landing.css'

const Landing = () => {
    return (
        <div className='Section' id='landing' >
            {/* <video className='Video' autoPlay loop muted>
                <source src={dataVideo} type='video/mp4' />
            </video> */}
            < div className='OverlayText' >
                <h1 className='Heading'>
                    <span className='Highlighted'>Software Developer</span> and <br />
                    <span className='Highlighted'>Electronics Engineer</span>  based in London
                </h1>
                <p className='Body'> Hi! My name is Tejas Dandawate and I'm a driven 4th year Electronics and Information Engineering student at Imperial College London. Being a motivated, hard-working and dedicated person, I enjoy undertaking new challenges and opportunities. My communication, analytical and organisational skills have been honed through group academic projects and work experience where I have proven to be adaptable and dependable. I am keen to explore new opportunities, learn more about my field and work with other like-minded individuals. </p>
                <p className='Body'>
                    <a className='Link' href={myPdf} download="cv_Tejas_Dandawate.pdf">
                        <DocumentEmoji /> View my CV
                    </a>
                    <br />
                    <br />
                    <a className='Link' href="/personal-website/photography-portfolio">
                        <CameraEmoji /> View my photgraphy portfolio
                    </a>
                </p>
            </div >
        </div >
    )
}

export default Landing
