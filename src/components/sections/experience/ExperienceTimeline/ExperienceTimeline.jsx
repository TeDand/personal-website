import React from 'react'
import { ExperienceTimelineItems } from './ExperienceTimelineItems';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './ExperienceTimeline.css'
import styled from 'styled-components'

const CompanyLogo = styled.img`
    width: inherit;
    heigh: inherit;
`;

const Date = styled.p`
    font-size: clamp(2pt, 10pt, 10pt);
`;

const Position = styled.h3`
    font-size: clamp(7pt, 18pt, 18pt);
    left: 0;
    width: 50%;
    border-bottom: 2px solid var(--highlightColour);
`;

const Company = styled.h5`
    
`;

const Description = styled.p`
    font-weight: 300;
`;

const ExperienceTimeline = () => {
    return (
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
    )
}

export default ExperienceTimeline
