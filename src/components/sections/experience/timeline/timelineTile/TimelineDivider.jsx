import React from 'react'
import styled from 'styled-components'

const WholeElement = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const CenterLine = styled.div`
    width: 5%;
    background: linear-gradient(#FFFFFF, #FFFFFF) no-repeat center/2px 100%;
`;

const LeftPadding = styled.div`
    width: 47.5%;
`;

const RightPadding = styled.div`
    width: 47.5%;
`;

const TimelineDivider = () => {
    return (
        <WholeElement>
            <LeftPadding />
            <CenterLine />
            <RightPadding />
        </WholeElement>
    )
}

export default TimelineDivider
