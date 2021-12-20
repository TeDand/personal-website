import React from 'react'
import styled from 'styled-components'

const Tile = styled.div`
    position: relative;
    gap: 10%;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    width: 100%;
`;

const LeftColumn = styled.div`
    width: 20%;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const RightColumn = styled.div`
    width: 70%;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const Date = styled.p`
    font-size: 3vw;
`;

const Qualification = styled.p`
    font-size: 5vw;
`;

const Institution = styled.p`
    left: 0;
    width: 50%;
    border-bottom: 2px solid var(--highlightColour);
`;

const Description = styled.p`
    font-weight: 300;
`;

const EducationTile = ({ date, qualification, institution, description }) => {
    return (
        <Tile className='Body'>
            <LeftColumn>
                <Date>{date}</Date>
                <Qualification>{qualification}</Qualification>
            </LeftColumn>
            <RightColumn>
                <Institution>{institution}</Institution>
                <Description>{description}</Description>
            </RightColumn>
        </Tile>
    )
}

export default EducationTile
