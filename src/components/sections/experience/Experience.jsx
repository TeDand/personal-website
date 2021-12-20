import React from 'react'
import '../Section.css'
import { ExperienceTimelineItems } from './ExperienceTimelineItems';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'
import styled from 'styled-components'

const CompanyLogo = styled.img`
    width: inherit;
    heigh: inherit;
`;

const Date = styled.p`
    font-size: 3vw;
`;

const Position = styled.h3`
    font-size: 5vw;
    left: 0;
    width: 50%;
    border-bottom: 2px solid var(--highlightColour);
`;

const Company = styled.h5`
    
`;

const Description = styled.p`
    font-weight: 300;
`;

const Experience = () => {
    return (
        <div className='Section' id='experience'>
            <div>
                <h1 className='Heading'>
                    Experience
                </h1>
                <VerticalTimeline className='body'>
                    {
                        ExperienceTimelineItems.map((item, index) => {
                            return (
                                <VerticalTimelineElement key={index} icon={<CompanyLogo src={item.logo} alt="companyLogo" />}>
                                    <Position>
                                        {item.position}
                                    </Position>
                                    <Company>
                                        {item.company}
                                    </Company>
                                    <Description>
                                        {item.description}
                                    </Description>
                                    <Date>
                                        {item.date}
                                    </Date>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
        </div >
    )
}

export default Experience
