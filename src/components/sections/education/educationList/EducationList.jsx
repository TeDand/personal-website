import React from 'react'
import EducationTile from './EducationTile'
import { EducationListItems } from './EducationListItems'

const EducationList = () => {
    return (
        <ul style={{ width: '100%' }}>
            {EducationListItems.map((item, index) => {
                return (
                    <EducationTile date={item.date} qualification={item.qualification} institution={item.institution} description={item.description} key={index} />
                )
            })}
        </ul>
    )
}

export default EducationList
