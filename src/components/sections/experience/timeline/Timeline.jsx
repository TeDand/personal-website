import React from 'react'
import { ExperienceTimelineItems } from './ExperienceTimelineItems'
import TimelineTile from './timelineTile/TimelineTile'

const Timeline = () => {
    return (
        <ul style={{ width: '100%' }}>
            {ExperienceTimelineItems.map((item, index) => {
                return (
                    <TimelineTile date={item.date} company={item.company} position={item.position} description={item.description} logo={item.logo} skills={item.skills} key={index} />
                )
            })}
        </ul>
    )
}

export default Timeline
