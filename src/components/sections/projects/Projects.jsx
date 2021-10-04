import React from 'react'
import ProjectGrid from './projectGrid/ProjectGrid'
import '../Section.css'

const Projects = () => {
    return (
        <div className='Section Filled' id='projects'>
            <h1 className='Heading'>
                Projects
            </h1>
            <div className='Body'>
                <ProjectGrid />
            </div>
        </div>
    )
}

export default Projects
