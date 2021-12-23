import React from 'react'
import '../Section.css'
import 'react-vertical-timeline-component/style.min.css';
import ExperienceTimeline from './ExperienceTimeline/ExperienceTimeline';

const Experience = () => {
    return (
        <div className='Section' id='experience'>
            <div>
                <h1 className='Heading'>
                    Experience
                </h1>
                <ExperienceTimeline />
            </div>
        </div >
    )
}

export default Experience
