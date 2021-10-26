import React from 'react'
import styled from 'styled-components'
import TimelineContents from './TimelineContents';

const TileContainer = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Top = styled.div`
    flex-basis: 10%;
    gap: 5%;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    width: 100%;
`;

const TopLeftPadding = styled.div`
    flex-basis: 15%;
    gap: 10px;
`;

const TopImageContainer = styled.div`
    flex-basis: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopRightPadding = styled.div`
    flex-basis: 75%;
    gap: 10px;
`;

const Bottom = styled.div`
    flex-basis: 90%;
`;

const TopImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 30%;
`;


const TimelineTile = ({ date, company, position, description, logo, skills }) => {
    // TODO: Fix for smaller screens
    return (
        <TileContainer className='Body'>
            <Top>
                <TopLeftPadding />
                <TopImageContainer>
                    <TopImage src={logo} alt='Company Logo' />
                </TopImageContainer>
                <TopRightPadding />
            </Top>
            <Bottom>
                <TimelineContents date={date} company={company} position={position} description={description} skills={skills} />
            </Bottom>
        </TileContainer>
    )
}

export default TimelineTile
