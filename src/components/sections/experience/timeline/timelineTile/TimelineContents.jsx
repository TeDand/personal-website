import React from 'react'
import styled from 'styled-components'
import TimelineDivider from './TimelineDivider';
import SkillsList from './SkillsList';

const Content = styled.div`
    position: relative;
    gap: 5%;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    width: 100%;
`;

const LeftColumn = styled.div`
    flex-basis: 15%;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const MiddleColumn = styled.div`
    flex-basis: 5%;
`;

const RightColumn = styled.div`
    flex-basis: 75%;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const Date = styled.p`
    font-size: 9pt;
    font-weight: 300;
`;

const Position = styled.p`
    font-size: 18pt;
`;

const Company = styled.p`
    left: 0;
    width: 50%;
    border-bottom: 2px solid var(--highlightColour);
`;

const Description = styled.p`
    font-weight: 300;
`;

const TimelineContents = ({ date, company, position, description, skills }) => {
    return (
        <Content>
            <LeftColumn>
                <Company>{company}</Company>
                <Date>{date}</Date>
            </LeftColumn>
            <MiddleColumn>
                <TimelineDivider />
            </MiddleColumn>
            <RightColumn>
                <Position>{position}</Position>
                <Description>{description}</Description>
                <SkillsList skills={skills} />
            </RightColumn>
        </Content>
    )
}

export default TimelineContents
