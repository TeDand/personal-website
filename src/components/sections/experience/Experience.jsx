import React from 'react'
import '../Section.css'
import Timeline from './timeline/Timeline'

const Experience = () => {
    return (
        <div className='Section' id='experience'>
            <div>
                <h1 className='Heading'>
                    Experience
                </h1>
                <Timeline />
            </div>
        </div>
    )
}

export default Experience
