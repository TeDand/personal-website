import React from 'react'
import EducationList from './educationList/EducationList'
import '../Section.css'

const Education = () => {
    return (
        <div className='Section' id='education'>
            <div>
                <h1 className='Heading'>
                    Education
                </h1>
                <EducationList />
            </div>
        </div>
    )
}

export default Education
